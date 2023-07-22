import { useFormik } from "formik";
import React from "react";
import { Col, Row } from "react-bootstrap";
import { getCategories } from "../../../parser/categories";
import { getAllSuppliers } from "../../../parser/supplier";
import { Colors } from "../../common/colors";
import ButtonComponent from "../../common/components/button-component";
import { CATEGORIES } from "../../common/constants";
import { SUB_CATEGORIES_COLLECTION } from "../../common/constants/collections";
import { ComponentProps, useStylesFromThemeFunction } from "./OrderForm";
import DropdownSearch from "../../common/components/dropdown-serach";
import InputComponent from "../../common/components/input-component";
import { Product } from "../../../interfaces/product";
import toast from "react-hot-toast";
import RemoveIcon from "../../../assets/component/RemoveIcon";
import Table from "../../common/components/table";
import { Invoice } from "../../common/components/invoice";
import { addLog } from "../../../services/cloud/firebase/logging";
import { getProductsFromInventory } from "../../../parser/inventory";

const OrderForm: React.FC<ComponentProps> = ({
  onSubmit,
  onChange,
  isLoading,
  product,
  suppliers,
  categories,
  onImageChange,
}) => {
  const classes = useStylesFromThemeFunction();
  const [quantity, setQuantity] = React.useState(1 as number);
  const [selectedProduct, setSelectedProduct] = React.useState(null as any);
  const [addedProducts, setAddedProducts] = React.useState([] as any[]);
  const [renderedSuppliers, setRenderedSuppliers] = React.useState<any[]>([]);
  const [updateTrigger, setUpdateTrigger] = React.useState(false);
  const [renderedCategories, setRenderedCategories] = React.useState<any[]>([]);
  const [productOptions, setProductOptions] = React.useState(
    [] as { label: string; value: Product }[]
  );

  React.useEffect(() => {
    if (product) {
      setProductOptions(
        product.map((product) => ({
          label: `${product.id} - ${product.name}`,
          value: product,
        }))
      );
    } else {
      getProductsFromInventory()
        .then((res) => {
          setProductOptions(
            res?.map((product) => ({
              label: `${product.id} - ${product.name}`,
              value: product,
            }))
          );
        })
        .catch((err) => {
          toast.error(
            err.message ||
              "Unable to fetch products. Please check internet connection"
          );
        });
    }
  }, []);

  const productChange = (product: any) => {
    setSelectedProduct(product);
    setQuantity(product.unitsInStock | 0);
  };

  const handleProductAdd = () => {
    if (!selectedProduct) return;

    let addNewProduct = true;
    isLoading = true;
    addedProducts.forEach((product) => {
      if (
        product.name === selectedProduct.name &&
        parseInt(product.quantity) + parseInt(quantity.toString()) <=
          parseInt(product.unitsInStock)
      ) {
        product.quantity =
          parseInt(product.quantity) + parseInt(quantity.toString());
        isLoading = false;
        addNewProduct = false;
        return;
      }
      if (
        parseInt(product.quantity) + parseInt(quantity.toString()) >
        parseInt(product.unitsInStock)
      ) {
        toast.error("No more units in stock");
        addNewProduct = false;
        return;
      }
    });
    if (isLoading && addNewProduct)
      setAddedProducts([...addedProducts, { ...selectedProduct, quantity }]);
    renderAddedProducts();
  };

  const handleRemoveProduct = (product: any) => {
    setAddedProducts(
      addedProducts.filter((addedProduct) => addedProduct !== product)
    );
  };

  const handleIncreaseQuantity = (concernedProduct: any) => {
    if (!concernedProduct) return;
    isLoading = true;
    addedProducts.forEach((product) => {
      if (product.name === concernedProduct.name) {
        if (parseInt(product.quantity) < parseInt(product.unitsInStock)) {
          product.quantity = parseInt(product.quantity) + 1;
          isLoading = false;
          return;
        } else {
          toast.error("No more units in stock");
          return;
        }
      }
    });
    setUpdateTrigger(!updateTrigger);
  };
  const handleDecreaseQuantity = (concernedProduct: any) => {
    if (!concernedProduct) return;
    isLoading = true;
    addedProducts.forEach((product) => {
      if (product.name === concernedProduct.name) {
        if (parseInt(product.quantity) > 1) {
          product.quantity = parseInt(product.quantity) - 1;
          isLoading = false;
          return;
        } else {
          toast.error("Minimum quantity is 1");
          return;
        }
      }
    });
    setUpdateTrigger(!updateTrigger);
  };

  const renderAddedProducts = () => {
    setUpdateTrigger(!updateTrigger);
    // render only body
    const renderedProducts = addedProducts.map((product) => {
      const { name, unitPrice, quantity } = product;
      const total = unitPrice * quantity;
      return (
        <tr key={name}>
          <td>{name}</td>
          <td>
            <div className={classes.centeredRow}>
              <div className={classes.qualtityButtonWrapper}>
                <ButtonComponent
                  onClick={() => handleDecreaseQuantity(product)}
                >
                  <p>-</p>
                </ButtonComponent>
              </div>
              {quantity}
              <div className={classes.qualtityButtonWrapper}>
                <ButtonComponent
                  onClick={() => handleIncreaseQuantity(product)}
                >
                  <p>+</p>
                </ButtonComponent>
              </div>
            </div>
          </td>
          <td>{unitPrice}</td>
          <td>{total}</td>
          <td>
            <div className={classes.equallyDistantRow}>
              <div
                className={classes.iconWrapper}
                onClick={() => handleRemoveProduct(product)}
              >
                <RemoveIcon fill={Colors.red} />
              </div>
            </div>
          </td>
        </tr>
      );
    });
    isLoading = false;
    return renderedProducts;
  };

  const handleCancel = () => {
    setAddedProducts([]);
    toast("Order Cancelled");
  };

  const handlePrint = async () => {
    try {
      // confirm order here

      // print here

      toast.loading("Printing...", { duration: 10000 });
      //remove this line after confirm order and print
      throw new Error("Error");
    } catch (error) {
      const logResult = await addLog({
        message: error.message,
        path: `${__filename}-handlePrint`,
      });
      toast.error("Error while printing invoice");
    }
  };

  const handleConfirm = async () => {
    try {
      // confirm order here

      toast.success("Order Confirmed");
      //remove this line after confirm order
      throw new Error("Error");
    } catch (error) {
      const logResult = await addLog({
        message: error.message,
        path: `${__filename}-handleConfirm`,
      });
      toast.error("Error while confirming order");
    }
  };

  const getSuppliers = async () => {
    if (suppliers) {
      return suppliers;
    }
    const supplyers = await getAllSuppliers();
    return supplyers;
  };
  const getProductCategories = async () => {
    if (categories) {
      return categories;
    }
    const productCategories = await getCategories(
      SUB_CATEGORIES_COLLECTION.PRODUCTS
    );
    return productCategories;
  };

  const renderSuppliers = async () => {
    return setRenderedSuppliers(
      (await getSuppliers()).map((supplier) => (
        <option key={supplier.id} value={supplier.id}>
          {supplier.name}
        </option>
      ))
    );
  };
  const rendeProductCategories = async () => {
    return setRenderedCategories(
      (await getProductCategories()).map((category) => (
        <option key={category.id} value={category.id}>
          {category.name}
        </option>
      ))
    );
  };
  React.useEffect(() => {
    renderSuppliers();
    rendeProductCategories();
  }, []);
  const initialValues = {
    id: product?.id || "",
    name: product?.name || "",
    unitPrice: product?.unitPrice || "",
    unitsInStock: product?.unitsInStock || "",
    supplyPrice: product?.supplyPrice || "",
    category: product?.category || "",
    description: product?.description || "",
    taxPerUnit: product?.taxPerUnit || "",
    images: product?.images || [],
    supplierId: product?.supplierId || "",
  };
  const validate = (values) => {};
  // const onSubmit = (values) => {

  // }

  const formik = useFormik({
    initialValues,
    validate,
    onSubmit,
  });

  React.useEffect(() => {}, [formik.values.images]);
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div className={classes.container}>
          <div className={classes.innerContainerLeft}>
            <div className={classes.productSearchContainer}>
              <DropdownSearch
                label="Product"
                options={productOptions}
                placeholder="Search Product"
                onChange={productChange}
              />
              <div className={classes.row}>
                <InputComponent
                  label="Quantity"
                  name="quantity"
                  type="number"
                  variant="primary"
                  value={`${quantity}`}
                  placeholder="0"
                  onChange={setQuantity}
                />
                <ButtonComponent variant="primary" onClick={handleProductAdd}>
                  <p>Add</p>
                </ButtonComponent>
              </div>
            </div>
            <div className={classes.productSuggestionContainer}>
              <Table
                tableHeadings={[
                  "Product",
                  "Quantity",
                  "Price",
                  "Total",
                  "Actions",
                ]}
                renderBody={renderAddedProducts}
                loading={isLoading}
              />
            </div>
            {/* <label htmlFor="supplierId">Supplier</label>
            <select
              className="form-control"
              id="supplierId"
              name="supplierId"
              value={formik.values.supplierId}
              onChange={formik.handleChange}
            >
              {renderedSuppliers}
            </select> */}
          </div>
          <div className={classes.innerContainerRight}>
            <Invoice
              products={addedProducts}
              handleCancel={handleCancel}
              handleConfirm={handleConfirm}
              handlePrint={handlePrint}
            />
          </div>
        </div>
        {/* <div className={classes.centeredRow}>
          <Row>
            <Col md={12} sm={12}>
              <div>
                <div className="form-group">
                  <div className={classes.row}>
                    <div className={classes.productSearchContainer}>
                      <DropdownSearch
                        label="Product"
                        options={productOptions}
                        placeholder="Search Product"
                        onChange={productChange}
                      />
                      <div className={classes.row}>
                        <InputComponent
                          label="Quantity"
                          name="quantity"
                          type="number"
                          variant="primary"
                          value={`${quantity}`}
                          placeholder="0"
                          onChange={setQuantity}
                        />
                        <ButtonComponent
                          variant="primary"
                          onClick={handleProductAdd}
                        >
                          <p>Add</p>
                        </ButtonComponent>
                      </div>
                    </div>
                  </div>
                  <label htmlFor="supplierId">Supplier</label>
                  <select
                    className="form-control"
                    id="supplierId"
                    name="supplierId"
                    value={formik.values.supplierId}
                    onChange={formik.handleChange}
                  >
                    {renderedSuppliers}
                  </select>
                </div>
              </div>
            </Col>
          </Row>
        </div> */}
        {/* <div className={classes.centeredRow}>
          <ButtonComponent
            type="submit"
            disabled={formik.isSubmitting}
            style={{ width: "100%", height: "50px" }}
          >
            <h4>
              <b>Submit</b>
            </h4>
          </ButtonComponent>
        </div> */}
      </form>
    </div>
  );
};

export default OrderForm;
