import React from 'react'
import EditIcon from '../../../assets/component/EditIcon';
import RemoveIcon from '../../../assets/component/RemoveIcon';
import { Colors } from '../../common/colors';
import Table from '../../common/components/table'
import { useStylesFromThemeFunction } from './EmployeeList';
import toast from 'react-hot-toast';
import { Modal } from 'react-bootstrap';
import {getAllEmployees, editEmployee } from '../../../parser/employee';
import EmployeeForm from '../employee-form';
import ButtonComponent from '../../common/components/button-component';

interface ComponentProps {
  employees?: any[];
}

const EmployeeList: React.FC<ComponentProps> = (props) => {
  const classes = useStylesFromThemeFunction();
  const [tableHeadings, setTableHeadings] = React.useState(['id','Name', 'Designation', 'Department', 'Phone Number', 'Address','Actions'] as string[]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [selectedEmployee, setSelectedEmployee] = React.useState({} as any);
  const [employees, setEmployees] = React.useState(props?.employees as any[] | [] as any[]);
  const [showEmployeeUpdateModal, setShowEmployeeUpdateModal] = React.useState(false);

  // const handleCloseEditModal = () => setShowEditModal(false);
  // const handleShowEditModal = (Employee: any) => {
  //   setSelectedEmployee(Employee);
  //   setShowEditModal(true);
  // }
  React.useEffect(() => {
    getAllEmployees().then(res => {
      console.log(res);
      setEmployees(res);
      renderTableData();
    })
  }, []);

  const handleRemoveEmployee = (Employee: any) => {
    try{
      if(window.confirm('Are you sure you want to remove this Employee?')){
        // call delete Employee api here

        console.log(Employee);
        toast.success(`${Employee.name} removed successfully`);
      } else {
        throw new Error("Employee not removed");
        
      }
    }catch(e){
      toast.error(e.message || 'Error while removing Employee');
      console.log(e.message);
    }
    
  }
  const handleEditEmployee = (Employee: any) => {
    setSelectedEmployee(Employee);
    setShowEmployeeUpdateModal(true);
  }
  const handleUpdate = (updatedEmployee: any) => {
    // call edit Employee api here
    editEmployee(updatedEmployee.id, updatedEmployee).then(res => {
      toast.success(`${updatedEmployee.name} updated successfully`);
      setShowEmployeeUpdateModal(false);
      setSelectedEmployee({} as any);
    }).catch(e => {
      toast.error(e.message || 'Error while updating Employee');
    });
  }
  const renderTableData = () => {
    return employees?.map(Employee => {
      return (
        <tr key={Employee.id} onDoubleClick={()=>handleEditEmployee(Employee)}>
          <td>{Employee.id}</td>
          <td>{Employee.name}</td>
          <td>{Employee.designation}</td>
          <td>{Employee.department}</td>
          <td>{Employee.phoneNumber}</td>
          <td>{Employee.address}</td>
          <td>
            <div className={classes.equallyDistantRow}>
              <div className={classes.iconWrapper} onClick={()=>handleEditEmployee(Employee)}><EditIcon fill={Colors.gray} /></div>
              <div className={classes.iconWrapper} onClick={()=>handleRemoveEmployee(Employee)}><RemoveIcon fill={Colors.red} /></div>
            </div>
          </td>
        </tr>
      );
    });
  }

  if(employees?.length !== 0){
    renderTableData();
  }

  return (
    <>
      <Table
        tableHeadings={tableHeadings}
        renderBody={renderTableData}
        loading={isLoading}
      />
      <Modal className={classes.modalWrapper} show={showEmployeeUpdateModal} onHide={()=>setShowEmployeeUpdateModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Update <b>{selectedEmployee.name}</b></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className={classes.modalBodyWrapper}>
            <EmployeeForm employee={selectedEmployee} onSubmit={handleUpdate}/>
          </div>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default EmployeeList