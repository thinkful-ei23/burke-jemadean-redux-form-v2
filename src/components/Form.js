import React from 'react';
import {reduxForm, Field} from 'redux-form';
import {required, nonEmpty, requiredLength, requiredAllNumbers} from '../validators';
import Input from './Input';

export function Form(props) {
  return(
    <form>
      <div>
        <Field label="Tracking number" name="trackingNumber" id="trackingNumber" component={Input} validate={[required, nonEmpty, requiredLength, requiredAllNumbers]} />
      </div>
      <div>
        <Field label="What is your issue?" name="issue" id="issue" component={Input} element="select">
          <option value="not-delivered">My delivery hasn't arrived</option>
          <option value="wrong-item">The wrong item was delivered</option>
          <option value="missing-part">Part of my order was missing</option>
          <option value="damaged">Some of my order arrived damaged</option>
          <option value="other">Other (give details below)</option>
        </Field>
      </div>
      <div>
        <Field label="Give more details (optional)" name="details" id="details" element="textarea" component={Input} />
      </div>
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  )
}

export default reduxForm({
  form: 'form'
})(Form);