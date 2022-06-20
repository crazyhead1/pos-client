import React from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import CustomerForm from '../customer/customer-form';
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
            <POSEngine products={products} />
        </Tab>
        <Tab eventKey="supplier" title="Supplier" >
            <SupplierForm
                onSubmit={() => {}}
            />
        </Tab>
        <Tab eventKey="customer" title="Customer" >
            <CustomerForm
                onSubmit={() => {}}
            />
        </Tab>
        <Tab eventKey="town" title="Town" >
            <TownForm
                onSubmit={() => {}}
            />
        </Tab>
        <Tab eventKey="area" title="Area" >
            <AreaForm
                onSubmit={() => {}}
            />
        </Tab>
        <Tab eventKey="salesRoute" title="Sales Route" >
            <SalesRouteForm
                onSubmit={() => {}}
            />
        </Tab>
    </Tabs>
  )
}

export default Inventory;