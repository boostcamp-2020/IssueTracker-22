import React, { Component } from 'react';
import styled from 'styled-components';
import IssueToolbar from './components/IssueToolbar';
import IssueList from './components/IssueList';
import ToolButtons from './components/ToolButtons';
import useLabels from '../../lib/useLabels';

const IssueContainer = styled.div`
    max-width: 1280px;
    border: 1px solid #eaecef;
    border-radius: 6px;
`;

const dummy = {
  success: true,
  content: {
    issues: [
      {
        id: 1,
        title: 'bkyo',
        description: 'prac',
        createdAt: '2020-11-02T15:30:00.000Z',
        updatedAt: '2020-11-02T15:30:00.000Z',
        user: {
          id: 1,
          nickname: 'bk',
        },
        issue_labels: [
          {
            id: 1,
            label: {
              id: 1,
              name: 'feature',
              color_code: null,
            },
          },
          {
            id: 3,
            label: {
              id: 1,
              name: 'feature',
              color_code: null,
            },
          },
        ],
        issue_assignees: [
          {
            id: 1,
            user: {
              nickname: 'bk',
            },
          },
        ],
        milestone: null,
      },
      {
        id: 2,
        title: 'bbbk',
        description: 'bbbk',
        createdAt: '2020-11-03T11:11:11.000Z',
        updatedAt: '2020-11-03T11:11:11.000Z',
        user: {
          id: 1,
          nickname: 'bk',
        },
        issue_labels: [
          {
            id: 2,
            label: {
              id: 1,
              name: 'feature',
              color_code: null,
            },
          },
        ],
        issue_assignees: [],
        milestone: 1,
      },
    ],
  },
};

const Issue = (props) => {
  const lables = useLabels();

  return (
    <IssueContainer>
      <ToolButtons labels={lables}/>
      <IssueToolbar data={dummy}/>
      <IssueList data={dummy}/>
    </IssueContainer>
  );
};

export default Issue;
