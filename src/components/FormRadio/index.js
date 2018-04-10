import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { color, radioFieldPropType } from './../../consts';

import FormItem from './../FormItem/';

const Input = styled.input`
  display: inline-block;
  height: 1em;
  border: 1px solid ${color.silver};
  padding: 0.5em;
  margin: auto 1em;

  ::placeholder {
    color: ${color.silver};
  }
`;

const RadioItem = styled.label`
  float: left;
  padding-right: 2em;
  margin: 0.5em 0;
`;

const FormInput = (props) => {
  const {
    data, title, required, afterContent,
  } = props;

  const handleChange = (event) => {
    // debugger; // eslint-disable-line
    const { value } = event.target;
    props.setData(props.name, value, true);
  };

  const radioView = data.values.map(item => (
    <RadioItem htmlFor={item.id} key={item.id}>
      <Input id={item.id} value={item.id || ''} checked={data.value === item.id} onChange={handleChange} type="radio" />
      <span>{item.title}</span>
    </RadioItem>
  ));

  return (
    <FormItem title={title} error={data.status === false} required={required} afterContent={afterContent}>
      {radioView}
    </FormItem>
  );
};

export default FormInput;

FormInput.propTypes = {
  title: PropTypes.string,
  name: PropTypes.string.isRequired,
  data: radioFieldPropType,
  afterContent: PropTypes.string,
  setData: PropTypes.func.isRequired,
  required: PropTypes.bool,
};

FormInput.defaultProps = {
  title: null,
  required: false,
};
