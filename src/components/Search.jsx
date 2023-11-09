import { Button, Card, Input } from '@material-tailwind/react';
import axios from 'axios';
import { useState } from 'react';

// eslint-disable-next-line react/prop-types
function Search({ onClickInput, Error }) {
  const [input, setInput] = useState([]);

  const onChangeValue = (e) => {
    setInput(e.target.value);
  };

  const getStudents = async () => {
    try {
      const response = await axios.post(`/api/test/students`, {
        studentCode: input,
      });
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
      <Card className="bg-[#111827]  w-[60rem] ">
        <form
          className="grid grid-cols-2  flex-justify-center items-center"
          onSubmit={inputSubmitHandler}
          method="post"
        >
          <Input
            type="text"
            label="Input"
            color="white"
            onChange={onChangeValue}
          />
          <Button
            className="bg-[#1d4ed8] w-[6rem] ml-14 text-slate-200 text-white"
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
