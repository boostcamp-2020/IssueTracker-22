import React from 'react';
import NavBar from '@components/NavBar';
import NewButton from '@components/NewButton';
import useLabels from '@lib/useLabels';
import LabelList from './components/LabelList';

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
