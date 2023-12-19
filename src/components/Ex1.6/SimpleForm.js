import React, { useCallback, useContext, useEffect, useState } from 'react';
import './SimpleForm.css';
import { FormContext } from './FormContext';

const SimpleForm = ({ children, value, onChange, onValid }) => {
  const [values, setValues] = useState(value || {});
  const [dirtyFields, setDirtyFields] = useState({});
  const [invalidFields, setInvalidFields] = useState({});

  useEffect(() => {
    setValues(value || {});
  }, [value]);

  useEffect(() => {
    if (onChange) {
      onChange(values);
    }
  }, [onChange, values]);

  useEffect(() => {
    if (onValid) {
      onValid(
        Object.keys(invalidFields).every((key) => !invalidFields[key]),
        invalidFields
      );
    }
  }, [onValid, invalidFields]);

  const setValue = useCallback((field, val) => {
    setValues((vs) => ({ ...vs, [field]: val }));
  }, [setValues]);

  const getValue = useCallback((field) => values[field], [values]);

  const setDirty = useCallback((field) => {
    setDirtyFields((df) => ({ ...df, [field]: true }));
  }, [setDirtyFields]);

  const getDirty = useCallback((field) => {
    return Object.keys(dirtyFields).includes(field);
  }, [dirtyFields]);

  const setInvalid = useCallback((field, error) => {
    setInvalidFields((i) => ({
      ...i,
      [field]: error ? error : undefined,
    }));
  }, [setInvalidFields]);

  const form = {
    setValue,
    getValue,
    setDirty,
    getDirty,
    setInvalid,
  };

  return (
    <div className="simpleForm-container">
      <FormContext.Provider value={form}>
        {children}
      </FormContext.Provider>
    </div>
  );
};

export default SimpleForm;
