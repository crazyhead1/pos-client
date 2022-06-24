import React, { useState } from 'react';
import {  Tab, Tabs } from 'react-bootstrap';
import toast from 'react-hot-toast';
import { addOneSalesRoute } from '../../parser/sales-route';
import 'boxicons';
import Area from './area';
import Town from './town';
import SalesRouteForm from './sales-route-form';
import SalesRouteList from './sales-route-list';
import ButtonComponent from '../common/components/button-component';

interface ComponentProps {

}

const SalesRoute: React.FC<ComponentProps> = ({

}) => {
  //const classes = useStylesFromThemeFunction();
  // const [activeTab,setActiveTab] = useState('pos');
  const [showSidebar,setShowSidebar] = useState(true);
  const [showSalesRouteList, setShowSalesRouteList] = React.useState(true);
  const handleAddNewClick = () => {
    setShowSalesRouteList(!showSalesRouteList);
  }
    // const onSubmitSupplier = (values,{resetForm})=>{
    //     addOneSupplier(values).then(res => {
    //         toast.success(`${values.name} added successfully`);
    //         resetForm();
    //       }).catch(err => {
    //         toast.error(err.message || 'Something went wrong with adding supplier');
    //       });
    // }
    // const onSubmitCustomer = (values,{resetForm})=>{
    //     addOneCustomer(values).then(res => {
    //         toast.success(`${values.name} added successfully`);
    //         resetForm();
    //       }).catch(err => {
    //         toast.error(err.message || 'Something went wrong with adding customer');
    //       });
    // }
    const onSubmitSalesRoute = (values,{resetForm})=>{
      addOneSalesRoute(values).then(res => {
        toast.success(`${values.name} added successfully`);
        resetForm();
      }).catch(err => {
        toast.error(err.message || 'Something went wrong with adding employee');
      });
    }
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
    <Tabs defaultActiveKey="salesRouteForm" className="mb-3">
        <Tab eventKey="salesRouteForm" title="Sales Route">
          <ButtonComponent
            onClick={handleAddNewClick}
          >
            {showSalesRouteList ?<p>Add New</p>:<p>Back</p>}
          </ButtonComponent>
          {showSalesRouteList ? <SalesRouteList />: <SalesRouteForm onSubmit={onSubmitSalesRoute}/>}
        </Tab>
        <Tab eventKey="area" title="Area">
            <Area />
        </Tab>
        <Tab eventKey="town" title="Town">
            <Town />
        </Tab>
    </Tabs>
  )
}

export default SalesRoute;