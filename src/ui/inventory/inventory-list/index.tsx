import React from 'react'
import EditIcon from '../../../assets/component/EditIcon';
import RemoveIcon from '../../../assets/component/RemoveIcon';
import { Colors } from '../../common/colors';
import Table from '../../common/components/table'
import { useStylesFromThemeFunction } from './InventoryList';
import toast from 'react-hot-toast';
import { Modal } from 'react-bootstrap';

interface ComponentProps {
  products?: any[];
}

const InventoryList: React.FC<ComponentProps> = ({
  products = [
    {
      id: "qwertyuiop",
      name: 'Product 1',
      unitsInStock: 10,
      unitPrice: 10,
      category: 'Category 1',
      description: 'Product 1 description',
    },
    {
      id: "asdfghjkl",
      name: 'Product 2',
      unitsInStock: 20,
      unitPrice: 20,
      category: 'Category 2',
      description: 'Product 2 description',
    },
    {
      id: "zxcvbnm",
      name: 'Product 3',
      unitsInStock: 30,
      unitPrice: 30,
      category: 'Category 3',
      description: 'Product 3 description',
    }
  ]
}) => {
  const classes = useStylesFromThemeFunction();
  const [tableHeadings, setTableHeadings] = React.useState(['id','Title', 'Units in Stock', 'Price', 'category', 'description','Actions'] as string[]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [selectedProduct, setSelectedProduct] = React.useState({} as any);
  //const [showEditModal, setShowEditModal] = React.useState(false);

  // const handleCloseEditModal = () => setShowEditModal(false);
  // const handleShowEditModal = (product: any) => {
  //   setSelectedProduct(product);
  //   setShowEditModal(true);
  // }

  const handleRemoveProduct = (product: any) => {
    try{
      if(window.confirm('Are you sure you want to remove this product?')){
        // call delete product api here

        console.log(product);
        toast.success(`${product.name} removed successfully`);
      } else {
        throw new Error("Product not removed");
        
      }
    }catch(e){
      toast.error(e.message || 'Error while removing product');
      console.log(e.message);
    }
    
  }
  const handleEditProduct = (product: any) => {
    try{
      // call edit product api here
      
      console.log(product);
      toast.success('Product updated successfully');
      }catch(e){
        toast.error('Error while updating product');
        console.log(e.message);
      }
  }
  const renderTableData = () => {
    return products.map(product => {
      return (
        <tr key={product.id} onDoubleClick={()=>handleEditProduct(product)}>
          <td>{product.id}</td>
          <td>{product.name}</td>
          <td>{product.unitsInStock}</td>
          <td>{product.unitPrice}</td>
          <td>{product.category}</td>
          <td>{product.description}</td>
          <td>
            <div className={classes.equallyDistantRow}>
              <div className={classes.iconWrapper} onClick={()=>handleEditProduct(product)}><EditIcon fill={Colors.gray} /></div>
              <div className={classes.iconWrapper} onClick={()=>handleRemoveProduct(product)}><RemoveIcon fill={Colors.red} /></div>
            </div>
          </td>
        </tr>
      );
    });
  }

  if(products.length !== 0){
    renderTableData();
  }

  return (
    <>
      <Table
        tableHeadings={tableHeadings}
        renderBody={renderTableData}
        loading={isLoading}
      />
    </>
  )
}

export default InventoryList