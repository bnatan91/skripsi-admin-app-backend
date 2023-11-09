/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import { Input, Checkbox, Button } from '@material-tailwind/react';
import axios from 'axios';

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

function Form({ onSubmitMajor, onModal, onSubmit, isTrue, Major }) {
  const [newArr, setNewArr] = useState([]);
  const [major, setMajor] = useState(listMajor[0]);
  const [selectMajor, setSelectMajor] = useState([]);

  useEffect(() => {
    if (isTrue === false) {
      setNewArr(listSubjects);
      setSelectMajor(listMajor);
    } else {
      getSubjects();
      setSelectMajor(Major);
    }
  }, [isTrue, Major]);

  const getSubjects = async () => {
    const response = await axios.get(`/api/test/subjects`);
    setNewArr(response.data);
  };

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
    onSubmitMajor(major);
    onModal(true);
    onSubmit(newArr);
  };

  return (
    <>
      <form
        className="flex flex-col justify-center items-center p-4 my-4 text-white"
        onSubmit={onSubmitHandler}
      >
        <div className="flex flex-col justify-center w-[13rem]  rounded-lg">
          <label
            htmlFor="major"
            className="block mb-2 text-sm font-medium text-white"
          >
            Pilih Jurusan
          </label>
          <select
            id="major"
            className="border text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-transparent border-gray-300 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
            onChange={majorSelectedHandler}
          >
            {selectMajor.map((major, index) => {
              return (
                <option
                  className="bg-[#020617]"
                  key={index + 1}
                  value={major.name}
                >
                  {major.name}
                </option>
              );
            })}
          </select>
        </div>
        <br />
        <div className="flex flex-col md:p-4 md:px-10">
          {newArr.map((subject, index) => (
            <div key={index} className="flex flex-col md:flex-row lg:my-4">
              <div className="md:mr-20 lg:mr-[5rem]">
                <Input
                  color="white"
                  label={subject.name}
                  variant="outlined"
                  type="number"
                  onChange={(e) => {
                    newData(index, e.target.value, subject);
                  }}
                />
              </div>
              <div className="flex flex-col md:flex-col lg:flex-row">
                <div className="flex justify center items-center lg:mr-[5rem] lg:ml-[5rem]">
                  <Checkbox
                    onChange={(e) => {
                      newCheckedValueT(index, e.target.checked, subject);
                    }}
                  />
                  <label>Rekomendasi Guru</label>
                </div>
                <div className="flex justify center items-center lg:ml-[5rem]">
                  <Checkbox
                    onChange={(e) => {
                      newCheckedValueS(index, e.target.checked, subject);
                    }}
                  />
                  <label>Pelajaran yang disukai</label>
                </div>
                <br />
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-end ml-[10rem] md:ml-[28rem] lg:ml-[51rem] mt-[2rem]">
          <Button className="bg-[#1d4ed8] text-slate-200" type="submit">
            <p>submit</p>
          </Button>
        </div>
      </form>
    </>
  );
}

export default Form;
