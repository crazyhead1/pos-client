import { useFormik } from 'formik'
import React from 'react'
import { Colors } from '../../common/colors';
import ButtonComponent from '../../common/components/button-component';
import { ComponentProps, useStylesFromThemeFunction } from './InventoryForm'

const InventoryForm: React.FC<ComponentProps> = ({
  onSubmit,
  onChange,
  product,
  options,
  onImageChange,
}) => {
  const classes = useStylesFromThemeFunction();
  
  const getProductCategories = () => {

    //call get product categories api here

    return [
      {
        id: "qwertyuiop",
        name: 'Category 1',
      },
      {
        id: "asdfghjkl",
        name: 'Category 2',
      },
      {
        id: "zxcvbnm",
        name: 'Category 3',
      }
    ]
  }
  const getSuppliers = () => {
      
      //call get suppliers api here
      return [
        {
          id: "qwertyuiop",
          name: 'Supplier 1',
        },
        {
          id: "asdfghjkl",
          name: 'Supplier 2',
        },
        {
          id: "zxcvbnm",
          name: 'Supplier 3',
        }
      ]
  }
  
  const renderSuppliers = () => {
    return getSuppliers().map(supplier => <option key={supplier.id} value={supplier.id}>{supplier.name}</option>)
  }
  const rendeProductCategories = () => {
    return getProductCategories()
    .map(category => <option key={category.id} value={category.id}>{category.name}</option>)
  }
  const initialValues = {
    id:'',
    name: '',
    unitPrice: '',
    unitsInStock: '',
    supplyPrice: '',
    category: '',
    description: '',
    taxPerUnit: '',
    images: [],
    supplierId: '',

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

  React.useEffect(() => {
    
  },[formik.values.images])
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div className={classes.container}>
          <div className={classes.innerContainerLeft}>
            <div className="form-group">
              <div className={classes.row}>
                <div className={classes.column}>
                  <label htmlFor="id">Barcode<span className={classes.colorRed}>*</span> <span className={classes.labelHintWrapper}>Scan or Type Barcode below</span></label>
                  <input type="text" className="form-control" id="id" name="id" required value={formik.values.id} onChange={formik.handleChange} />
                </div>
                <div className={classes.column}>
                  <label htmlFor="name">Name<span className={classes.colorRed}>*</span></label>
                  <input type="text" className="form-control" id="name" name="name" required value={formik.values.name} onChange={formik.handleChange} />
                </div>
                <div className={classes.column}>
                  <label htmlFor="category">Category<span className={classes.colorRed}>*</span></label>
                  <select className="form-control" id="category" name="category" required value={formik.values.category} onChange={formik.handleChange}>
                    {rendeProductCategories()}
                  </select>
                </div>
              </div>
              <label htmlFor="description">Description</label>
              <textarea className="form-control" id="description" name="description" value={formik.values.description} onChange={formik.handleChange} />
            </div>
            <hr/>
            <div className="form-group">
              <div className={classes.row}>
                <div className={classes.column}>
                  <label htmlFor="unitPrice">Sale Price<span className={classes.colorRed}>*</span></label>
                  <input type="number" className="form-control" id="unitPrice" required name="unitPrice" value={formik.values.unitPrice} onChange={formik.handleChange} />
                </div>
                <div className={classes.column}>
                  <label htmlFor="supplyPrice">Supply Price</label>
                  <input type="number" className="form-control" id="supplyPrice" name="supplyPrice" value={formik.values.supplyPrice} onChange={formik.handleChange} />
                </div>
                <div className={classes.column}>
                  <label htmlFor="unitsInStock">Units in Stock<span className={classes.colorRed}>*</span></label>
                  <input type="number" className="form-control" id="unitsInStock" required name="unitsInStock" value={formik.values.unitsInStock} onChange={formik.handleChange} />
                </div>
              </div>
            </div>
            <hr/>
            <div className="form-group">
              <label htmlFor="taxPerUnit">Tax Per Unit</label>
              <input type="text" className="form-control" id="taxPerUnit" name="taxPerUnit" value={formik.values.taxPerUnit} onChange={formik.handleChange} />
            </div>
            <hr/>
            <div className="form-group">
              <label htmlFor="supplierId">Supplier</label>
              <select className="form-control" id="supplierId" name="supplierId" value={formik.values.supplierId} onChange={formik.handleChange}>
                {renderSuppliers()}
              </select>
            </div>
          </div>
          <div className={classes.innerContainerRight}>
            <label htmlFor="images">Images</label>
            <input type="file" className="form-control" id="images" name="images" value={formik.values.images} multiple onChange={formik.handleChange} />
            <div>
              {formik.values.images.map(image => <img key={image as React.Key} src={image} />)}
            </div>
          </div>
        </div>
        <div className={classes.centeredRow}>
          <ButtonComponent type="submit" style={{width:'100%', height:'50px'}}><h4><b>Submit</b></h4></ButtonComponent>
        </div>
      </form>
    </div>
  )
}

export default InventoryForm;