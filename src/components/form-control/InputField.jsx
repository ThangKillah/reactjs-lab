import React from 'react';
import PropTypes from 'prop-types';
import { TextField } from '@mui/material';
import { Controller } from 'react-hook-form';

InputField.propTypes = {
  name: PropTypes.string.isRequired,
  form: PropTypes.object.isRequired,

  label: PropTypes.string,
  disable: PropTypes.bool,
};

function InputField(props) {
  const { name, form, label, disable } = props;
  const { formState } = form;
  const error = formState?.errors?.[name];
  return (
    <div>
      <Controller
        name={name}
        control={form.control}
        render={({ field }) => (
          <TextField {...field} error={!!error} helperText={error?.message} label={label} disable={disable} fullWidth />
        )}
      />
    </div>
  );
}

export default InputField;
