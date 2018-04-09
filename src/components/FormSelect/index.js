import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { color, dataFieldPropType } from './../../consts';

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

const Select = (props) => {
  const {
    title, required, placeholder, list, hint, data, defaultValue,
  } = props;

  const handleChange = (event) => {
    props.setData(props.name, Number.isInteger(+event.target.value) ? +event.target.value : event.target.value);
  };

  const listView = list.map(item => (
    <option key={item.id} value={item.id}>
      {item.name}
    </option>
  ));

  return (
    <FormItem title={title} required={required}>
      <SelectWrapper>
        <SelectItem value={data.value || defaultValue} onChange={handleChange}>
          <option disabled value="default">
            {placeholder}
          </option>
          {listView}
        </SelectItem>
        <SelectHint>{hint}</SelectHint>
      </SelectWrapper>
    </FormItem>
  );
};

export default Select;

Select.propTypes = {
  title: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  data: dataFieldPropType,
  setData: PropTypes.func.isRequired,
  hint: PropTypes.string,
  list: PropTypes.arrayOf(PropTypes.object),
  required: PropTypes.bool,
  defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Select.defaultProps = {
  required: false,
  defaultValue: 'default',
};
