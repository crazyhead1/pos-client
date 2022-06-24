import React from 'react'
import toast from 'react-hot-toast';
import { addOneArea } from '../../../parser/area';
import ButtonComponent from '../../common/components/button-component'
import AreaForm from './area-form';
import AreaList from './area-list';

const Area = () => {
  const [showAreaList, setShowAreaList] = React.useState(true);
  const handleAddNewClick = () => {
    setShowAreaList(!showAreaList);
  }

  const onSubmitArea = (values,{resetForm})=>{
    addOneArea(values).then(res => {
        toast.success(`${values.name} added successfully`);
        resetForm();
        setShowAreaList(!showAreaList);
      }).catch(err => {
        toast.error(err.message || 'Something went wrong with adding Area');
      });
  }
  return (
    <div>
      <ButtonComponent
        onClick={handleAddNewClick}
      >
        {showAreaList ?<p>Add New</p>:<p>Back</p>}
      </ButtonComponent>
      {showAreaList ? <AreaList />: <AreaForm onSubmit={onSubmitArea}/>}
    </div>
  )
}

export default Area