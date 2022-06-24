import React from 'react'
import toast from 'react-hot-toast';
import { addOneSupplier } from '../../parser/supplier';
import ButtonComponent from '../common/components/button-component'
import SupplierForm from './supplier-form';
import SupplierList from './supplier-list'

const Supplier = () => {
  const [showSupplierList, setShowSupplierList] = React.useState(true);
  const handleAddNewClick = () => {
    setShowSupplierList(!showSupplierList);
  }

  const onSubmitSupplier = (values,{resetForm})=>{
    addOneSupplier(values).then(res => {
        toast.success(`${values.name} added successfully`);
        resetForm();
        setShowSupplierList(!showSupplierList);
      }).catch(err => {
        toast.error(err.message || 'Something went wrong with adding Supplier');
      });
  }
  return (
    <div>
      <ButtonComponent
        onClick={handleAddNewClick}
      >
        {showSupplierList ?<p>Add New</p>:<p>Back</p>}
      </ButtonComponent>
      {showSupplierList ? <SupplierList />: <SupplierForm onSubmit={onSubmitSupplier}/>}
    </div>
  )
}

export default Supplier