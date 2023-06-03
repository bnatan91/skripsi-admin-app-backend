import React, { useEffect, useState } from 'react';
import Form from './Form';

const matrix = (data) => {
  // console.log(data);
  const valueArr = [];
  const checkedArr = [];
  data.map((subject, index) => {
    console.log(subject.value);
    valueArr.push({
      id: index + 1,
      value: subject.value,
    });
    checkedArr.push({
      id: index + 1,
      checked: subject.checked,
    });
  });
  normalizeMatrix(data, valueArr, checkedArr);
};

const normalizeMatrix = (data, valueArr, checkedArr) => {
  // console.log(data, valueArr, checkedArr);
  const sortValue = valueArr.sort((a, b) => b.value - a.value);
  const sortChecked = checkedArr.sort((a, b) => b.checked - a.checked);
  // console.log(sortValue, sortChecked);
  calculationMatrix(data, sortValue, sortChecked);
};

const calculationMatrix = (data, value, checked) => {
  console.log(data, value, checked);
};

function ListForm(props) {
  const [inputSubject, setInputSubject] = useState([]);
  const submitHandler = (data) => {
    setInputSubject(data);
  };

  matrix(inputSubject);
  const submitValue = () => {
    props.onSubmit(inputSubject);
  };

  const modalHandler = (data) => {
    // console.log(data);
    props.onModal(data);
  };
  //   console.log(inputSubject);
  return (
    <div>
      <Form onSubmit={submitHandler} onModal={modalHandler} />
    </div>
  );
}

export default ListForm;
