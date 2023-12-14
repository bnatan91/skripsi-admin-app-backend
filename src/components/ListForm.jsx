/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import Form from './Form';

let finalValue = [];

const matrix = (data, major) => {
  const valueArr = [];
  const checkedTArr = [];
  const checkedSArr = [];
  data.map((subject, index) => {
    console.log(subject);
    valueArr.push({
      id: index + 1,
      value: subject.value,
    });
    checkedTArr.push({
      id: index + 1,
      checkedT: subject.checkedT,
    });
    checkedSArr.push({
      id: index + 1,
      checkedS: subject.checkedS,
    });
  });
  normalizeMatrix(data, major, valueArr, checkedTArr, checkedSArr);
};

const normalizeMatrix = (data, major, valueArr, checkedTArr, checkedSArr) => {
  const sortValue = valueArr.sort((a, b) => b.value - a.value);
  const sortCheckedT = checkedTArr.sort((a, b) => b.checkedT - a.checkedT);
  const sortCheckedS = checkedSArr.sort((a, b) => b.checkedS - a.checkedS);
  calculationMatrix(data, major, sortValue, sortCheckedT, sortCheckedS);
};

const calculationMatrix = (data, major, value, checkedT, checkedS) => {
  const maxValue = value[0];
  const maxCheckedT = checkedT[0];
  const maxCheckedS = checkedS[0];
  let wsmValue = [];
  let wpmValue = [];
  const sortIdValue = value.sort((a, b) => a.id - b.id);
  const sortIdCheckedT = checkedT.sort((a, b) => a.id - b.id);
  const sortIdCheckedS = checkedS.sort((a, b) => a.id - b.id);

  switch (major.category) {
    case 'IPA':
      {
        for (let i = 0; i < data.length; i++) {
          if (data[i].category === 'IPA') {
            wsmValue.push(
              (sortIdValue[i].value / maxValue.value) * 0.3 +
                (1 / 1) * 0.3 +
                (sortIdCheckedT[i].checkedT / maxCheckedT.checkedT) * 0.2 +
                (sortIdCheckedS[i].checkedS / maxCheckedS.checkedS) * 0.2,
            );
            wpmValue.push(
              Math.pow(sortIdValue[i].value / maxValue.value, 0.3) *
                Math.pow(1 / 1, 0.3) *
                Math.pow(
                  sortIdCheckedT[i].checkedT / maxCheckedT.checkedT,
                  0.2,
                ) *
                Math.pow(
                  sortIdCheckedS[i].checkedS / maxCheckedS.checkedS,
                  0.2,
                ),
            );
          } else {
            wsmValue.push(
              (sortIdValue[i].value / maxValue.value) * 0.3 +
                (0.5 / 1) * 0.3 +
                (sortIdCheckedT[i].checkedT / maxCheckedT.checkedT) * 0.2 +
                (sortIdCheckedS[i].checkedS / maxCheckedS.checkedS) * 0.2,
            );
            wpmValue.push(
              Math.pow(sortIdValue[i].value / maxValue.value, 0.3) *
                Math.pow(0.5 / 1, 0.3) *
                Math.pow(
                  sortIdCheckedT[i].checkedT / maxCheckedT.checkedT,
                  0.2,
                ) *
                Math.pow(
                  sortIdCheckedS[i].checkedS / maxCheckedS.checkedS,
                  0.2,
                ),
            );
          }
        }
      }
      break;
    case 'IPS':
      {
        for (let i = 0; i < data.length; i++) {
          if (data[i].category === 'IPS') {
            wsmValue.push(
              (sortIdValue[i].value / maxValue.value) * 0.3 +
                (1 / 1) * 0.3 +
                (sortIdCheckedT[i].checkedT / maxCheckedT.checkedT) * 0.2 +
                (sortIdCheckedS[i].checkedS / maxCheckedS.checkedS) * 0.2,
            );
            wpmValue.push(
              Math.pow(sortIdValue[i].value / maxValue.value, 0.3) *
                Math.pow(1 / 1, 0.3) *
                Math.pow(
                  sortIdCheckedT[i].checkedT / maxCheckedT.checkedT,
                  0.2,
                ) *
                Math.pow(
                  sortIdCheckedS[i].checkedS / maxCheckedS.checkedS,
                  0.2,
                ),
            );
          } else {
            wsmValue.push(
              (sortIdValue[i].value / maxValue.value) * 0.3 +
                (0.5 / 1) * 0.3 +
                (sortIdCheckedT[i].checkedT / maxCheckedT.checkedT) * 0.2 +
                (sortIdCheckedS[i].checkedS / maxCheckedS.checkedS) * 0.2,
            );
            wpmValue.push(
              Math.pow(sortIdValue[i].value / maxValue.value, 0.3) *
                Math.pow(0.5 / 1, 0.3) *
                Math.pow(
                  sortIdCheckedT[i].checkedT / maxCheckedT.checkedT,
                  0.2,
                ) *
                Math.pow(
                  sortIdCheckedS[i].checkedS / maxCheckedS.checkedS,
                  0.2,
                ),
            );
          }
        }
      }
      break;

    default:
      break;
  }
  console.log(maxValue);
  data.map((subject, index) => {
    finalValue.push({
      id: index + 1,
      name: subject.name,
      value: 0.5 * wsmValue[index] + 0.5 * wpmValue[index],
    });
  });
};

function ListForm({ onValue, onModal, isTrue, Major }) {
  const [inputSubject, setInputSubject] = useState([]);
  const [inputMajor, setInputMajor] = useState('');
  const [value, setValue] = useState([]);
  const submitHandler = (data) => {
    setInputSubject(data);
  };

  const submitMajorHandler = (data) => {
    setInputMajor(data);
  };

  useEffect(() => {
    matrix(inputSubject, inputMajor);
    setValue(finalValue);
    finalValue = [];
  }, [inputSubject, inputMajor]);

  useEffect(() => {
    onValue(value);
  }, [value, onValue]);

  const modalHandler = (data) => {
    onModal(data);
  };
  return (
    <div
      id="listForm"
      className="mx-[2rem] lg:mx-[6rem] bg-[#1e293b] border border-gray-700 rounded-lg p-8 md:p-12"
    >
      <Form
        onSubmit={submitHandler}
        onSubmitMajor={submitMajorHandler}
        onModal={modalHandler}
        isTrue={isTrue}
        Major={Major}
      />
    </div>
  );
}

export default ListForm;
