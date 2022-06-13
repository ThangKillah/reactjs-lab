import PropTypes from 'prop-types';
import React from 'react';
import { useForm } from 'react-hook-form';
import InputField from '../../../../components/form-control/InputField';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

TodoForm.propTypes = {
  onSubmit: PropTypes.func,
};

function TodoForm(props) {
  const { onSubmit } = props;
  const schema = yup
    .object()
    .shape({
      title: yup.string().required('This title field is requied'),
    })
    .required();

  const form = useForm({
    defaultValues: {
      title: '',
    },
    resolver: yupResolver(schema),
  });

  const handleTodoFormSubmit = (values) => {
    if (onSubmit) {
      onSubmit(values);
    }
    form.reset();
  };
  return (
    <form onSubmit={form.handleSubmit(handleTodoFormSubmit)}>
      <InputField name="title" label="Todo title" form={form} />
    </form>
  );
}

export default TodoForm;
