import React from 'react'
import EditIcon from '../../../assets/component/EditIcon';
import RemoveIcon from '../../../assets/component/RemoveIcon';
import { Colors } from '../../common/colors';
import Table from '../../common/components/table'
import { useStylesFromThemeFunction } from './SalesRoutrList';
import toast from 'react-hot-toast';
import { Modal } from 'react-bootstrap';
import {getAllSalesRoutes, editSalesRoute } from '../../../parser/sales-route';
import SalesRouteForm from '../sales-route-form';
import ButtonComponent from '../../common/components/button-component';

interface ComponentProps {
    salesRoutes?: any[];
}

const SalesRouteList: React.FC<ComponentProps> = (props) => {
  const classes = useStylesFromThemeFunction();
  const [tableHeadings, setTableHeadings] = React.useState(['id','Name', 'Actions'] as string[]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [selectedSalesRoute, setSelectedSalesRoute] = React.useState({} as any);
  const [salesRoutes, setSalesRoutes] = React.useState(props?.salesRoutes as any[] | [] as any[]);
  const [showSalesRouteUpdateModal, setShowSalesRouteUpdateModal] = React.useState(false);

  // const handleCloseEditModal = () => setShowEditModal(false);
  // const handleShowEditModal = (SalesRoute: any) => {
  //   setSelectedSalesRoute(SalesRoute);
  //   setShowEditModal(true);
  // }
  React.useEffect(() => {
    getAllSalesRoutes().then(res => {
      console.log(res);
      setSalesRoutes(res);
      renderTableData();
    })
  }, []);

  const handleRemoveSalesRoute = (SalesRoute: any) => {
    try{
      if(window.confirm('Are you sure you want to remove this SalesRoute?')){
        // call delete SalesRoute api here

        console.log(SalesRoute);
        toast.success(`${SalesRoute.name} removed successfully`);
      } else {
        throw new Error("SalesRoute not removed");
        
      }
    }catch(e){
      toast.error(e.message || 'Error while removing SalesRoute');
      console.log(e.message);
    }
    
  }
  const handleEditSalesRoute = (SalesRoute: any) => {
    setSelectedSalesRoute(SalesRoute);
    setShowSalesRouteUpdateModal(true);
  }
  const handleUpdate = (updatedSalesRoute: any) => {
    // call edit SalesRoute api here
    editSalesRoute(updatedSalesRoute.id, updatedSalesRoute).then(res => {
      toast.success(`${updatedSalesRoute.name} updated successfully`);
      setShowSalesRouteUpdateModal(false);
      setSelectedSalesRoute({} as any);
    }).catch(e => {
      toast.error(e.message || 'Error while updating SalesRoute');
    });
  }
  const renderTableData = () => {
    return salesRoutes?.map(SalesRoute => {
      return (
        <tr key={SalesRoute.id} onDoubleClick={()=>handleEditSalesRoute(SalesRoute)}>
          <td>{SalesRoute.id}</td>
          <td>{SalesRoute.name}</td>
          <td>
            <div className={classes.equallyDistantRow}>
              <div className={classes.iconWrapper} onClick={()=>handleEditSalesRoute(SalesRoute)}><EditIcon fill={Colors.gray} /></div>
              <div className={classes.iconWrapper} onClick={()=>handleRemoveSalesRoute(SalesRoute)}><RemoveIcon fill={Colors.red} /></div>
            </div>
          </td>
        </tr>
      );
    });
  }

  if(salesRoutes?.length !== 0){
    renderTableData();
  }

  return (
    <>
      <Table
        tableHeadings={tableHeadings}
        renderBody={renderTableData}
        loading={isLoading}
      />
      <Modal className={classes.modalWrapper} show={showSalesRouteUpdateModal} onHide={()=>setShowSalesRouteUpdateModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Update <b>{selectedSalesRoute.name}</b></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className={classes.modalBodyWrapper}>
            <SalesRouteForm salesRoute={selectedSalesRoute} onSubmit={handleUpdate}/>
          </div>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default SalesRouteList