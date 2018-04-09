import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { color } from './../../consts';

import FormItem from './../FormItem';

const SelectWrapper = styled.div`
  margin: auto 1em;
  width: 100%;
  float: left;
`;

const SelectItem = styled.select`
  float: left;
  width: 100%;
`;

const SelectHint = styled.div`
  color: ${color.silver};
  text-align: left;
  font-size: 0.75em;
  font-style: italic;
  float: left;
`;

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
      title, error, required, placeholder, list, hint,
    } = this.props;
    const { value } = this.state;

    const listView = list.map(item => (
      <option key={item.id} value={item.id}>
        {item.name}
      </option>
    ));

    return (
      <FormItem title={title} error={error} required={required}>
        <SelectWrapper>
          <SelectItem defaultValue="default">
            <option disabled value="default">
              {placeholder}
            </option>
            {listView}
          </SelectItem>
          <SelectHint>{hint}</SelectHint>
        </SelectWrapper>
      </FormItem>
    );
  }
}

export default Select;

Select.propTypes = {
  title: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  hint: PropTypes.string,
  list: PropTypes.arrayOf(PropTypes.object),
  required: PropTypes.bool,
  error: PropTypes.bool,
};

Select.defaultProps = {
  required: false,
  error: false,
};
