import { useFormik } from 'formik'
import React from 'react'
import { Collapse } from 'react-bootstrap';
import { Colors } from '../../common/colors';
import ButtonComponent from '../../common/components/button-component';
import { ComponentProps, useStylesFromThemeFunction } from './CustomerForm'

const CustomerForm: React.FC<ComponentProps> = ({
  onSubmit,
  onChange,
  customer,
  options,
  onImageChange,
}) => {
  const classes = useStylesFromThemeFunction();
  const [showShippingFfield, setShowShippingField] = React.useState(false);
  
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
    id: customer?.id || '',
    name: customer?.name || '',
    email: customer?.email || '',
    country: customer?.country || '',
    state: customer?.state || '',
    address: customer?.address || '',
    phoneNumber: customer?.phoneNumber || '',
    zipCode: customer?.zipCode || '',
    //Shipping Information
    shippingCountry: customer?.shippingCountry || '',
    shippingState: customer?.shippingState || '',
    shippingAddress: customer?.shippingAddress || '',
    shippingAddressLandmark: customer?.shippingAddressLandmark || '',
    shippingZipCode: customer?.shippingZipCode || '',
  }
  const validate = (values) => {

  }
  // const onSubmit = (values) => {

  // }

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
              <div className={classes.column}>
                <label htmlFor="email">Email</label>
                <input type="text" className="form-control" id="email" name="email" value={formik.values.email} onChange={formik.handleChange} />
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
                <label htmlFor="address">Address</label>
                <input type="text" className="form-control" id="address" name="address" value={formik.values.address} onChange={formik.handleChange} />
              </div>
            </div>
            <div className={classes.row}>
              <div className={classes.column}>
                <label htmlFor="phoneNumber">Phone Number</label>
                <input type="text" className="form-control" id="phoneNumber" name="phoneNumber" value={formik.values.phoneNumber} onChange={formik.handleChange} />
              </div>
              <div className={classes.column}>
                <label htmlFor="zipCode">Zip Code</label>
                <input type="text" className="form-control" id="zipCode" name="zipCode" value={formik.values.zipCode} onChange={formik.handleChange} />
              </div>
            </div>
          </div>
          <hr/>
          <div className="form-group">
            <h4>Shipping Information</h4>
            <input type="checkbox" id="showShippingField" name="showShippingField" onChange={() => setShowShippingField(!showShippingFfield)} /> Same as above
            <Collapse in={!showShippingFfield}>
                <div>
                    <div className={classes.row}>
                        <div className={classes.column}>
                            <label htmlFor="shippingCountry">Country</label>
                            <input type="text" className="form-control" id="shippingCountry" name="shippingCountry" value={formik.values.shippingCountry} onChange={formik.handleChange} />
                        </div>
                        <div className={classes.column}>
                            <label htmlFor="shippingState">State</label>
                            <input type="text" className="form-control" id="shippingState" name="shippingState" value={formik.values.shippingState} onChange={formik.handleChange} />
                        </div>
                        <div className={classes.column}>
                            <label htmlFor="shippingAddress">Address</label>
                            <input type="text" className="form-control" id="shippingAddress" name="shippingAddress" value={formik.values.shippingAddress} onChange={formik.handleChange} />
                        </div>
                    </div>
                    <div className={classes.row}>
                        <div className={classes.column}>
                            <label htmlFor="shippingAddressLandmark">Address Landmark/Detail <span className={classes.labelHintWrapper}>If any</span></label>
                            <input type="text" className="form-control" id="shippingAddressLandmark" name="shippingAddressLandmark" value={formik.values.shippingAddressLandmark} onChange={formik.handleChange} />
                        </div>
                        <div className={classes.column}>
                            <label htmlFor="shippingZipCode">Zip Code</label>
                            <input type="text" className="form-control" id="shippingZipCode" name="shippingZipCode" value={formik.values.shippingZipCode} onChange={formik.handleChange} />
                        </div>
                    </div>
                </div>
            </Collapse>
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

export default CustomerForm;