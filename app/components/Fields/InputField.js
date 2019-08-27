import { Input } from 'reactstrap';
import React from 'react';
import PropTypes from 'prop-types';

const InputField = ({
  input,
  meta: { touched, error, submitError },
  dirtySinceLastSubmit,
  submitError: submitErr,
  placeholder,
}) => {
  const errorCheck = !!(touched && error);
  const submitCheck = !!(submitError && !dirtySinceLastSubmit);
  return (
    <Input
      bsSize="md"
      className="rounded-0"
      invalid={errorCheck || submitCheck}
      placeholder={placeholder}
      {...input}
    />
  );
};

InputField.propTypes = {
  input: PropTypes.object,
  meta: PropTypes.object,
  submitError: PropTypes.any,
  dirtySinceLastSubmit: PropTypes.bool,
  placeholder: PropTypes.string,
};

export default InputField;
