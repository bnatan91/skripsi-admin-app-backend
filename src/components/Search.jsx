import { Button, Card, Input } from '@material-tailwind/react';
import axios from 'axios';
import { useState } from 'react';
import { API_URL } from '../config/config';
import { isEmpty } from 'lodash';

// eslint-disable-next-line react/prop-types
function Search({ onClickInput, Error }) {
  const [input, setInput] = useState([]);

  const onChangeValue = (e) => {
    setInput(e.target.value);
  };

  const getStudents = async () => {
    try {
      const response = await axios.post(`${API_URL}/api/test/students`, {
        studentCode: input,
      });
      if (isEmpty(response.data.majors)) {
        Error(`Student with code ${input} don't have major`);
      }
      onClickInput(response.data);
    } catch (error) {
      if (error.message) {
        Error(error.response.data.msg);
      }
    }
  };

  const inputSubmitHandler = (e) => {
    e.preventDefault();
    getStudents();
  };

  return (
    <div className="w-full flex justify-center my-10">
      <Card className="bg-[#111827]  w-[30rem] ">
        <form
          className="grid grid-cols-2  flex-justify-center items-center"
          onSubmit={inputSubmitHandler}
          method="post"
        >
          <div className="flex flex-col md:p-4 md:px-12 ">
            <Input
              type="text"
              label="Input Student Code"
              color="white"
              onChange={onChangeValue}
            />
          </div>

          <Button
            className="bg-[#1d4ed8] w-[6rem] ml-20 text-slate-200 text-white justify-center items-center"
            type="submit"
          >
            <p>Submit</p>
          </Button>
        </form>
      </Card>
    </div>
  );
}

export default Search;
