import { useFormik } from 'formik'
import { values } from 'lodash';
import React from 'react'
import { Collapse } from 'react-bootstrap';
import toast from 'react-hot-toast';
import { addOneArea } from '../../../parser/area';
import { getAllCategories } from '../../../parser/categories';
import { gettowns } from '../../../parser/town';
import { addLog } from '../../../services/cloud/firebase/logging';
import { Colors } from '../../common/colors';
import ButtonComponent from '../../common/components/button-component';
import { SUB_CATEGORIES_COLLECTION } from '../../common/constants/collections';
import { ComponentProps, useStylesFromThemeFunction } from './Category'

const CategoryForm: React.FC<ComponentProps> = ({
  onSubmit,
  categories,
  onImageChange,
}) => {
  const classes = useStylesFromThemeFunction();
  const [showShippingFfield, setShowShippingField] = React.useState(false);
  const [categoryTypes, setCategoryTypes] = React.useState([] as any[]);

  const getCategorys = async () => {
    //call get product categories api here
    let tempRenderedCategories = [] as JSX.Element[];
    for (const category in SUB_CATEGORIES_COLLECTION) {
        tempRenderedCategories.push(<option key={category} value={SUB_CATEGORIES_COLLECTION[category]}>{category}</option>);
    }
    setCategoryTypes(tempRenderedCategories);
  }
  
  React.useEffect(() => {
    getCategorys();
  }, []);
  const initialValues = {
    id:'',
    name: '',
    type: '',
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
                <label htmlFor="type">Select Type</label>
                <select className="form-control" id="type" name="type" value={formik.values.type} onChange={formik.handleChange}>
                    {categoryTypes}
                </select>
              </div>
            </div>
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

export default CategoryForm;