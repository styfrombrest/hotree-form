import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { color, messageBgColor } from './../../consts';

const MessageWrapper = styled.div`
  width: 90%;
  margin: 2em auto;
`;

const MessageElement = styled.div`
  background-color: ${props => messageBgColor[props.type]};
  text-align: left;
  padding: 1em 2em;
`;

const Title = styled.h2`
  font-weight: 600;
  color: ${props => (props.type === 'success' ? color.green : color.red)};
`;

const Message = props => (
  <MessageWrapper>
    <MessageElement className="container pad" type={props.type}>
      <Title type={props.type}>{props.title}</Title>
      <p>{props.children}</p>
    </MessageElement>
  </MessageWrapper>
);

export default Message;

Message.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  type: PropTypes.oneOf(['success', 'error']),
};

Message.defaultProps = {
  type: 'success',
};
