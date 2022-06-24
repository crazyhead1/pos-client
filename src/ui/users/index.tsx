import React, { useState } from 'react';
import {  Tab, Tabs } from 'react-bootstrap';
import toast from 'react-hot-toast';
import { addOneCustomer } from '../../parser/customer';
import { addOneEmployee } from '../../parser/employee';
import { addOneSupplier } from '../../parser/supplier';
import 'boxicons';
import Customer from '../customer';
import Supplier from '../supplier';
import Employee from '../employee';

interface ComponentProps {

}

const Users: React.FC<ComponentProps> = ({

}) => {
  //const classes = useStylesFromThemeFunction();
  // const [activeTab,setActiveTab] = useState('pos');
  // const [showSidebar,setShowSidebar] = useState(true);
  //   const onSubmitSupplier = (values,{resetForm})=>{
  //       addOneSupplier(values).then(res => {
  //           toast.success(`${values.name} added successfully`);
  //           resetForm();
  //         }).catch(err => {
  //           toast.error(err.message || 'Something went wrong with adding supplier');
  //         });
  //   }
  //   const onSubmitCustomer = (values,{resetForm})=>{
  //       addOneCustomer(values).then(res => {
  //           toast.success(`${values.name} added successfully`);
  //           resetForm();
  //         }).catch(err => {
  //           toast.error(err.message || 'Something went wrong with adding customer');
  //         });
  //   }
  //   const onSubmitEmployee = (values,{resetForm})=>{
  //     addOneEmployee(values).then(res => {
  //       toast.success(`${values.name} added successfully`);
  //       resetForm();
  //     }).catch(err => {
  //       toast.error(err.message || 'Something went wrong with adding employee');
  //     });
  //   }
    // const products = [
    //     {
    //       id: "qwertyuiop",
    //       name: 'Product 1',
    //       unitPrice: 10,
    //       unitsInStock: 10,
    //     },
    //     {
    //       id: "asdfghjkl",
    //       name: 'Product 2',
    //       unitPrice: 20,
    //       unitsInStock: 20,
    //     },
    //     {
    //       id: "zxcvbnm",
    //       name: 'Product 3',
    //       unitPrice: 30,
    //       unitsInStock: 30,
    //     }
    //   ];

    // const renderComponent = (key: string) =>{
    //   switch (key) {
    //     case "add":
    //       return <AddNewInventory />;
    //     break;
    //     case "list":
    //       return <InventoryList />;
    //     break;
    //     case "POS":
    //       return <POSEngine/>;
    //     break;
    //     case "supplier":
    //       return <SupplierForm onSubmit={onSubmitSupplier}/>;
    //     break;
    //     case "customer":
    //       return <CustomerForm onSubmit={onSubmitCustomer}/>;
    //     break;
    //     case "town":
    //       return <TownForm onSubmit={onSubmitTown}/>;
    //     break;
    //     case "area":
    //       return <AreaForm onSubmit={onSubmitArea}/>;
    //     break;
    //     case "salesRoute":
    //       return <SalesRouteForm onSubmit={onSubmitSalesRoute}/>;
    //     break;
    //     case "category":
    //       return <CategoryForm onSubmit={onSubmitCategory}/>;
    //     break;
    //     case "employee":
    //       return <EmployeeForm onSubmit={onSubmitEmployee}/>;
    //     break;
    //     default:
    //       break;
    //   }
    // }

  return (
    <Tabs defaultActiveKey="customer" className="mb-3">
        <Tab eventKey="customer" title="Customer">
            <Customer />
        </Tab>
        <Tab eventKey="supplier" title="Supplier">
            <Supplier />
        </Tab>
        <Tab eventKey="employee" title="Employee">
            <Employee />
        </Tab>
    </Tabs>
  )
}

export default Users;