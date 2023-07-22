import React, { useState } from 'react';
import {  Tab, Tabs } from 'react-bootstrap';
import toast from 'react-hot-toast';
import { addOneArea } from '../../parser/area';
import { addOneCategory } from '../../parser/categories';
import { addOneCustomer } from '../../parser/customer';
import { addOneEmployee } from '../../parser/employee';
import { addOneSalesRoute } from '../../parser/sales-route';
import { addOneSupplier } from '../../parser/supplier';
import { addtown } from '../../parser/town';
import AddNewOrder from './add-new-order';
import OrderList from './order-list';
import {useStylesFromThemeFunction,ComponentProps} from './Order'
import 'boxicons';


const Order = () => {
  return (
    <Tabs defaultActiveKey="add" className="mb-3">
        <Tab eventKey="list" title="Order">
            <OrderList />
        </Tab>
        <Tab eventKey="add" title="Add Order">
            <AddNewOrder />
        </Tab>
    </Tabs>
  )
}

export default Order