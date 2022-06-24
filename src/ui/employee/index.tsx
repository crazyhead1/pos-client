import React from 'react'
import toast from 'react-hot-toast';
import { addOneEmployee } from '../../parser/employee';
import ButtonComponent from '../common/components/button-component'
import EmployeeForm from './employee-form';
import EmployeeList from './employee-list'

const Employee = () => {
  const [showEmployeeList, setShowEmployeeList] = React.useState(true);
  const handleAddNewClick = () => {
    setShowEmployeeList(!showEmployeeList);
  }

  const onSubmitEmployee = (values,{resetForm})=>{
    addOneEmployee(values).then(res => {
        toast.success(`${values.name} added successfully`);
        resetForm();
        setShowEmployeeList(!showEmployeeList);
      }).catch(err => {
        toast.error(err.message || 'Something went wrong with adding Employee');
      });
  }
  return (
    <div>
      <ButtonComponent
        onClick={handleAddNewClick}
      >
        {showEmployeeList ?<p>Add New</p>:<p>Back</p>}
      </ButtonComponent>
      {showEmployeeList ? <EmployeeList />: <EmployeeForm onSubmit={onSubmitEmployee}/>}
    </div>
  )
}

export default Employee