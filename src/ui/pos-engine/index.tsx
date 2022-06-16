import React from 'react'
import { Product } from '../../interfaces/product';
import AmountValueComponent from '../common/components/amount-value-component';
import ButtonComponent from '../common/components/button-component';
import DropdownSearch from '../common/components/dropdown-serach';
import InputComponent from '../common/components/input-component';
import { Invoice } from '../common/components/invoice';
import Table from '../common/components/table';
import RemoveIcon from '../../assets/component/RemoveIcon';
import SuspendIcon from '../../assets/component/CloseIcon';
import { ComponentProps, useStylesFromThemeFunction } from './POSEngine'
import { Colors } from '../common/colors';
import toast from 'react-hot-toast';
import { addLog } from '../../services/cloud/firebase/logging';

export const POSEngine: React.FC<ComponentProps> = ({
  label,
  options,
  isLoading,
  products,
  disabled
}) => {
  const [quantity, setQuantity] = React.useState(1 as number);
  const [selectedProduct, setSelectedProduct] = React.useState(null as any);
  const [productOptions, setProductOptions] = React.useState([] as {label: string, value: Product}[]);
  const [addedProducts, setAddedProducts] = React.useState([] as any[]);
  const [updateTrigger, setUpdateTrigger] = React.useState(false);
  const classes = useStylesFromThemeFunction();

  React.useEffect(() => {
    if(products){
      setProductOptions(products.map(product => ({label: product.name, value: product})));
    }
  },[])
  
  const productChange = (product: any) => {
    setSelectedProduct(product);
    setQuantity(product.unitsInStock | 0);
  }

  const handleRemoveProduct = (product: any) => {
    setAddedProducts(addedProducts.filter(addedProduct => addedProduct !== product));
  }

  const handleIncreaseQuantity = () => {

  }
  const handleDecreaseQuantity = () => {
    
  }

  const renderAddedProducts = () => {
    setUpdateTrigger(!updateTrigger);
    // render only body
    const renderedProducts = addedProducts.map(product => {
      const { name, unitPrice, quantity } = product;
      const total = unitPrice * quantity;
      return (
          <tr key={name}>
          <td>{name}</td>
          <td>{quantity}</td>
          <td>{unitPrice}</td>
          <td>{total}</td>
          <td>
            <div className={classes.equallyDistantRow}>
              <div className={classes.iconWrapper} onClick={()=>handleRemoveProduct(product)}><RemoveIcon fill={Colors.red} /></div>
            </div>
          </td>
          </tr>
      );
    });
    isLoading = false;
    return renderedProducts;
  }

  const handleProductAdd = () => {
    if(!selectedProduct)
      return;
    isLoading = true;
    addedProducts.forEach(product => {
      if(product.name === selectedProduct.name){
        product.quantity = (parseInt(product.quantity)+ parseInt(quantity.toString()));
        isLoading = false;
        return;
      }
    })
    if(isLoading)
      setAddedProducts([...addedProducts, {...selectedProduct, quantity}]);
    renderAddedProducts();
  }
  
  const handleCancel = () => {
    setAddedProducts([]);
    toast('Order Cancelled');
  }

  const handlePrint = async() => {
    try {
      // confirm order here

      // print here 

      toast.loading('Printing...', {duration: 10000});
      //remove this line after confirm order and print
      throw new Error("Error");
      
    } catch (error) {
      const logResult =await addLog({
        message: error.message,
        path: `${__filename}-handlePrint`,
      });
      toast.error('Error while printing invoice'); 
    }
  }

  const handleConfirm = async() => {
    try {
      // confirm order here

      toast.success('Order Confirmed');
      //remove this line after confirm order
      throw new Error("Error");
      
    } catch (error) {
      const logResult =await addLog({
        message: error.message,
        path: `${__filename}-handleConfirm`,
      });
      toast.error('Error while confirming order'); 
    }
  }

  return (
    <div className={classes.container} >
      <div className={classes.innerContainerLeft}>
        <div className={classes.productSearchContainer}>
          <DropdownSearch
              label="Product"
              options={productOptions}
              placeholder='Search Product'
              onChange={productChange}
            />
            <div className={classes.row}>
              <InputComponent
                label='Quantity'
                name='quantity'
                type='number'
                variant='primary'
                value={`${quantity}`}
                placeholder='0'
                onChange={setQuantity}
              />
              <ButtonComponent
                variant='primary'
                onClick={handleProductAdd}
              ><p>Add</p></ButtonComponent>
            </div>
        </div>
        <div className={classes.productSuggestionContainer}>
          <Table
            tableHeadings={['Product', 'Quantity', 'Price', 'Total','Actions']}
            renderBody={renderAddedProducts}
            loading={isLoading}
          />
        </div>
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
  )
}
