import React from 'react'
import EditIcon from '../../../assets/component/EditIcon';
import RemoveIcon from '../../../assets/component/RemoveIcon';
import { Colors } from '../../common/colors';
import Table from '../../common/components/table'
import { useStylesFromThemeFunction } from './SupplierList';
import toast from 'react-hot-toast';
import { Modal } from 'react-bootstrap';
import {getAllSuppliers, editSupplier } from '../../../parser/supplier';
import SupplierForm from '../supplier-form';
import ButtonComponent from '../../common/components/button-component';

interface ComponentProps {
    suppliers?: any[];
}

const SupplierList: React.FC<ComponentProps> = (props) => {
  const classes = useStylesFromThemeFunction();
  const [tableHeadings, setTableHeadings] = React.useState(['id','Name', 'State', 'Country', 'Phone Number', 'Address','Actions'] as string[]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [selectedSupplier, setSelectedSupplier] = React.useState({} as any);
  const [suppliers, setSuppliers] = React.useState(props?.suppliers as any[] | [] as any[]);
  const [showSupplierUpdateModal, setShowSupplierUpdateModal] = React.useState(false);

  // const handleCloseEditModal = () => setShowEditModal(false);
  // const handleShowEditModal = (Supplier: any) => {
  //   setSelectedSupplier(Supplier);
  //   setShowEditModal(true);
  // }
  React.useEffect(() => {
    getAllSuppliers().then(res => {
      console.log(res);
      setSuppliers(res);
      renderTableData();
    })
  }, []);

  const handleRemoveSupplier = (Supplier: any) => {
    try{
      if(window.confirm('Are you sure you want to remove this Supplier?')){
        // call delete Supplier api here

        console.log(Supplier);
        toast.success(`${Supplier.name} removed successfully`);
      } else {
        throw new Error("Supplier not removed");
        
      }
    }catch(e){
      toast.error(e.message || 'Error while removing Supplier');
      console.log(e.message);
    }
    
  }
  const handleEditSupplier = (Supplier: any) => {
    setSelectedSupplier(Supplier);
    setShowSupplierUpdateModal(true);
  }
  const handleUpdate = (updatedSupplier: any) => {
    // call edit Supplier api here
    editSupplier(updatedSupplier.id, updatedSupplier).then(res => {
      toast.success(`${updatedSupplier.name} updated successfully`);
      setShowSupplierUpdateModal(false);
      setSelectedSupplier({} as any);
    }).catch(e => {
      toast.error(e.message || 'Error while updating Supplier');
    });
  }
  const renderTableData = () => {
    return suppliers?.map(Supplier => {
      return (
        <tr key={Supplier.id} onDoubleClick={()=>handleEditSupplier(Supplier)}>
          <td>{Supplier.id}</td>
          <td>{Supplier.name}</td>
          <td>{Supplier.state}</td>
          <td>{Supplier.country}</td>
          <td>{Supplier.phoneNumber}</td>
          <td>{Supplier.address}</td>
          <td>
            <div className={classes.equallyDistantRow}>
              <div className={classes.iconWrapper} onClick={()=>handleEditSupplier(Supplier)}><EditIcon fill={Colors.gray} /></div>
              <div className={classes.iconWrapper} onClick={()=>handleRemoveSupplier(Supplier)}><RemoveIcon fill={Colors.red} /></div>
            </div>
          </td>
        </tr>
      );
    });
  }

  if(suppliers?.length !== 0){
    renderTableData();
  }

  return (
    <>
      <Table
        tableHeadings={tableHeadings}
        renderBody={renderTableData}
        loading={isLoading}
      />
      <Modal className={classes.modalWrapper} show={showSupplierUpdateModal} onHide={()=>setShowSupplierUpdateModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Update <b>{selectedSupplier.name}</b></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className={classes.modalBodyWrapper}>
            <SupplierForm supplier={selectedSupplier} onSubmit={handleUpdate}/>
          </div>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default SupplierList