import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { color, dataFieldPropType, inputMaxLength } from './../../consts';

import FormItem from './../FormItem/';
import validators from './../../validators/';

const TextareaWrapper = styled.div`
  width: 100%;
  float: left;
  margin: auto 1em;
`;

const Textarea = styled.textarea`
  width: 100%;
  padding: 0.5em;
  border: 1px solid ${color.silver};
  resize: none;

  ::placeholder {
    color: ${color.silver};
  }
`;

const TextareaHint = styled.div`
  color: ${color.silver};
  text-align: left;
  font-size: 0.75em;
  font-style: italic;
  float: left;
`;

const TextareaCounter = styled.div`
  color: ${color.silver};
  text-align: left;
  font-size: 0.75em;
  font-style: italic;
  float: right;
`;

const FormItemElement = (props) => {
  const {
    title, data, required, placeholder,
  } = props;

  const handleChange = (event) => {
    const { value } = event.target;
    props.setData(props.name, value, validators(data.type, value));
  };

  // const error = validator(name, value);

  return (
    <FormItem title={title} required={required} error={data.status === false}>
      <TextareaWrapper>
        <Textarea maxLength={`${inputMaxLength}`} placeholder={placeholder} value={data.value || ''} onChange={handleChange} />{' '}
        <TextareaHint>Max length {`${inputMaxLength}`} characters</TextareaHint>
        <TextareaCounter>
          {data.value ? data.value.length : 0}/{inputMaxLength}
        </TextareaCounter>
      </TextareaWrapper>
    </FormItem>
  );
};

export default FormItemElement;

FormItemElement.propTypes = {
  title: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  setData: PropTypes.func,
  required: PropTypes.bool,
  data: dataFieldPropType,
};

FormItemElement.defaultProps = {
  required: false,
};
