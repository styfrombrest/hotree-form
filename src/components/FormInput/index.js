import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { color } from './../../consts';

import FormItem from './../FormItem/';

const Input = styled.input`
  width: 100%;
  height: 2em;
  border: 1px solid ${color.silver};
  padding: 0.5em;
  margin: auto 1em;

  ::placeholder {
    color: ${color.silver};
  }
`;

const FormInput = (props) => {
  const {
    value, title, required, placeholder, validator, name,
  } = props;

  const handleChange = (event) => {
    props.setData(props.name, event.target.value);
  };

  const error = validator(name, value);

  return (
    <FormItem title={title} error={error} required={required}>
      <Input value={value || ''} placeholder={placeholder} onChange={handleChange} />
    </FormItem>
  );
};

export default FormInput;

FormInput.propTypes = {
  title: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  setData: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
  validator: PropTypes.func,
  required: PropTypes.bool,
};

FormInput.defaultProps = {
  required: false,
};
