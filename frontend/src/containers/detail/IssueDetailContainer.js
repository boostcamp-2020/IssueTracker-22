import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import Title from './components/Title';
import TitleDetail from './components/TitleDetail';
import IssueContent from './components/IssueContent';
import List from './components/List';
import IssueDetail from './components/IssueDetail';
import CommentList from './components/CommentList';
import Side from './components/Side';
import CreateComment from './components/CreateComment';
import apiUri from '../../constants/api';
import userContext from '../../lib/userContext';

const IssueDetailContainer = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const user = useContext(userContext);

  const getData = () => {
    const url = apiUri.detail + document.location.href.split('/')[5];
    const option = {
      mode: 'cors',
      credentials: 'include',
      method: 'GET',
    };
    async function fetchUrl() {
      const response = await fetch(url, option);
      const json = await response.json();
      setData({ ...json.content.issues[0] });
      setLoading(false);
    }
    useEffect(() => {
      fetchUrl();
    }, []);
  };

  const addComment = (description) => {
    if (user !== null) {
      const comment = {
        id: data.comments.length + 1,
        author_id: user.id,
        createdAt: new Date(),
        description,
        user: {
          id: user.id,
          nickname: user.nickname,
          profile_url: user.profile_url,
        },
      };
      const comments = data.comments.concat(comment);
      setData({ ...data, comments });
    }
  };

  getData();
  if (!loading) {
    return (
      <>
        <Title>{ data }</Title>
        <TitleDetail>{ data }</TitleDetail>
        <IssueContent>
          <List>
            <IssueDetail>{ data }</IssueDetail>
            {CommentList(data.comments)}
            <CreateComment data={data} callback={addComment} user={user}/>
          </List>
          <Side data={data}/>
        </IssueContent>
      </>
    );
  }
  return <>loading...</>;
};

export default IssueDetailContainer;
