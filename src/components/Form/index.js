import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { formShadow, color } from './../../consts';

const Form = styled.div`
  && {
    margin-top: 2em;
  }
  background-color: ${color.white};
  border-radius: 3px;
  box-shadow: 0 0 5px ${formShadow};
  padding: 1em 2em;

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
  padding: 0.5em 0 0.5em;
`;

const FormElement = props => (
  <Form className="container">
    <Title>{props.title}</Title>
    {props.children}
  </Form>
);

export default FormElement;

FormElement.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.array]),
};
