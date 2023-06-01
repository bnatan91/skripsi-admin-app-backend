import React, { useEffect, useState } from 'react';
import Form from './Form';

const normalizeValue = (data) => {
  console.log(data);
};

function ListForm(props) {
  const [inputSubject, setInputSubject] = useState('');
  const submitHandler = (data) => {
    setInputSubject(data);
  };

  const submitValue = () => {
    normalizeValue(inputSubject);
    props.onSubmit(inputSubject);
  };

  const modalHandler = (data) => {
    // console.log(data);
    props.onModal(data);
  };
  //   console.log(inputSubject);
  submitValue();
  return (
    <div>
      <Form onSubmit={submitHandler} onModal={modalHandler} />
    </div>
  );
}

export default ListForm;
