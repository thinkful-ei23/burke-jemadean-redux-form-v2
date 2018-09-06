import React from 'react';
import {reduxForm, Field} from 'redux-form';

export function Form(props) {
  return(
    <form>
      <div>
        <label htmlFor="trackingNumber">Tracking number</label>
        <Field name="trackingNumber" id="trackingNumber" component="input" />
      </div>
      <div>
        <label htmlFor="issue">What is your issue?</label>
        <Field name="issue" id="issue" component="select">
          <option value="not-delivered">My delivery hasn't arrived</option>
          <option value="wrong-item">The wrong item was delivered</option>
          <option value="missing-part">Part of my order was missing</option>
          <option value="damaged">Some of my order arrived damaged</option>
          <option value="other">Other (give details below)</option>
        </Field>
      </div>
      <div>
        <label htmlFor="details">Give more details (optional)</label>
        <Field name="details" id="details" component="textarea" />
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