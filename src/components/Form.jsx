import { isEmpty, filter } from 'lodash';
import React, { useEffect, useState } from 'react';

const listSubjects = [
  {
    id: 1,
    name: 'subject 1',
    value: 0,
    checked: 0.5,
  },
  {
    id: 3,
    name: 'subject 2',
    value: 0,
    checked: 0.5,
  },
  {
    id: 5,
    name: 'subject 3',
    value: 0,
    checked: 0.5,
  },
];

function Form(props) {
  const [inputSubject, setInputSubject] = useState([]);
  const [newArr, setNewArr] = useState([]);

  useEffect(() => {
    setNewArr(listSubjects);
  }, []);

  const newData = (index, value, subject) => {
    let filterData = newArr.filter((item) => item.id !== subject.id);
    let body = {
      id: subject.id,
      name: subject?.name,
      value: value,
      checked: subject.checked,
    };
    filterData.push(body);
    filterData.sort((a, b) => a.id - b.id);
    setNewArr(filterData);
  };

  const newCheckedValue = (index, checked, subject) => {
    let filterData = newArr.filter((item) => item.id !== subject.id);
    let body = {
      id: subject.id,
      name: subject?.name,
      value: subject.value,
      checked: checked === true ? 1 : 0.5,
    };
    filterData.push(body);
    filterData.sort((a, b) => a.id - b.id);
    setNewArr(filterData);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    props.onModal(true);
    props.onSubmit(newArr);
  };

  return (
    <div>
      <form onSubmit={onSubmitHandler}>
        <div>
          <div>
            <label>Nilai Psikolog</label>
            <input type="text" />
          </div>
          <div>
            <label>Nilai Psikologi</label>
            <input type="text" />
          </div>
          <div>
            {newArr.map((subject, index) => (
              <div key={index}>
                <div>
                  <label>{subject.name}</label>
                  <input
                    type="number"
                    onChange={(e) => {
                      newData(index, e.target.value, subject);
                    }}
                  />
                </div>
                <div>
                  <label>Rekomendasi Guru</label>
                  <input
                    type="checkbox"
                    onChange={(e) => {
                      newCheckedValue(index, e.target.checked, subject);
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
          <div>
            <button type="submit">
              <p>submit</p>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Form;
