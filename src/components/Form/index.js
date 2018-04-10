import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { color, minWidthForm } from './../../consts';

const FormItem = styled.div`
  && {
    margin-top: 20px;
  }
  background-color: ${color.white};
  padding: 10px 20px;
  min-width: ${minWidthForm};

  .error div,
  .error input,
  .error textarea {
    color: ${color.red};
    border-color: ${color.red};
  }
`;

const Title = styled.h2`
  color: ${color.blue};
  font-weight: 400;
  text-align: left;
  border-bottom: 1px solid ${color.silver};
  padding: 10px 0 10px;
`;

const Form = props => (
  <FormItem className="container pad">
    <Title>{props.title}</Title>
    {props.children}
  </FormItem>
);

export default Form;

Form.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.array]),
};
