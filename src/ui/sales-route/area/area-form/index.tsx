import { useFormik } from 'formik'
import { values } from 'lodash';
import React from 'react'
import { Collapse } from 'react-bootstrap';
import toast from 'react-hot-toast';
import { addOneArea } from '../../../../parser/area';
import { gettowns } from '../../../../parser/town';
import { addLog } from '../../../../services/cloud/firebase/logging';
import { Colors } from '../../../common/colors';
import ButtonComponent from '../../../common/components/button-component';
import { ComponentProps, useStylesFromThemeFunction } from './AreaForm'

const AreaForm: React.FC<ComponentProps> = ({
  onSubmit,
  onChange,
  area,
  options,
  onImageChange,
}) => {
  const classes = useStylesFromThemeFunction();
  const [showShippingFfield, setShowShippingField] = React.useState(false);
  const [towns, setTowns] = React.useState([]);

  const getTowns = async () => {
    //call get product categories api here
    const res = await gettowns().then(res => {
      setTowns(res?.map(town => <option key={town.id} value={town.id}>{town.name}</option>))
    }).catch(err => {
      toast.error(err.message || 'Something went wrong while getting towns');
      addLog({message:err.message || 'Something went wrong while getting towns', path:'/area/index.tsx/getTowns'});
    });
  }
  
  React.useEffect(() => {
    getTowns();
  }, []);
  const initialValues = {
    id: area?.id || '',
    name: area?.name || '',
    towns: area?.towns || [],
  }
  const validate = (values) => {

  }

  const formik = useFormik({
    initialValues,
    validate,
    onSubmit:(values,{resetForm})=>{
      onSubmit(values,{resetForm});
    }
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div className={classes.container}>
          <div className="form-group">
            <div className={classes.row}>
              <div className={classes.column}>
                <label htmlFor="id">Id<span className={classes.colorRed}>*</span> <span className={classes.labelHintWrapper}>Enter CNIC</span></label>
                <input type="text" className="form-control" id="id" name="id" required value={formik.values.id} onChange={formik.handleChange} />
              </div>
              <div className={classes.column}>
                <label htmlFor="name">Name<span className={classes.colorRed}>*</span></label>
                <input type="text" className="form-control" id="name" name="name" required value={formik.values.name} onChange={formik.handleChange} />
              </div>
            </div>
            <div className={classes.row}>
              <div className={classes.column}>
                <label htmlFor="towns">Towns</label>
                <select className="form-control" id="towns" name="towns" multiple value={formik.values.towns} onChange={formik.handleChange}>
                    {towns}
                </select>
              </div>
            </div>
          </div>
          <hr/>
        </div>
        <div className={classes.centeredRow}>
          <ButtonComponent type="submit" disabled={formik.isSubmitting} style={{width:'100%', height:'50px'}}><h4><b>Submit</b></h4></ButtonComponent>
        </div>
      </form>
    </div>
  )
}

export default AreaForm;