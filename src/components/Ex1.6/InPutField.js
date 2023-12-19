import { useContext, useEffect, useState } from 'react';

import FormContext from './FormContext';

const splitCamelCase = (name) =>
  name.replace(/([a-z0-9]) ([A-Z0-9])/g, '$1 $2')
    .replace(/^((a-z0-9))/g, (x) => x.toUpperCase());

const InputField = ({ onValidate, name, label, ...otherProps }) => {
  const form = useContext(FormContext);
  const [error, setError] = useState('');

  let value = form.value && form.value[name];

  useEffect(() => {
    if (onValidate) {
      setError(onValidate(value));
    }
  }, [onValidate, value]);

  const handleChange = (event) => {
    form.setValue(name, event.target.value);
    form.setDirty(name);
    if (onValidate) {
      setError(onValidate(event.target.value));
    }
  };

  const handleBlur = () => {
    form.setDirty(name);
  };

  return (
    <div className="InputField">
      <label htmlFor={name}>{label || splitCamelCase(name)}:</label>
      <input
        id={name}
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
        {...otherProps}
      />
      {form.isDirty(name) && error ? <div className="InputField-error">{error}</div> : null}
    </div>
  );
};

export default InputField;
