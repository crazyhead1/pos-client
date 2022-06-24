import { useFormik } from 'formik'
import React from 'react'
import { Colors } from '../../common/colors';
import ButtonComponent from '../../common/components/button-component';
import { ComponentProps, useStylesFromThemeFunction } from './EmployeeForm'

const EmployeeForm: React.FC<ComponentProps> = ({
  onSubmit,
  onChange,
  employee,
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
    id: employee?.id || '',
    name: employee?.name || '',
    email: employee?.email || '',
    fatherName: employee?.fatherName || '',
    country: employee?.country || '',
    state: employee?.state || '',
    city: employee?.city || '',
    address: employee?.address || '',
    zipCode: employee?.zipCode || '',
    nationality: employee?.nationality || '',
    phoneNumber: employee?.phoneNumber || '',
    landLineNumber: employee?.landLineNumber || '',
    gender: employee?.gender || '',
    religion : employee?.religion || '',
    dateOfBirth: employee?.dateOfBirth || '',
    //Job Information
    department: employee?.department || '',
    designation: employee?.designation || '',
    appointmentDate: employee?.appointmentDate || '',
    appointmentBranch: employee?.appointmentBranch || '',
    joiningDate: employee?.joiningDate || '',
    active: employee?.active || '',
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
                <label htmlFor="name">Name<span className={classes.colorRed}>*</span></label>
                <input type="text" className="form-control" id="name" name="name" required value={formik.values.name} onChange={formik.handleChange} />
              </div>
            </div>
            <div className={classes.row}>
              <div className={classes.column}>
                <label htmlFor="fatherName">Father Name</label>
                <input type="text" className="form-control" id="fatherName" name="fatherName" value={formik.values.fatherName} onChange={formik.handleChange} />
              </div>
              <div className={classes.column}>
                <label htmlFor="email">Email</label>
                <input type="text" className="form-control" id="email" name="email" value={formik.values.email} onChange={formik.handleChange} />
              </div>
            </div>
            <hr/>
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
              <div className={classes.column}>
                <label htmlFor="zipCode">Zip Code</label>
                <input type="text" className="form-control" id="zipCode" name="zipCode" value={formik.values.zipCode} onChange={formik.handleChange} />
              </div>
              <div className={classes.column}>
                <label htmlFor="nationality">Nationality</label>
                <input type="text" className="form-control" id="nationality" name="nationality" value={formik.values.nationality} onChange={formik.handleChange} />
              </div>
            </div>
            <hr/>
            <div className={classes.row}>
              <div className={classes.column}>
                <label htmlFor="gender">Gender</label>
                <select className="form-control" id="gender" name="gender" value={formik.values.gender} onChange={formik.handleChange}>
                  <option value="male">male</option>
                  <option value="female">female</option>
                  <option value="other">other</option>
                </select>
              </div>
              <div className={classes.column}>
                <label htmlFor="religion">Religion</label>
                <input type="text" className="form-control" id="religion" name="religion" value={formik.values.religion} onChange={formik.handleChange} />
              </div>
              <div className={classes.column}>
                <label htmlFor="dateOfBirth">Date of Birth</label>
                <input type="date" className="form-control" id="dateOfBirth" name="dateOfBirth" value={formik.values.dateOfBirth} onChange={formik.handleChange} />
              </div>
            </div>
            <div className={classes.row}>
              <div className={classes.column}>
                <label htmlFor="phoneNumber">Phone Number<span className={classes.colorRed}>*</span></label>
                <input type="text" className="form-control" id="phoneNumber" name="phoneNumber" required value={formik.values.phoneNumber} onChange={formik.handleChange} />
              </div>
              <div className={classes.column}>
                <label htmlFor="landLineNumber">Land-Line Number</label>
                <input type="text" className="form-control" id="landLineNumber" name="landLineNumber" value={formik.values.landLineNumber} onChange={formik.handleChange} />
              </div>
            </div>
          </div>
          <hr/>
          <div className="form-group">
            <h4>Job Information</h4>
            <div className={classes.row}>
              <div className={classes.column}>
                <label htmlFor="department">Department</label>
                <input type="text" className="form-control" id="department" name="department" value={formik.values.department} onChange={formik.handleChange} />
              </div>
              <div className={classes.column}>
                <label htmlFor="designation">Designation<span className={classes.colorRed}>*</span></label>
                <input type="text" className="form-control" id="designation" name="designation" required value={formik.values.designation} onChange={formik.handleChange} />
              </div>
            </div>
            <div className={classes.row}>
              <div className={classes.column}>
                <label htmlFor="appointmentDate">Appointment Date<span className={classes.colorRed}>*</span></label>
                <input type="date" className="form-control" id="appointmentDate" name="appointmentDate" required value={formik.values.appointmentDate} onChange={formik.handleChange} />
              </div>
              <div className={classes.column}>
                <label htmlFor="joiningDate">Joining Date</label>
                <input type="date" className="form-control" id="joiningDate" name="joiningDate" value={formik.values.joiningDate} onChange={formik.handleChange} />
              </div>
            </div>
            <div className={classes.row}>
              <div className={classes.column}>
                <label htmlFor="appointmentBranch">Appointment Branch</label>
                <input type="text" className="form-control" id="appointmentBranch" name="appointmentBranch" value={formik.values.appointmentBranch} onChange={formik.handleChange} />
              </div>
              <div className={classes.column}>
                <label htmlFor="active">Active</label>
                <select className="form-control" id="active" name="active" value={formik.values.active} onChange={formik.handleChange}>
                  <option value="active">Active</option>
                  <option value="inactive">Inactive</option>
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

export default EmployeeForm;