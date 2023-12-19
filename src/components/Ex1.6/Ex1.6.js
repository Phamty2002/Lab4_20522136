import React, { useState } from 'react';

const FormComponent = () => {
  const [formValues, setFormValues] = useState({
    address1: '',
    address2: '',
    address3: '',
    address4: '',
    price: '',
    requiredBy: ''
  });
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const validateForm = () => {
    const newErrors = {};
    if (formValues.address1.length < 3) {
      newErrors.address1 = 'Too short!';
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length === 0) {
      console.log('Form is valid, submit the form');
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <label>
          Address 1:
          <input
            type="text"
            name="address1"
            value={formValues.address1}
            onChange={handleInputChange}
          />
          {errors.address1 && <p>{errors.address1}</p>}
        </label>
        {/* Repeat for other fields */}
        <button type="submit">Submit</button>
      </form>
      <div className="form-output">
        <h3>Current value:</h3>
        <pre>{JSON.stringify(formValues, null, 2)}</pre>
        <h3>Valid?</h3>
        <pre>{Object.keys(errors).length === 0 ? 'true' : 'false'}</pre>
        <h3>Errors?</h3>
        <pre>{JSON.stringify(errors, null, 2)}</pre>
      </div>
    </div>
  );
};

export default FormComponent;
