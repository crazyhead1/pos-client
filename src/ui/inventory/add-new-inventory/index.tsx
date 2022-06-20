import React from 'react'
import InventoryForm from '../Inventory-form'

const AddNewInventory = () => {
  const onSubmit = (values) => {

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