import { useFormik } from 'formik'
import React from 'react'
import { Colors } from '../../common/colors';
import ButtonComponent from '../../common/components/button-component';
import { ComponentProps, useStylesFromThemeFunction } from './SupplierForm'

const SupplierForm: React.FC<ComponentProps> = ({
  onSubmit,
  onChange,
  supplier,
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
    id: supplier?.id || '',
    name: supplier?.name || '',
    companyEmail: supplier?.companyEmail || '',
    country: supplier?.country || '',
    state: supplier?.state || '',
    address: supplier?.address || '',
    companyPhoneNumber: supplier?.companyPhoneNumber || '',
    zipCode: supplier?.zipCode || '',
    industry: supplier?.industry || '',
    productServiceDescription: supplier?.productServiceDescription || '',
    //mianContactInfo
    mainContactName: supplier?.mainContactName || '',
    mainContactCompanyPosition: supplier?.mainContactCompanyPosition || '',
    mainContactEmail: supplier?.mainContactEmail || '',
    mainContactPhoneNumber: supplier?.mainContactPhoneNumber || '',
    //Additional Information
    additionalInfromation: supplier?.additionalInfromation || '',
    additionalFile: supplier?.additionalFile || '',
    comment: supplier?.comment || '',
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
                <input type="text" className="form-control" id="id" name="id" value={formik.values.id} required onChange={formik.handleChange} />
              </div>
              <div className={classes.column}>
                <label htmlFor="name">Company Name<span className={classes.colorRed}>*</span></label>
                <input type="text" className="form-control" id="name" name="name" required value={formik.values.name} onChange={formik.handleChange} />
              </div>
              <div className={classes.column}>
                <label htmlFor="companyEmail">Company Email</label>
                <input type="text" className="form-control" id="companyEmail" name="companyEmail" value={formik.values.companyEmail} onChange={formik.handleChange} />
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
                <label htmlFor="companyPhoneNumber">Company Phone Number</label>
                <input type="text" className="form-control" id="companyPhoneNumber" name="companyPhoneNumber" value={formik.values.companyPhoneNumber} onChange={formik.handleChange} />
              </div>
              <div className={classes.column}>
                <label htmlFor="zipCode">Zip Code</label>
                <input type="text" className="form-control" id="zipCode" name="zipCode" value={formik.values.zipCode} onChange={formik.handleChange} />
              </div>
              <div className={classes.column}>
                <label htmlFor="industry">Industry</label>
                <input type="text" className="form-control" placeholder='IT Software' id="industry" name="industry" value={formik.values.industry} onChange={formik.handleChange} />
              </div>
            </div>
            <label htmlFor="productServiceDescription">Product/Service Description</label>
            <textarea className="form-control" id="productServiceDescription" name="productServiceDescription" value={formik.values.productServiceDescription} onChange={formik.handleChange} />
          </div>
          <hr/>
          <div className="form-group">
            <h4>Main Contact Information</h4>
            <div className={classes.row}>
              <div className={classes.column}>
                <label htmlFor="mainContactName">Main Contact Name</label>
                <input type="number" className="form-control" id="mainContactName" name="mainContactName" value={formik.values.mainContactName} onChange={formik.handleChange} />
              </div>
              <div className={classes.column}>
                <label htmlFor="mainContactCompanyPosition">Company Position</label>
                <input type="number" className="form-control" id="mainContactCompanyPosition" name="mainContactCompanyPosition" value={formik.values.mainContactCompanyPosition} onChange={formik.handleChange} />
              </div>
            </div>
            <div className={classes.row}>
              <div className={classes.column}>
                <label htmlFor="mainContactEmail">Email</label>
                <input type="number" className="form-control" id="mainContactEmail" name="mainContactEmail" value={formik.values.mainContactEmail} onChange={formik.handleChange} />
              </div>
              <div className={classes.column}>
                <label htmlFor="mainContactPhoneNumber">Phone Number</label>
                <input type="number" className="form-control" id="mainContactPhoneNumber" name="mainContactPhoneNumber" value={formik.values.mainContactPhoneNumber} onChange={formik.handleChange} />
              </div>
            </div>
          </div>
          <hr/>
          <div className="form-group">
            <label htmlFor="additionalInfromation">Additional Infromation</label>
            <input type="text" className="form-control" id="additionalInfromation" name="additionalInfromation" value={formik.values.additionalInfromation} onChange={formik.handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="additionalFile">Additional File</label>
            <input type="file" className="form-control" id="additionalFile" name="additionalFile" value={formik.values.additionalFile} onChange={formik.handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="comment">Comment</label>
            <textarea className="form-control" id="comment" name="comment" value={formik.values.comment} onChange={formik.handleChange} />
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

export default SupplierForm;