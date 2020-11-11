import React from 'react';
import LabelList from './components/LabelList';
import useLabels from '../../lib/useLabels';
import NavBar from '../../components/NavBar';
import NewButton from '../../components/NewButton';

const LabelContainer = () => {
  const labels = useLabels();
  return (
    <>
      <NavBar/>
      <NewButton>New label</NewButton>
      <LabelList labels={labels}/>
    </>
  );
};

export default LabelContainer;
