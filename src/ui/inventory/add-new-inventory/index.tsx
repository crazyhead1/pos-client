import React from 'react'
import toast from 'react-hot-toast'
import { addProductIntoInventory } from '../../../parser/inventory'
import { addLog } from '../../../services/cloud/firebase/logging'
import InventoryForm from '../Inventory-form'

const AddNewInventory = () => {

  const onSubmit = async (values) => {
    addProductIntoInventory(values).then(res => {
      toast.success(`${values.name} added successfully`);
    }).catch(e => {
      toast.error(e.message || 'Error while adding product');
      addLog({message: e.message || 'Error while adding product', type: 'error', path: 'inventory/add-new-inventory'});
    });
  }

  const onImageChange = (images) => {

  }
  
  return (
    <div>
        <InventoryForm
          onSubmit={onSubmit}
          onImageChange={onImageChange}
        />
    </div>
  )
}

export default AddNewInventory