import React from 'react'
import toast from 'react-hot-toast';
import { addtown } from '../../../parser/town';
import ButtonComponent from '../../common/components/button-component'
import TownForm from './town-form';
import TownList from './town-list';

const Town = () => {
  const [showTownList, setShowTownList] = React.useState(true);
  const handleAddNewClick = () => {
    setShowTownList(!showTownList);
  }

  const onSubmitTown = (values,{resetForm})=>{
    addtown(values).then(res => {
        toast.success(`${values.name} added successfully`);
        resetForm();
        setShowTownList(!showTownList);
      }).catch(err => {
        toast.error(err.message || 'Something went wrong with adding Town');
      });
  }
  return (
    <div>
      <ButtonComponent
        onClick={handleAddNewClick}
      >
        {showTownList ?<p>Add New</p>:<p>Back</p>}
      </ButtonComponent>
      {showTownList ? <TownList />: <TownForm onSubmit={onSubmitTown}/>}
    </div>
  )
}

export default Town