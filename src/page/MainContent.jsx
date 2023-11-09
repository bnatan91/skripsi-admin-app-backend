import { useState } from 'react';
import ListForm from '../components/ListForm';
import Modal from '../components/Modal';
import Instruction from '../components/Instruction';

function MainContent({ isTrue, Major }) {
  const [modal, setModal] = useState(false);
  const [value, setValue] = useState([]);
  const modalHandler = (data) => {
    setModal(data);
  };

  const submitHandler = (data) => {
    setValue(data);
  };

  const backHandler = (data) => {
    setModal(data);
  };

  return (
    <>
      <div id="content" className="w-full">
        <div className="mb-4">
          <Instruction />
        </div>
        <br />
        <div>
          <ListForm
            onModal={modalHandler}
            onValue={submitHandler}
            isTrue={isTrue}
            Major={Major}
          />
        </div>
      </div>
      {modal === false ? '' : <Modal onBack={backHandler} onSubmit={value} />}
    </>
  );
}
export default MainContent;
