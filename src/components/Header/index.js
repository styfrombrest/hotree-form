import React from 'react';
import styled from 'styled-components';
import { headerWidth, headerBgColor, headerBorderColor, color } from './../../consts';

const Header = styled.header`
  background-color: ${headerBgColor};
  border-top: 1em solid ${headerBorderColor};
  height: ${headerWidth};
  box-sizing: content-box;
  text-align: left;
`;

const Title = styled.h1`
  line-height: ${headerWidth};
  padding-left: 2em;
  font-weight: 300;
  color: ${color.white};
`;

export default () => (
  <Header>
    <div className="container">
      <Title>New Event</Title>
    </div>
  </Header>
);
