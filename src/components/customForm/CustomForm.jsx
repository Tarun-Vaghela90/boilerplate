
//   command  To  Install  Dependancy -> npm install react-hook-form yup @hookform/resolvers

import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import FormInput from './CustomInput/FormInput';

const schema = yup.object().shape({
  username: yup.string().required('Username is required'),
  email: yup.string().email().required('Email is required')
});

const CustomForm = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormInput
        label="Username"
        name="username"
        register={register}
        required
        error={errors.username}
      />
      <FormInput
        label="Email"
        name="email"
        type="email"
        register={register}
        required
        error={errors.email}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default CustomForm;
