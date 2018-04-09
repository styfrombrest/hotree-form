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
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.props.setData(this.props.name, event.target.value);
  }

  render() {
    const {
      value, title, error, required, placeholder,
    } = this.props;

    return (
      <FormItem title={title} error={error} required={required}>
        <Input value={value} placeholder={placeholder} onChange={this.handleChange} />
      </FormItem>
    );
  }
}

export default FormItemElement;

FormItemElement.propTypes = {
  title: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  setData: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
  required: PropTypes.bool,
  error: PropTypes.bool,
};

FormItemElement.defaultProps = {
  required: false,
  error: false,
};
