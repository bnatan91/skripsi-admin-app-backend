import React, { useState } from 'react';
import ListForm from '../components/ListForm';
import Modal from '../components/Modal';
import Intro from '../components/Intro';
import Intruction from '../components/Intruction';

function MainPage() {
  const [modal, setModal] = useState(false);
  const [intro, setIntro] = useState(true);
  const [value, setValue] = useState([]);
  const modalHandler = (data) => {
    setModal(data);
  };

  const submitHandler = (data) => {
    // console.log(data);
    setValue(data);
  };

  const backHandler = (data) => {
    setModal(data);
  };

  const introHandler = (data) => {
    setIntro(data);
  };

  return (
    <>
      {intro ? <Intro onIntro={introHandler} /> : ''}
      <div className="flex flex-col justify-center items-center w-screen">
        <Intruction />
        <br />
        <ListForm onModal={modalHandler} onValue={submitHandler} />
      </div>
      {modal === false ? '' : <Modal onBack={backHandler} onSubmit={value} />}
    </>
  );
}

export default MainPage;
