import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { color } from './../../consts';

import FormItem from './../FormItem';

const SelectItem = styled.select``;

class Select extends React.Component {
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
        <SelectItem>
          <option>123</option>
        </SelectItem>
      </FormItem>
    );
  }
}

export default Select;

Select.propTypes = {
  title: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  required: PropTypes.bool,
  error: PropTypes.bool,
};

Select.defaultProps = {
  required: false,
  error: false,
};
