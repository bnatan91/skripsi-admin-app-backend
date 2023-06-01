import React, { useState } from 'react';
import ListForm from '../components/ListForm';
import Modal from '../components/Modal';

function MainPage() {
  const [modal, setModal] = useState(false);
  const modalHandler = (data) => {
    setModal(data);
  };

  const submitHandler = (data) => {
    // console.log(data);
  };

  const backHandler = (data) => {
    setModal(data);
  };

  return (
    <div>
      <ListForm onModal={modalHandler} onSubmit={submitHandler} />
      {modal === false ? '' : <Modal onBack={backHandler} />}
    </div>
  );
}

export default MainPage;
