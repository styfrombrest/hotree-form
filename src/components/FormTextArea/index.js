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

class FormItemElement extends React.Component {
  constructor(props) {
    super(props);

    this.state = { value: props.value };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  render() {
    const {
      title, error, required, placeholder,
    } = this.props;
    const { value } = this.state;

    return (
      <FormItem title={title} error={error} required={required}>
        <TextareaWrapper>
          <Textarea maxLength={`${inputMaxLength}`} placeholder={placeholder} value={value} onChange={this.handleChange} />{' '}
          <TextareaHint>Max length {`${inputMaxLength}`} characters</TextareaHint>
          <TextareaCounter>
            {value.length}/{inputMaxLength}
          </TextareaCounter>
        </TextareaWrapper>
      </FormItem>
    );
  }
}

export default FormItemElement;

FormItemElement.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  required: PropTypes.bool,
  error: PropTypes.bool,
};

FormItemElement.defaultProps = {
  required: false,
  error: false,
};
