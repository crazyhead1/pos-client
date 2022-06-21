import React from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import toast from 'react-hot-toast';
import { addOneArea } from '../../parser/area';
import { addOneCategory } from '../../parser/categories';
import { addOneCustomer } from '../../parser/customer';
import { addOneEmployee } from '../../parser/employee';
import { addOneSalesRoute } from '../../parser/sales-route';
import { addOneSupplier } from '../../parser/supplier';
import { addtown } from '../../parser/town';
import CategoryForm from '../category/category-form';
import CustomerForm from '../customer/customer-form';
import EmployeeForm from '../employee/employee-form';
import { POSEngine } from '../pos-engine';
import SalesRouteForm from '../sales-route';
import AreaForm from '../sales-route/area';
import TownForm from '../sales-route/town';
import SupplierForm from '../supplier/supplier-form';
import AddNewInventory from './add-new-inventory';
import InventoryList from './inventory-list';

interface ComponentProps {

}

const Inventory: React.FC<ComponentProps> = ({

}) => {

    const onSubmitSupplier = (values,{resetForm})=>{
        addOneSupplier(values).then(res => {
            toast.success(`${values.name} added successfully`);
            resetForm();
          }).catch(err => {
            toast.error(err.message || 'Something went wrong with adding supplier');
          });
    }
    const onSubmitCustomer = (values,{resetForm})=>{
        addOneCustomer(values).then(res => {
            toast.success(`${values.name} added successfully`);
            resetForm();
          }).catch(err => {
            toast.error(err.message || 'Something went wrong with adding customer');
          });
    }
    const onSubmitTown = (values,{ resetForm })=>{
        addtown(values).then(res => {
            toast.success(`${values.name} added successfully`);
            resetForm();
          }).catch(err => {
            toast.error(err.message || 'Something went wrong with adding town');
          });
    }
    const onSubmitArea = (values,{resetForm})=>{
        addOneArea(values).then(res => {
            toast.success(`${values.name} added successfully`);
            resetForm();
          }).catch(err => {
            toast.error(err.message || 'Something went wrong with adding area');
          });
    }
    const onSubmitSalesRoute = (values,{resetForm})=>{
        addOneSalesRoute(values).then(res => {
            toast.success(`${values.name} added successfully`);
            resetForm();
          }).catch(err => {
            toast.error(err.message || 'Something went wrong with adding route');
          });
    }
    const onSubmitCategory = (values,{resetForm})=>{
        addOneCategory(values,values.type).then(res => {
            toast.success(`${values.name} added successfully`);
            resetForm();
          }).catch(err => {
            toast.error(err.message || 'Something went wrong with adding category');
          });
    }
    const onSubmitEmployee = (values,{resetForm})=>{
      addOneEmployee(values).then(res => {
        toast.success(`${values.name} added successfully`);
        resetForm();
      }).catch(err => {
        toast.error(err.message || 'Something went wrong with adding employee');
      });
    }
    const products = [
        {
          id: "qwertyuiop",
          name: 'Product 1',
          unitPrice: 10,
          unitsInStock: 10,
        },
        {
          id: "asdfghjkl",
          name: 'Product 2',
          unitPrice: 20,
          unitsInStock: 20,
        },
        {
          id: "zxcvbnm",
          name: 'Product 3',
          unitPrice: 30,
          unitsInStock: 30,
        }
      ];
  return (
    <Tabs defaultActiveKey="add" className="mb-3">
        <Tab eventKey="add" title="Add New">
            <AddNewInventory />
        </Tab>
        <Tab eventKey="list" title="Inventory">
            <InventoryList />
        </Tab>
        <Tab eventKey="POS" title="POS" >
            <POSEngine/>
        </Tab>
        <Tab eventKey="supplier" title="Supplier" >
            <SupplierForm
                onSubmit={onSubmitSupplier}
            />
        </Tab>
        <Tab eventKey="customer" title="Customer" >
            <CustomerForm
                onSubmit={onSubmitCustomer}
            />
        </Tab>
        <Tab eventKey="town" title="Town" >
            <TownForm
                onSubmit={onSubmitTown}
            />
        </Tab>
        <Tab eventKey="area" title="Area" >
            <AreaForm
                onSubmit={onSubmitArea}
            />
        </Tab>
        <Tab eventKey="salesRoute" title="Sales Route" >
            <SalesRouteForm
                onSubmit={onSubmitSalesRoute}
            />
        </Tab>
        <Tab eventKey="category" title="Categories" >
            <CategoryForm
                onSubmit={onSubmitCategory}
            />
        </Tab>
        <Tab eventKey="employee" title="Employee" >
            <EmployeeForm
                onSubmit={onSubmitEmployee}
            />
        </Tab>
    </Tabs>
  )
}

export default Inventory;