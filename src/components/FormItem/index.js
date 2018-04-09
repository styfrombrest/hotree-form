import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { color } from './../../consts';

const FormItem = styled.div`
  padding: 1.5em 0;
  ::after {
    content: '';
    clear: both;
    display: table;
  }
`;

const Title = styled.div`
  text-transform: uppercase;
  text-align: left;
  float: left;
  width: 18%;
  min-width: 135px;
  color: ${color.blue};
  opacity: 0.7;
`;

const Body = styled.div`
  float: left;
  width: 60%;

  &:after {
    content: "${props => props.afterContent}";
    float: left;
  }
`;

const Emphasize = styled.span`
  color: ${color.red};
`;

const Error = styled(Emphasize)`
  float: right;
`;

/* Form Item Wrapper */
const Item = props => (
  <FormItem className={props.error ? 'error' : ''}>
    <Title>
      {props.title}
      {props.required ? <Emphasize> *</Emphasize> : ''}
    </Title>
    <Body afterContent={props.afterContent}>{props.children}</Body>

    {props.error ? <Error>Enter correct value</Error> : null}
  </FormItem>
);

export default Item;

Item.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.array]),
  afterContent: PropTypes.string,
  required: PropTypes.bool,
  error: PropTypes.bool,
};

Item.defaultProps = {
  required: false,
  error: false,
};
