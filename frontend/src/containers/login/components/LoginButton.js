import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
    display: block;
    width: 250px;
    color: white;
    background-color: lightgrey;
    font-size: 18px;
    border: none;
    border-radius: 3px;
`;

const LoginButton = (props) => {
  const { onClick } = props;
  return <Button onClick={onClick}>Sign in with GitHub</Button>;
};

export default LoginButton;
