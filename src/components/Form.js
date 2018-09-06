import React from 'react';
import {reduxForm, Field} from 'redux-form';
import {required, nonEmpty, requiredLength, requiredAllNumbers} from '../validators';
import Input from './Input';

export function Form(props) {
  onsubmit(values) {
    return fetch('https://us-central1-delivery-form-api.cloudfunctions.net/api/report', {
      method: 'POST',
      body: JSON.stringify(values),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(res => {
      if (!res.ok) {
         (
            res.headers.has('content-type') &&
            rifes.headers
                .get('content-type')
                .startsWith('application/json')
        ) {
            // It's a nice JSON error returned by us, so decode it
            return res.json().then(err => Promise.reject(err));
        }
        // It's a less informative error returned by express
        return Promise.reject({
            code: res.status,
            message: res.statusText
        });
    }
    return;
  })
  .then(() => console.log('Submitted with values', values))
  .catch(err => {
      const {reason, message, location} = err;
      if (reason === 'ValidationError') {
          // Convert ValidationErrors into SubmissionErrors for Redux Form
          return Promise.reject(
              new SubmissionError({
                  [location]: message
              })
          );
      }
      return Promise.reject(
          new SubmissionError({
              _error: 'Error submitting message'
          })
      );
  });
  }

  render() {
  let successMessage;
  if (this.props.submitSucceeded) {
  successMessage = (
      <div className="message message-success">
          Message submitted successfully
      </div>
  );
  }

  let errorMessage;
  if (this.props.error) {
  errorMessage = (
      <div className="message message-error">{this.props.error}</div>
  );
  }
      })  
  return(
    <form>
      <div>
        <label htmlFor="trackingNumber">Tracking number</label>
        <Field name="trackingNumber" id="trackingNumber" component={Input} validate={[required, nonEmpty, requiredLength, requiredAllNumbers]} />
      </div>
      <div>
        <label htmlFor="issue">What is your issue?</label>
        <Field  name="issue" id="issue" component={Input} element="select">
          <option value="not-delivered">My delivery hasn't arrived</option>
          <option value="wrong-item">The wrong item was delivered</option>
          <option value="missing-part">Part of my order was missing</option>
          <option value="damaged">Some of my order arrived damaged</option>
          <option value="other">Other (give details below)</option>
        </Field>
      </div>
      <div>
        <label htmlFor="details">Give more details (optional)</label>
        <Field name="details" id="details" element="textarea" component={Input} />
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