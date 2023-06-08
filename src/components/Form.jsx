import React, { useEffect, useState } from 'react';

const listSubjects = [
  {
    id: 1,
    name: 'Matematika Peminatan',
    category: 'IPA',
    value: 0,
    checkedT: 0.5,
    checkedS: 0.5,
  },
  {
    id: 2,
    name: 'Kimia',
    category: 'IPA',
    value: 0,
    checkedT: 0.5,
    checkedS: 0.5,
  },
  {
    id: 3,
    name: 'Fisika',
    category: 'IPA',
    value: 0,
    checkedT: 0.5,
    checkedS: 0.5,
  },
  {
    id: 4,
    name: 'Biologi',
    category: 'IPA',
    value: 0,
    checkedT: 0.5,
    checkedS: 0.5,
  },
  {
    id: 5,
    name: 'Informatika',
    category: 'IPA',
    value: 0,
    checkedT: 0.5,
    checkedS: 0.5,
  },
  {
    id: 6,
    name: 'Ekonomi',
    category: 'IPS',
    value: 0,
    checkedT: 0.5,
    checkedS: 0.5,
  },
  {
    id: 7,
    name: 'Sosiologi',
    category: 'IPS',
    value: 0,
    checkedT: 0.5,
    checkedS: 0.5,
  },
  {
    id: 8,
    name: 'Geografi',
    category: 'IPS',
    value: 0,
    checkedT: 0.5,
    checkedS: 0.5,
  },
  {
    id: 9,
    name: 'Bahasa Inggris lanjutan',
    category: 'BAHASA',
    value: 0,
    checkedT: 0.5,
    checkedS: 0.5,
  },
  {
    id: 10,
    name: 'Bahasa Indonesia lanjutan',
    category: 'BAHASA',
    value: 0,
    checkedT: 0.5,
    checkedS: 0.5,
  },
];

const listMajor = [
  {
    id: 1,
    name: 'Seni dan Design',
    category: 'IPA',
  },
  {
    id: 2,
    name: 'Teknologi Informasi',
    category: 'IPA',
  },
  {
    id: 3,
    name: 'Psikologi',
    category: 'IPS',
  },
  {
    id: 4,
    name: 'MIPA',
    category: 'IPA',
  },
  {
    id: 5,
    name: 'Perhotelan dan Pariwisata',
    category: 'IPS',
  },
];

function Form(props) {
  const [inputSubject, setInputSubject] = useState([]);
  const [newArr, setNewArr] = useState([]);
  const [major, setMajor] = useState(listMajor[0]);
  const [selectMajor, setSelectMajor] = useState([]);

  useEffect(() => {
    setNewArr(listSubjects);
    setSelectMajor(listMajor);
  }, []);

  const newData = (index, value, subject) => {
    let filterData = newArr.filter((item) => item.id !== subject.id);
    let body = {
      id: index + 1,
      name: subject?.name,
      value: value,
      category: subject.category,
      checkedT: subject.checkedT,
      checkedS: subject.checkedS,
    };
    filterData.push(body);
    filterData.sort((a, b) => a.id - b.id);
    setNewArr(filterData);
  };

  const newCheckedValueT = (index, checked, subject) => {
    let filterData = newArr.filter((item) => item.id !== subject.id);
    let body = {
      id: subject.id,
      name: subject?.name,
      value: subject.value,
      category: subject.category,
      checkedT: checked === true ? 1 : 0.5,
      checkedS: subject.checkedS,
    };
    filterData.push(body);
    filterData.sort((a, b) => a.id - b.id);
    setNewArr(filterData);
  };

  const newCheckedValueS = (index, checked, subject) => {
    let filterData = newArr.filter((item) => item.id !== subject.id);
    let body = {
      id: subject.id,
      name: subject?.name,
      value: subject.value,
      category: subject.category,
      checkedT: subject.checkedT,
      checkedS: checked === true ? 1 : 0.5,
    };
    filterData.push(body);
    filterData.sort((a, b) => a.id - b.id);
    setNewArr(filterData);
  };

  const majorSelectedHandler = (e) => {
    const selectedMajor = e.target.value;
    for (let i = 0; i < selectMajor.length; i++) {
      if (selectMajor[i].name === selectedMajor) {
        setMajor(selectMajor[i]);
      }
    }
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    props.onSubmitMajor(major);
    props.onModal(true);
    props.onSubmit(newArr);
  };

  return (
    <div>
      <form onSubmit={onSubmitHandler}>
        <div className="flex flex-col md:w-full">
          <div className="flex justify-center mx-2 mt-2 md: mx-0">
            <div className="flex flex-col my-4">
              <label className="ml-6">Pilih Jurusan</label>
              <select
                className="rounded my-2 w-32"
                id="major"
                onChange={majorSelectedHandler}
              >
                {selectMajor.map((major, index) => (
                  <option
                    className="rounded"
                    key={index + 1}
                    value={major.name}
                  >
                    {major.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="flex flex-col mx-2 md:mx-8">
            {newArr.map((subject, index) => (
              <div
                key={index}
                className="flex  flex-col  md:flex-row mr-0 ml-0 md:ml-4 lg:ml-14  xl:ml-20"
              >
                <div className="flex flex-col ">
                  <label className="ml-4">
                    {index + 1}. {subject.name}
                  </label>
                  <input
                    className="my-2 ml-6 w-4/5 rounded"
                    type="number"
                    onChange={(e) => {
                      newData(index, e.target.value, subject);
                    }}
                  />
                </div>
                <div>
                  <div className="ml-8 my-2 md:mt-8 ml-4">
                    <label>Rekomendasi Guru</label>
                    <input
                      className="ml-[42.5px]"
                      type="checkbox"
                      onChange={(e) => {
                        newCheckedValueT(index, e.target.checked, subject);
                      }}
                    />
                  </div>
                  <div className="ml-8 my-2 md:mt-8 ml-4">
                    <label>Pelajaran yang Disukai</label>
                    <input
                      className="ml-4"
                      type="checkbox"
                      onChange={(e) => {
                        newCheckedValueS(index, e.target.checked, subject);
                      }}
                    />
                  </div>
                  <br />
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-end my-10 mx-2 mr-10 ">
            <button
              className="border-2 bg-[#7B287D] text-slate-200 rounded-lg"
              type="submit"
            >
              <p className="mx-2 my-1">submit</p>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Form;
