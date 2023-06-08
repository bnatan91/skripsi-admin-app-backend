import React, { useState } from 'react';
import ListForm from '../components/ListForm';
import Modal from '../components/Modal';

function MainPage() {
  const [modal, setModal] = useState(false);
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

  return (
    <>
      <div className="flex justify-center items-center w-screen">
        <ListForm onModal={modalHandler} onValue={submitHandler} />
      </div>
      {modal === false ? '' : <Modal onBack={backHandler} onSubmit={value} />}
    </>
  );
}

export default MainPage;
