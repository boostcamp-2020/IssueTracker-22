import React from 'react';
import styled from 'styled-components';

const TitleStyle = styled.div`
  box-sizing: border-box;
  font-weight: 400;
  line-height: 1.25;
  font-size: 32px;
  margin: .67em 0;  
  font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji;

`;

const IdStyle = styled.div`
  font-size: 32px;
  font-weight: 300;
  color: #6a737d;
  box-sizing: border-box;
  margin-right: 150px;
  line-height: 1.25;
  margin-left: 10px;
  font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji;
`;

const Title = (data) => {
  const { children } = data;
  return <>
  <TitleStyle>{ children.title }</TitleStyle>
  <IdStyle>#{ children.id }</IdStyle>
  </>;
};

export default Title;
