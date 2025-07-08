import React from 'react';
import './FormInput.css';
import './FormInput.css'
const FormInput = ({ label, name, register, required, type = 'text', error }) => {
  return (
    <div className="form-control">
      <label>{label}</label>
      <input type={type} {...register(name, required)} />
      {error && <p className="error">{error.message}</p>}
    </div>
  );
};

export default FormInput;
