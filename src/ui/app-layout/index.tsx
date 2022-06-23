import React, { useState, useSyncExternalStore } from 'react';
import { Col, Collapse, Nav, Row, Tab, Tabs } from 'react-bootstrap';
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
import SalesRouteForm from '../sales-route/sales-route-form';
import AreaForm from '../sales-route/area';
import TownForm from '../sales-route/town';
import SupplierForm from '../supplier/supplier-form';
import {useStylesFromThemeFunction,ComponentProps} from './AppLayout'
import 'boxicons';
import { Colors } from '../common/colors';
import Inventory from '../inventory';
import Users from '../users';
import Category from '../category';
import SalesRoute from '../sales-route';
import Order from '../order';
import Sales from '../sales';
import Setting from '../setting';

const AppLayout: React.FC<ComponentProps> = ({

}) => {
  const classes = useStylesFromThemeFunction();
  // const [activeTab,setActiveTab] = useState('pos');
  const [showSidebar,setShowSidebar] = useState(true);
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
    <div>
      <Tab.Container defaultActiveKey="pos">
        <Row>
          <Col sm={3}>
            <div className={`${showSidebar ? classes.tabsWithSidebar : classes.tabs}`}>
              <div className={classes.tabsStyle}>
                <Collapse in={showSidebar}>
                  <Nav variant='pills' className="flex-column">
                    <Nav.Item>
                      <Nav.Link eventKey="pos"><div className={classes.link}><i className='bx bx-desktop'></i> POS</div></Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="inventory"><div className={classes.link}><i className='bx bxs-package'></i> Inventory</div></Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="sales"><div className={classes.link}><i className='bx bxs-pie-chart-alt-2'></i> Sales</div></Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="orders"><div className={classes.link}><i className='bx bxs-cart'></i> Orders</div></Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="sales-route"><div className={classes.link}><i className='bx bxs-map'></i> Sales Route</div></Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="categories"><div className={classes.link}><i className='bx bxs-category'></i> Categories</div></Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="users"><div className={classes.link}><i className='bx bxs-group'></i> Users</div></Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="settings"><div className={classes.link}><i className='bx bxs-brightness'></i> Settings</div></Nav.Link>
                    </Nav.Item>
                  </Nav>
                </Collapse>
              </div>
              <h2 onClick={()=>setShowSidebar(!showSidebar)} className={classes.SidebarArrow}>
                <i className={`${showSidebar ? 'bx bx-chevron-left': 'bx bx-chevron-right'}`}></i>
              </h2>
            </div>
          </Col>
          <Col sm={12}>
            <div className={`${showSidebar ? classes.contentPanWithSidebar : classes.contentPan}`}>
              <Tab.Content>
                <Tab.Pane eventKey="pos">
                  <POSEngine />
                </Tab.Pane>
                <Tab.Pane eventKey="inventory">
                  <Inventory/>
                </Tab.Pane>
                <Tab.Pane eventKey="sales">
                  <Sales/>
                </Tab.Pane>
                <Tab.Pane eventKey="orders">
                  <Order/>
                </Tab.Pane>
                <Tab.Pane eventKey="sales-route">
                  <SalesRoute/>
                </Tab.Pane>
                <Tab.Pane eventKey="categories">
                  <Category/>
                </Tab.Pane>
                <Tab.Pane eventKey="users">
                  <Users/>
                </Tab.Pane>
                <Tab.Pane eventKey="settings">
                  <Setting/>
                </Tab.Pane>
              </Tab.Content>
            </div>
          </Col>
          
        </Row>
      </Tab.Container>
    </div>
  )
}

export default AppLayout;