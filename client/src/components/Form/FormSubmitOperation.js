import React, { Component } from 'react';
// import { Field, reduxForm } from 'redux-form';
import { reduxForm, Field, change, getFormValues, formValueSelector, reset } from 'redux-form';
import {  Button, Label, Col, Row} from 'reactstrap'
import {postUserOperations} from '../../redux/actions/ActionCreators'

const validate = values => {
    const errors = {}
    if (!values.firstName) {
      errors.firstName = 'Required'
    } else if (values.firstName.length < 2) {
      errors.firstName = 'Minimum be 2 characters or more'
    }
    if (!values.email) {
      errors.email = 'Required'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Invalid email address'
    }
    if (!values.lastName) {
        errors.lastName = 'Required'
      } else if (values.lastName.length < 2) {
        errors.lastName = 'Minimum be 2 characters or more'
      }
    return errors
  }

const renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
    <div>
      <label className="control-label">{label}</label>
      <div>
        <input {...input} placeholder={label} type={type} className="form-control" />
        {touched && ((error && <span className="text-danger">{error}</span>) || (warning && <span>{warning}</span>))}
      </div>
    </div>
  )



class FormSubmitOperation extends Component {
  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  onSubmit = (formValues, dispatch) => {
    console.log('the formvalues', formValues)
    postUserOperations(formValues)
    
    dispatch(reset("userOperationSubmission")); // string here is the name of the form, check the export default reduxForm below.
    
  };

  componentDidMount() {
    this.props.initialize({ userid: this.props.userid });
    // set the value individually
    this.props.dispatch(change('myFormName', 'anotherField', 'value'));
  }

  handleSubmit(event, val){
    // console.log(event)
    // console.log(val)
    // event.preventDefault();
    
  
  }
  onChange(){
    console.log(" Triggered")
    }
  render() {
    const { handleSubmit } = this.props;
    return (
      // onSubmit={handleSubmit}
      <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
          <Field className="form-control" name="userid" component='input' disabled hidden value={this.props.userid} />
          
        
          <Row className="form-group">
            <Label htmlFor="operation" md={2}>Medical Operation</Label>
            <Col md={10}>
            <Field className="form-control" name="operation" component='select' >
              {this.props.medops}
            </Field>
    
            </Col>
          </Row>
          <Row className="form-group">
            <Label htmlFor="medPayment" md={2}>Payment Required</Label>
            <Col md={10}>
              <Field className="form-control" placeholder="Payment Required" component='input' name="medPayment"  />
            </Col>
          </Row>
          <Row className="form-group">
            <Label htmlFor="coveredByMedicare" md={2}>Covered Amount</Label>
            <Col md={10}>
              <Field className="form-control" placeholder="Covered amount by Medicare" component='input' name="coveredByMedicare"  />
            </Col>
          </Row>
          
          <Row className="form-group">
            <Label htmlFor="actualPaid" md={2}>Paid Amount</Label>
            <Col md={10}>
              <Field className="form-control" placeholder="Paid Amount" component='input' name="actualPaid"  />
            </Col>
          </Row>
          <Row className="form-group">
            <Label htmlFor="Operation" md={2}>State</Label>
            <Col md={10}>
              <Field className="form-control" name="state"  component='select' label="State">
                {this.props.states} 
              </Field>
            </Col>
          </Row>
          <Row className="form-group">
              <Col  >
                  <Button type="submit" className="float-right" color="primary">
                      Submit Operation
                  </Button>
              </Col>
          </Row>
      </form>
    )
  }
}
FormSubmitOperation = reduxForm({
  form: 'userOperationSubmission',
  validate,
})(FormSubmitOperation);

export default FormSubmitOperation;
