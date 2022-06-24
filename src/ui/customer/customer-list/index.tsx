import React from 'react'
import EditIcon from '../../../assets/component/EditIcon';
import RemoveIcon from '../../../assets/component/RemoveIcon';
import { Colors } from '../../common/colors';
import Table from '../../common/components/table'
import { useStylesFromThemeFunction } from './CustomerList';
import toast from 'react-hot-toast';
import { Modal } from 'react-bootstrap';
import {getAllCustomers, editCustomer } from '../../../parser/customer';
import CustomerForm from '../customer-form';
import ButtonComponent from '../../common/components/button-component';

interface ComponentProps {
  customers?: any[];
}

const CustomerList: React.FC<ComponentProps> = (props) => {
  const classes = useStylesFromThemeFunction();
  const [tableHeadings, setTableHeadings] = React.useState(['id','Name', 'Email', 'Phone Number', 'Address','Actions'] as string[]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [selectedCustomer, setSelectedCustomer] = React.useState({} as any);
  const [customers, setCustomers] = React.useState(props?.customers as any[] | [] as any[]);
  const [showCustomerUpdateModal, setShowCustomerUpdateModal] = React.useState(false);

  // const handleCloseEditModal = () => setShowEditModal(false);
  // const handleShowEditModal = (Customer: any) => {
  //   setSelectedCustomer(Customer);
  //   setShowEditModal(true);
  // }
  React.useEffect(() => {
    getAllCustomers().then(res => {
      console.log(res);
      setCustomers(res);
      renderTableData();
    })
  }, []);

  const handleRemoveCustomer = (Customer: any) => {
    try{
      if(window.confirm('Are you sure you want to remove this Customer?')){
        // call delete Customer api here

        console.log(Customer);
        toast.success(`${Customer.name} removed successfully`);
      } else {
        throw new Error("Customer not removed");
        
      }
    }catch(e){
      toast.error(e.message || 'Error while removing Customer');
      console.log(e.message);
    }
    
  }
  const handleEditCustomer = (customer: any) => {
    setSelectedCustomer(customer);
    setShowCustomerUpdateModal(true);
  }
  const handleUpdate = (updatedCustomer: any) => {
    // call edit Customer api here
    editCustomer(updatedCustomer.id, updatedCustomer).then(res => {
      toast.success(`${updatedCustomer.name} updated successfully`);
      setShowCustomerUpdateModal(false);
      setSelectedCustomer({} as any);
    }).catch(e => {
      toast.error(e.message || 'Error while updating Customer');
    });
  }
  const renderTableData = () => {
    return customers?.map(customer => {
      return (
        <tr key={customer.id} onDoubleClick={()=>handleEditCustomer(customer)}>
          <td>{customer.id}</td>
          <td>{customer.name}</td>
          <td>{customer.email}</td>
          <td>{customer.phoneNumber}</td>
          <td>{customer.address}</td>
          <td>
            <div className={classes.equallyDistantRow}>
              <div className={classes.iconWrapper} onClick={()=>handleEditCustomer(customer)}><EditIcon fill={Colors.gray} /></div>
              <div className={classes.iconWrapper} onClick={()=>handleRemoveCustomer(customer)}><RemoveIcon fill={Colors.red} /></div>
            </div>
          </td>
        </tr>
      );
    });
  }

  if(customers?.length !== 0){
    renderTableData();
  }

  return (
    <>
      <Table
        tableHeadings={tableHeadings}
        renderBody={renderTableData}
        loading={isLoading}
      />
      <Modal className={classes.modalWrapper} show={showCustomerUpdateModal} onHide={()=>setShowCustomerUpdateModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Update <b>{selectedCustomer.name}</b></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className={classes.modalBodyWrapper}>
            <CustomerForm customer={selectedCustomer} onSubmit={handleUpdate}/>
          </div>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default CustomerList