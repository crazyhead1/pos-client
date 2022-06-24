import { useFormik } from 'formik'
import { values } from 'lodash';
import React from 'react'
import { Collapse } from 'react-bootstrap';
import toast from 'react-hot-toast';
import { addtown } from '../../../../parser/town';
import { Colors } from '../../../common/colors';
import ButtonComponent from '../../../common/components/button-component';
import { ComponentProps, useStylesFromThemeFunction } from './TownForm'

const TownForm: React.FC<ComponentProps> = ({
  onSubmit,
  onChange,
  town,
  options,
  onImageChange,
}) => {
  const classes = useStylesFromThemeFunction();
  
  const initialValues = {
    id: town?.id || '',
    name: town?.name || '',
    country: town?.country || '',
    state: town?.state || '',
    address: town?.address || '',
    city: town?.city || '',
  }
  const validate = (values) => {

  }

  const formik = useFormik({
    initialValues,
    validate,
    onSubmit:(values,{ resetForm })=>{
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
                <label htmlFor="country">Country</label>
                <input type="text" className="form-control" id="country" name="country" value={formik.values.country} onChange={formik.handleChange} />
              </div>
              <div className={classes.column}>
                <label htmlFor="state">State</label>
                <input type="text" className="form-control" id="state" name="state" value={formik.values.state} onChange={formik.handleChange} />
              </div>
              <div className={classes.column}>
                <label htmlFor="city">City</label>
                <input type="text" className="form-control" id="city" name="city" value={formik.values.city} onChange={formik.handleChange} />
              </div>
            </div>
            <div className={classes.row}>
              <div className={classes.column}>
                <label htmlFor="address">Address</label>
                <input type="text" className="form-control" id="address" name="address" value={formik.values.address} onChange={formik.handleChange} />
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

export default TownForm;