import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledLink = styled(Link)`
    background-color: ${(props) => (props.active ? '#0366d6' : 'white')};
    color: ${(props) => (props.active ? 'white' : 'black')};
    padding: 8px 16px;
    border: 1px lightgrey solid;
    border-radius: 5px;

    &:visited  {
        color: ${(props) => (props.active ? 'white' : 'black')};
    }

    &:hover {
        background-color: ${(props) => (props.active ? '#0366d6' : 'rgba(225, 228, 232, 0.5)')};
    }
`;

const ContentWrapper = styled.div`
    display: inline-flex;
    align-items: center;
`;

const IconWrapper = styled.div`
    display: box;
    margin-right: 5px;
`;

const Counter = styled.div`
    background-color: rgba(209, 213, 218, 0.5);
    border: 1px solid transparent;
    margin: 0px 5px;
    padding: 0px 6px;
    border-radius: 50%;
`;

const LinkButton = ({
  text, path, Icon, count, active,
}) => (
  <StyledLink to={path} active={active}>
    <ContentWrapper>
      <IconWrapper>
        <Icon active={active}/>
      </IconWrapper>
      {text}
      { (count || count === 0) && (
        <Counter>
            {count}
        </Counter>
      )}
    </ContentWrapper>
  </StyledLink>
);

export default LinkButton;
