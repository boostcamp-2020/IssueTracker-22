import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledLink = styled(Link)`
    background-color: white;
    padding: 5px 16px;
    border: 1px lightgrey solid;
    margin: 10px;

    &:visited  {
        color: black;
    }
`;

const ContentWrapper = styled.div`
    display: inline-flex;
`;

const IconWrapper = styled.div`
    display: box;
    margin: 0px 5px;
`;

const Counter = styled.div`
    background-color: rgba(209, 213, 218, 0.5);
    border: 1px solid transparent;
    margin: 0px 5px;
    padding: 0px 6px;
    border-radius: 50%;
`;

const LinkButton = ({
  text, path, Icon, count,
}) => (
  <StyledLink to={path}>
    <ContentWrapper>
      <IconWrapper>
        <Icon/>
      </IconWrapper>
      {text}
      <Counter>
        {count || 0}
      </Counter>
    </ContentWrapper>
  </StyledLink>
);

export default LinkButton;
