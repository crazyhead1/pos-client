import React from 'react'
import EditIcon from '../../../../assets/component/EditIcon';
import RemoveIcon from '../../../../assets/component/RemoveIcon';
import { Colors } from '../../../common/colors';
import Table from '../../../common/components/table'
import { useStylesFromThemeFunction } from './AreaList';
import toast from 'react-hot-toast';
import { Modal } from 'react-bootstrap';
import {getAllAreas, editArea } from '../../../../parser/area';
import AreaForm from '../area-form';
import ButtonComponent from '../../../common/components/button-component';

interface ComponentProps {
    areas?: any[];
}

const AreaList: React.FC<ComponentProps> = (props) => {
  const classes = useStylesFromThemeFunction();
  const [tableHeadings, setTableHeadings] = React.useState(['id','Name','Actions'] as string[]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [selectedArea, setSelectedArea] = React.useState({} as any);
  const [areas, setAreas] = React.useState(props?.areas as any[] | [] as any[]);
  const [showAreaUpdateModal, setShowAreaUpdateModal] = React.useState(false);

  // const handleCloseEditModal = () => setShowEditModal(false);
  // const handleShowEditModal = (Area: any) => {
  //   setSelectedArea(Area);
  //   setShowEditModal(true);
  // }
  React.useEffect(() => {
    getAllAreas().then(res => {
      console.log(res);
      setAreas(res);
      renderTableData();
    })
  }, []);

  const handleRemoveArea = (Area: any) => {
    try{
      if(window.confirm('Are you sure you want to remove this Area?')){
        // call delete Area api here

        console.log(Area);
        toast.success(`${Area.name} removed successfully`);
      } else {
        throw new Error("Area not removed");
        
      }
    }catch(e){
      toast.error(e.message || 'Error while removing Area');
      console.log(e.message);
    }
    
  }
  const handleEditArea = (Area: any) => {
    setSelectedArea(Area);
    setShowAreaUpdateModal(true);
  }
  const handleUpdate = (updatedArea: any) => {
    // call edit Area api here
    editArea(updatedArea.id, updatedArea).then(res => {
      toast.success(`${updatedArea.name} updated successfully`);
      setShowAreaUpdateModal(false);
      setSelectedArea({} as any);
    }).catch(e => {
      toast.error(e.message || 'Error while updating Area');
    });
  }
  const renderTableData = () => {
    return areas?.map(Area => {
      return (
        <tr key={Area.id} onDoubleClick={()=>handleEditArea(Area)}>
          <td>{Area.id}</td>
          <td>{Area.name}</td>
          <td>
            <div className={classes.equallyDistantRow}>
              <div className={classes.iconWrapper} onClick={()=>handleEditArea(Area)}><EditIcon fill={Colors.gray} /></div>
              <div className={classes.iconWrapper} onClick={()=>handleRemoveArea(Area)}><RemoveIcon fill={Colors.red} /></div>
            </div>
          </td>
        </tr>
      );
    });
  }

  if(areas?.length !== 0){
    renderTableData();
  }

  return (
    <>
      <Table
        tableHeadings={tableHeadings}
        renderBody={renderTableData}
        loading={isLoading}
      />
      <Modal className={classes.modalWrapper} show={showAreaUpdateModal} onHide={()=>setShowAreaUpdateModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Update <b>{selectedArea.name}</b></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className={classes.modalBodyWrapper}>
            <AreaForm area={selectedArea} onSubmit={handleUpdate}/>
          </div>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default AreaList