import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { color, dataFieldPropType } from './../../consts';

import FormItem from './../FormItem/';
import validators from './../../validators/';

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
    data, title, required, placeholder, type, inputStyle, afterContent,
  } = props;

  const handleChange = (event) => {
    const { value } = event.target;
    props.setData(props.name, props.type === 'number' ? +value : value, validators(data.type, value));
  };

  return (
    <FormItem title={title} error={data.status === false} required={required} afterContent={afterContent}>
      <Input value={data.value || ''} placeholder={placeholder} onChange={handleChange} type={type} style={inputStyle} />
    </FormItem>
  );
};

export default FormInput;

FormInput.propTypes = {
  title: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  data: dataFieldPropType,
  inputStyle: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  afterContent: PropTypes.string,
  setData: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
  required: PropTypes.bool,
  type: PropTypes.string,
};

FormInput.defaultProps = {
  required: false,
  type: 'text',
};
