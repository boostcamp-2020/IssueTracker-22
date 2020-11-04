import styled from 'styled-components';
import React, { Component } from 'react';

const Label = styled.div`
        display: inline-block;
        padding: 0 7px;
        font-size: 12px;
        font-weight: 500;
        line-height: 18px;
        border: 1px solid transparent;
        border-radius: 2em; 
        width:fit-content;
        margin: 2px;
    `;
const renderLabels = (labels) => {
    return labels.map((label, i)=>{
        return (<Label style={{backgroundColor:"lightblue"}}>{label.label.name}</Label>);
    });
};

export default renderLabels;