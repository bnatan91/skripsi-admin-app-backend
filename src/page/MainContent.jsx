import React, { useState } from 'react';
import ListForm from '../components/ListForm';
import Intro from '../components/Intro';
import Modal from '../components/Modal';
import Instruction from '../components/Instruction';

function MainContent() {
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
      {/* {intro ? <Intro onIntro={introHandler} /> : ''} */}
      <div id="content" className="w-full">
        <div className="mb-4">
          <Instruction />
        </div>
        <br />
        <div>
          <ListForm onModal={modalHandler} onValue={submitHandler} />
        </div>
      </div>
      {modal === false ? '' : <Modal onBack={backHandler} onSubmit={value} />}
    </>
  );
}
export default MainContent;
