import { useFormik } from 'formik'
import React from 'react'
import { Collapse } from 'react-bootstrap';
import { Colors } from '../../common/colors';
import ButtonComponent from '../../common/components/button-component';
import { ComponentProps, useStylesFromThemeFunction } from './TownForm'

const TownForm: React.FC<ComponentProps> = ({
  onSubmit,
  onChange,
  product,
  options,
  onImageChange,
}) => {
  const classes = useStylesFromThemeFunction();
  
  // const getProductCategories = () => {

  //   //call get product categories api here

  //   return [
  //     {
  //       id: "qwertyuiop",
  //       name: 'Category 1',
  //     },
  //     {
  //       id: "asdfghjkl",
  //       name: 'Category 2',
  //     },
  //     {
  //       id: "zxcvbnm",
  //       name: 'Category 3',
  //     }
  //   ]
  // }
  // const getSuppliers = () => {
      
  //     //call get suppliers api here
  //     return [
  //       {
  //         id: "qwertyuiop",
  //         name: 'Supplier 1',
  //       },
  //       {
  //         id: "asdfghjkl",
  //         name: 'Supplier 2',
  //       },
  //       {
  //         id: "zxcvbnm",
  //         name: 'Supplier 3',
  //       }
  //     ]
  // }
  
  // const renderSuppliers = () => {
  //   return getSuppliers().map(supplier => <option key={supplier.id} value={supplier.id}>{supplier.name}</option>)
  // }
  // const rendeProductCategories = () => {
  //   return getProductCategories()
  //   .map(category => <option key={category.id} value={category.id}>{category.name}</option>)
  // }
  const initialValues = {
    id:'',
    name: '',
    email: '',
    country: '',
    state: '',
    address: '',
    city: '',
  }
  const validate = (values) => {

  }
  // const onSubmit = (values) => {

  // }

  const formik = useFormik({
    initialValues,
    validate,
    onSubmit
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
          <ButtonComponent type="submit" style={{width:'100%', height:'50px'}}><h4><b>Submit</b></h4></ButtonComponent>
        </div>
      </form>
    </div>
  )
}

export default TownForm;