import styled from 'styled-components';
import getRelativeTime from '../../../lib/relativeTime'
import React, { Component } from 'react';

const IssueLowerBox = styled.div`
        font-size: 12px; 
        color: #586069;
        margin: 4px 0px 0px
    `;

const renderIssueLowerBox = (issue) => {
    const content = `#${issue.id} opened ${getRelativeTime(issue.updatedAt)}`

    return (
        <IssueLowerBox>
            <span class="opened-by">
                {content}
            </span>
        </IssueLowerBox>
    )
}



export default renderIssueLowerBox;