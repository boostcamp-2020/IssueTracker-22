import React, {useState, useEffect }from 'react';
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
import CreateComment from './components/CreateComment';
import apiUri from '../../constants/api';

const getData = () => {
  const url = apiUri.detail + document.location.href.split("/")[5];
  const option = {
    mode: 'cors',
    credentials: 'include',
    method: 'GET',
  }
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  async function fetchUrl() {
    const response = await fetch(url, option);
    const json = await response.json();
    setData(json);
    setLoading(false);
  }
  useEffect(() => {
    fetchUrl();
  }, []);
  return [data, loading];
}


const IssueDetailContainer = () => {
  const [data, loading] = getData();
  if(!loading) {
    const issue = data.content.issues[0];
    return <>
      <Header />
      <TitleBox>
        <Title>{ issue }</Title>
        <TitleEditButton />
      </TitleBox>
      <TitleDetail>{ issue }</TitleDetail>
      <IssueContent>
        <List>
          <IssueDetail>{ issue }</IssueDetail>
          {CommentList(issue.comments)}
          <CreateComment data={issue}/>
        </List>
        <Side />
      </IssueContent>
    </>;
  }
  return <>loading...</>;
};


export default IssueDetailContainer;
