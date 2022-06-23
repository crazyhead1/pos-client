import React from 'react'
import toast from 'react-hot-toast';
import { addOneCustomer } from '../../parser/customer';
import ButtonComponent from '../common/components/button-component'
import CustomerForm from './customer-form';
import CustomerList from './customer-list'

const Customer = () => {
  const [showCustomerList, setShowCustomerList] = React.useState(true);
  const handleAddNewClick = () => {
    setShowCustomerList(!showCustomerList);
  }

  const onSubmitCustomer = (values,{resetForm})=>{
    addOneCustomer(values).then(res => {
        toast.success(`${values.name} added successfully`);
        resetForm();
        setShowCustomerList(!showCustomerList);
      }).catch(err => {
        toast.error(err.message || 'Something went wrong with adding customer');
      });
  }
  return (
    <div>
      <ButtonComponent
        onClick={handleAddNewClick}
      >
        {showCustomerList ?<p>Add New</p>:<p>Back</p>}
      </ButtonComponent>
      {showCustomerList ? <CustomerList />: <CustomerForm onSubmit={onSubmitCustomer}/>}
    </div>
  )
}

export default Customer