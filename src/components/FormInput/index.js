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

class FormItemElement extends React.Component {
  constructor(props) {
    super(props);

    this.state = { value: '' };
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
        <Input value={value} placeholder={placeholder} />
      </FormItem>
    );
  }
}

export default FormItemElement;

FormItemElement.propTypes = {
  title: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  required: PropTypes.bool,
  error: PropTypes.bool,
};

FormItemElement.defaultProps = {
  required: false,
  error: false,
};
