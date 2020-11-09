import React from 'react';
import Header from '../../components/Header';
import Title from './components/Title';
import TitleBox from './components/TitleBox';
import TitleEditButton from './components/TitleEditButton';
import TitleDetail from './components/TitleDetail';
import IssueContent from './components/IssueContent';
import List from './components/List';
import IssueDetail from './components/IssueDetail';
import CommentList from './components/CommentList';
import Side from './components/Side';

const dummy = {
  success: true,
  issues: [
    {
      id: 1,
      title: 'bkyo',
      description: 'prac',
      is_open: 1,
      createdAt: '2020-11-02T15:30:00.000Z',
      updatedAt: '2020-11-02T15:30:00.000Z',
      user: {
        id: 1,
        nickname: 'bk',
        profile_url: 'https://avatars2.githubusercontent.com/u/37496919?v=4',
      },
      comments: [
        {
          id: 1,
          description: 'For test',
          author_id: 3,
          createdAt: '2020-10-02T15:30:00.000Z',
          updatedAt: '2020-10-04T15:30:00.000Z',
          user: {
            id: 3,
            nickname: 'YimJiYoung',
            profile_url: 'https://avatars2.githubusercontent.com/u/37496919?v=4',
          },
        },
        {
          id: 2,
          description: 'For test2',
          author_id: 3,
          createdAt: '2020-10-02T15:30:00.000Z',
          updatedAt: '2020-10-04T15:30:00.000Z',
          user: {
            id: 3,
            nickname: 'BKBKBK',
            profile_url: 'https://avatars2.githubusercontent.com/u/37496919?v=4',
          },
        },
      ],
      milestone: {
        id: 1,
        title: 'week1',
      },
      issue_labels: [
        {
          id: 1,
          label: {
            id: 1,
            name: 'feature',
            color_code: '#7DCDA0',
          },
        },
        {
          id: 3,
          label: {
            id: 1,
            name: 'feature',
            color_code: '#7DCDA0',
          },
        },
      ],
      issue_assignees: [
        {
          id: 1,
          user: {
            id: 1,
            nickname: 'bk',
            profile_url: null,
          },
        },
      ],
    },
  ],
};

const IssueDetailContainer = () => (
  <>
    <Header />
    <TitleBox>
      <Title>{ dummy.issues[0] }</Title>
      <TitleEditButton />
    </TitleBox>
    <TitleDetail>{ dummy.issues[0] }</TitleDetail>
    <IssueContent>
      <List>
        <IssueDetail>{ dummy.issues[0] }</IssueDetail>
        {CommentList(dummy.issues[0].comments)}
      </List>
      <Side />
    </IssueContent>
  </>
);

export default IssueDetailContainer;
