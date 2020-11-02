import React from 'react';
import styled from 'styled-components';

const TitleWrapper = styled.div`
    width: 300px;
    padding: 10px;
    margin: auto;
    margin-top: 50px;
    text-align: center;
`;

const Title = (props) => {
  const { children } = props;
  return <TitleWrapper><h2>{ children }</h2></TitleWrapper>;
};

export default Title;
