import { useFormik } from 'formik'
import React from 'react'
import { Collapse } from 'react-bootstrap';
import { Colors } from '../common/colors';
import ButtonComponent from '../common/components/button-component';
import { ComponentProps, useStylesFromThemeFunction } from './SalesRouteForm'

const SalesRouteForm: React.FC<ComponentProps> = ({
  onSubmit,
  onChange,
  product,
  options,
  onImageChange,
}) => {
  const classes = useStylesFromThemeFunction();
  const [showShippingFfield, setShowShippingField] = React.useState(false);
  
  const getTowns = () => {

    //call get product categories api here

    return [
      {
        id: "qwertyuiop",
        name: 'Town 1',
      },
      {
        id: "asdfghjkl",
        name: 'Town 2',
      },
      {
        id: "zxcvbnm",
        name: 'Town 3',
      }
    ]
  }
  const getAreas = () => {
      
      //call get suppliers api here
      return [
        {
          id: "qwertyuiop",
          name: 'Area 1',
        },
        {
          id: "asdfghjkl",
          name: 'Area 2',
        },
        {
          id: "zxcvbnm",
          name: 'Area 3',
        }
      ]
  }
  
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
    towns: [],
    areas: [],
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
                <label htmlFor="towns">Towns</label>
                <select className="form-control" id="towns" name="towns" multiple value={formik.values.towns} onChange={formik.handleChange}>
                    {getTowns().map(town => <option key={town.id} value={town.id}>{town.name}</option>)}
                </select>
              </div>
              <div className={classes.column}>
                <label htmlFor="areas">Areas</label>
                <select className="form-control" id="areas" name="areas" multiple value={formik.values.areas} onChange={formik.handleChange}>
                    {getAreas().map(area => <option key={area.id} value={area.id}>{area.name}</option>)}
                </select>
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

export default SalesRouteForm;