import React from 'react'
import { Product } from '../../interfaces/product';
import AmountValueComponent from '../common/components/amount-value-component';
import ButtonComponent from '../common/components/button-component';
import DropdownSearch from '../common/components/dropdown-serach';
import InputComponent from '../common/components/input-component';
import { Invoice } from '../common/components/invoice';
import Table from '../common/components/table';
import ValueComponent from '../common/components/value-component';
import { ComponentProps, useStylesFromThemeFunction } from './POSEngine'

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
  const classes = useStylesFromThemeFunction();

  if(products){
    setProductOptions(products.map(product => ({label: product.name, value: product})));
  }
  
  const productChange = (product: any) => {
    setSelectedProduct(product);
    setQuantity(product.unitsInStock);
  }
  const onQuantityChange = (qntity: number) => {
    console.log(qntity);
    setQuantity(qntity);
  }

  const renderAddedProducts = () => {
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
          </tr>
      );
    });
    isLoading = false;
    return renderedProducts;
  }

  const handleProductAdd = () => {
    isLoading = true;
    setAddedProducts([...addedProducts, {...selectedProduct, quantity}]);
    renderAddedProducts();
  }
  return (
    <div className={classes.container} >
      <div className={classes.innerContainerLeft}>
        <div className={classes.productSearchContainer}>
          <DropdownSearch
              label="Product"
              options={productOptions}
              placeholder='Search Product'
              onChange={setSelectedProduct}
            />
            <div className={classes.row}>
              <InputComponent
                label='Quantity'
                name='quantity'
                type='number'
                variant='primary'
                value={`${quantity}`}
                placeholder='0'
                onChange={onQuantityChange}
              />
              <ButtonComponent
                variant='primary'
                onClick={handleProductAdd}
              ><p>Add</p></ButtonComponent>
            </div>
        </div>
        <div className={classes.productSuggestionContainer}>
          <Table
            tableHeadings={['Product', 'Quantity', 'Price', 'Total']}
            renderBody={renderAddedProducts}
            loading={isLoading}
          />
        </div>
      </div>
      <div className={classes.innerContainerRight}>
        <Invoice
          products={addedProducts}
        />
      </div>
    </div>
  )
}
