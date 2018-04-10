import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { color, dataFieldPropType, inputMaxLength, minWidthForm, hintFontStyle } from './../../consts';

import FormItem from './../FormItem/';
import { validator } from './../../validators/';

const TextareaWrapper = styled.div`
  flex: 1;
  min-width: ${minWidthForm};
  padding: 0 10px 0 0;
`;

const Textarea = styled.textarea`
  width: 100%;
  padding: 10px;
  border: 1px solid ${color.silver};
  resize: none;

  ::placeholder {
    color: ${color.silver};
  }
`;

const HintFont = styled.div`
  ${hintFontStyle};
`;

const TextareaHint = styled(HintFont)`
  float: left;
`;

const TextareaCounter = styled(HintFont)`
  float: right;
`;

const FormItemElement = (props) => {
  const {
    title, data, required, placeholder,
  } = props;

  const handleChange = (event) => {
    const { value } = event.target;
    props.setData(props.name, value, validator(data.type, value));
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
  title: PropTypes.string,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  setData: PropTypes.func,
  required: PropTypes.bool,
  data: dataFieldPropType,
};

FormItemElement.defaultProps = {
  required: false,
};
