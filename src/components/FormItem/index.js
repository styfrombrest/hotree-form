import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { color } from './../../consts';

const FormItem = styled.div`
  padding: 14px 0 0;
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
  min-width: 120px;
  color: ${color.blue};
  opacity: 0.8;
  margin: 10px 0;
`;

const Body = styled.div`
  float: left;
  width: 78%;
  margin: 10px 0;

  &:after {
    content: "${props => props.afterContent}";
    float: left;
  }
`;

const Emphasize = styled.span`
  color: ${color.red};
`;

const Error = styled(Emphasize)`
  float: left;
  line-height: 28px;
`;

/* Form Item Wrapper */
const Item = props => (
  <FormItem className={props.error ? 'error' : ''}>
    {props.title !== undefined ? (
      <Title>
        {props.title || '\u00A0'}
        {props.title && props.title.length > 0 && props.required ? <Emphasize> *</Emphasize> : ''}
      </Title>
    ) : null}
    <Body afterContent={props.afterContent}>
      {props.children} {props.error ? <Error>Enter correct value</Error> : null}
    </Body>
  </FormItem>
);

export default Item;

Item.propTypes = {
  title: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.array]),
  afterContent: PropTypes.string,
  required: PropTypes.bool,
  error: PropTypes.bool,
};

Item.defaultProps = {
  title: undefined,
  required: false,
  error: false,
};
