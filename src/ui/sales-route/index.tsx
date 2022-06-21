import { useFormik } from 'formik'
import React from 'react'
import { Collapse } from 'react-bootstrap';
import toast from 'react-hot-toast';
import { getAllAreas } from '../../parser/area';
import { addOneSalesRoute } from '../../parser/sales-route';
import { gettowns } from '../../parser/town';
import { addLog } from '../../services/cloud/firebase/logging';
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
  const [towns, setTowns] = React.useState([]);
  const [areas, setAreas] = React.useState([]);

  const getTowns = async () => {
    //call get product categories api here
    const res = await gettowns().then(res => {
      setTowns(res?.map(town => <option key={town.id} value={town.id}>{town.name}</option>))
    }).catch(err => {
      toast.error(err.message || 'Something went wrong while getting towns');
      addLog({message:err.message || 'Something went wrong while getting towns', path:'/sales-route/index.tsx/getTowns'});
    });
  }
  const getAreas = async () => {
    //call get product categories api here
    const res = await getAllAreas().then(res => {
      setAreas(res?.map(area => <option key={area.id} value={area.id}>{area.name}</option>))
    }).catch(err => {
      toast.error(err.message || 'Something went wrong while getting areas');
      addLog({message:err.message || 'Something went wrong while getting areas', path:'/sales-route/index.tsx/getAreas'});
    });
  }
  
  React.useEffect(() => {
    getTowns();
    getAreas();
  }, []);

  const initialValues = {
    id:'',
    name: '',
    towns: [],
    areas: [],
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
              <div className={classes.column}>
                <label htmlFor="areas">Areas</label>
                <select className="form-control" id="areas" name="areas" multiple value={formik.values.areas} onChange={formik.handleChange}>
                    {areas}
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

export default SalesRouteForm;