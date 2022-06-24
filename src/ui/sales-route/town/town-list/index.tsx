import React from 'react'
import EditIcon from '../../../../assets/component/EditIcon';
import RemoveIcon from '../../../../assets/component/RemoveIcon';
import { Colors } from '../../../common/colors';
import Table from '../../../common/components/table'
import { useStylesFromThemeFunction } from './TownList';
import toast from 'react-hot-toast';
import { Modal } from 'react-bootstrap';
import {gettowns, edittown } from '../../../../parser/town';
import TownForm from '../town-form';
import ButtonComponent from '../../../common/components/button-component';

interface ComponentProps {
    towns?: any[];
}

const TownList: React.FC<ComponentProps> = (props) => {
  const classes = useStylesFromThemeFunction();
  const [tableHeadings, setTableHeadings] = React.useState(['id','Name','Actions'] as string[]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [selectedTown, setSelectedTown] = React.useState({} as any);
  const [towns, setTowns] = React.useState(props?.towns as any[] | [] as any[]);
  const [showTownUpdateModal, setShowTownUpdateModal] = React.useState(false);

  // const handleCloseEditModal = () => setShowEditModal(false);
  // const handleShowEditModal = (Town: any) => {
  //   setSelectedTown(Town);
  //   setShowEditModal(true);
  // }
  React.useEffect(() => {
    gettowns().then(res => {
      console.log(res);
      setTowns(res);
      renderTableData();
    })
  }, []);

  const handleRemoveTown = (Town: any) => {
    try{
      if(window.confirm('Are you sure you want to remove this Town?')){
        // call delete Town api here

        console.log(Town);
        toast.success(`${Town.name} removed successfully`);
      } else {
        throw new Error("Town not removed");
        
      }
    }catch(e){
      toast.error(e.message || 'Error while removing Town');
      console.log(e.message);
    }
    
  }
  const handleEditTown = (Town: any) => {
    setSelectedTown(Town);
    setShowTownUpdateModal(true);
  }
  const handleUpdate = (updatedTown: any) => {
    // call edit Town api here
    edittown(updatedTown.id, updatedTown).then(res => {
      toast.success(`${updatedTown.name} updated successfully`);
      setShowTownUpdateModal(false);
      setSelectedTown({} as any);
    }).catch(e => {
      toast.error(e.message || 'Error while updating Town');
    });
  }
  const renderTableData = () => {
    return towns?.map(Town => {
      return (
        <tr key={Town.id} onDoubleClick={()=>handleEditTown(Town)}>
          <td>{Town.id}</td>
          <td>{Town.name}</td>
          <td>
            <div className={classes.equallyDistantRow}>
              <div className={classes.iconWrapper} onClick={()=>handleEditTown(Town)}><EditIcon fill={Colors.gray} /></div>
              <div className={classes.iconWrapper} onClick={()=>handleRemoveTown(Town)}><RemoveIcon fill={Colors.red} /></div>
            </div>
          </td>
        </tr>
      );
    });
  }

  if(towns?.length !== 0){
    renderTableData();
  }

  return (
    <>
      <Table
        tableHeadings={tableHeadings}
        renderBody={renderTableData}
        loading={isLoading}
      />
      <Modal className={classes.modalWrapper} show={showTownUpdateModal} onHide={()=>setShowTownUpdateModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Update <b>{selectedTown.name}</b></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className={classes.modalBodyWrapper}>
            <TownForm town={selectedTown} onSubmit={handleUpdate}/>
          </div>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default TownList