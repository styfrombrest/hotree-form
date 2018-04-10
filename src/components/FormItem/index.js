import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { color, flexBasis, minWidthForm } from './../../consts';

const FormItem = styled.div`
  padding: 10px 0 0;
  display: flex;
  flex-basis: ${flexBasis};
  flex-wrap: wrap;
  ::after {
    content: '';
    clear: both;
    display: table;
  }
`;

const Title = styled.div`
  text-transform: uppercase;
  text-align: left;
  flex: 1;
  min-width: 115px;
  color: ${color.blue};
  opacity: 0.8;
  margin: 10px 0;
`;

const Body = styled.div`
  flex: 3;
  display: flex;
  flex-wrap: wrap;
  flex-basis: ${flexBasis};
  min-width: ${minWidthForm};
  margin: 10px 0;
`;

const Emphasize = styled.span`
  color: ${color.red};
`;

const AfterContent = styled.div`
  line-height: 28px;
  margin-right: 15px;
  &&& {
    color: ${color.black};
  }
`;

const Error = styled(Emphasize)`
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
    <Body>
      {props.children}
      {props.afterContent ? <AfterContent>{props.afterContent}</AfterContent> : null}
      {props.error ? <Error>Enter correct value</Error> : null}
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
