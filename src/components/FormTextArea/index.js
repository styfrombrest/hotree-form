import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { color, inputMaxLength } from './../../consts';

import FormItem from './../FormItem/';

const TextareaWrapper = styled.div`
  width: 100%;
  float: left;
  margin: auto 1em;
`;

const Textarea = styled.textarea`
  width: 100%;
  padding: 0.5em;
  border: 1px solid ${color.silver};

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
    title, validator, name, required, placeholder, value,
  } = props;

  const handleChange = (event) => {
    props.setData(props.name, event.target.value);
  };

  const error = validator(name, value);

  return (
    <FormItem title={title} error={error} required={required}>
      <TextareaWrapper>
        <Textarea maxLength={`${inputMaxLength}`} placeholder={placeholder} value={value || ''} onChange={handleChange} />{' '}
        <TextareaHint>Max length {`${inputMaxLength}`} characters</TextareaHint>
        <TextareaCounter>
          {value ? value.length : 0}/{inputMaxLength}
        </TextareaCounter>
      </TextareaWrapper>
    </FormItem>
  );
};

export default FormItemElement;

FormItemElement.propTypes = {
  title: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  placeholder: PropTypes.string.isRequired,
  setData: PropTypes.func,
  required: PropTypes.bool,
  validator: PropTypes.func,
};

FormItemElement.defaultProps = {
  required: false,
};
