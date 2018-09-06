import React from 'react';
import {reduxForm, Field} from 'redux-form';

export function Form(props) {
  // <Field name="name" id="name" type="text" component="input" />
  return(
    <form>
      <div>
        <label for="trackingNumber">Tracking number</label>
        <Field name="trackingNumber" id="trackingNumber" component="input" />
        {/* <input name="trackingNumber" id="trackingNumber"></input> */}
      </div>
      <div>
        <label for="issue">What is your issue?</label>
        <select name="issue" id="issue">
          <option value="not-delivered">My delivery hasn't arrived</option>
          <option value="wrong-item">The wrong item was delivered</option>
          <option value="missing-part">Part of my order was missing</option>
          <option value="damaged">Some of my order arrived damaged</option>
          <option value="other">Other (give details below)</option>
        </select>
      </div>
      <div>
      <label for="details">Give more details (optional)</label>
        <textarea name="details" id="details"></textarea>
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