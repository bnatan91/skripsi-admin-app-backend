import React from 'react';

function Modal(props) {
  const value = props.onSubmit.sort((a, b) => b.value - a.value);
  const onClickHandler = (e) => {
    e.preventDefault();
    props.onBack(false);
  };
  console.log();
  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-70 ">
      <div className="w-80 md:w-[25rem] lg:w-[30rem]  flex flex-col justify-between bg-[#B7C0EE]/95">
        <div className="my-4 mx-2">
          <h2 className="flex justify-center items-center">
            Hasil Rekomendasi Mata Pelajaran
          </h2>
          {value.map((subject, index) => (
            <div
              key={index + 1}
              className="flex flex-row justify-between mx-4 ml-4 my-6"
            >
              <p className="ml-8">{subject.name}</p>
              <p className=" mr-8">
                {subject.value.toString() === 'NaN'
                  ? 0
                  : subject.value.toFixed(5)}
              </p>
            </div>
          ))}
        </div>
        <div className="flex justify-center my-10 mx-2">
          <button
            className="border-2 rounded-lg text-slate-200 bg-[#7B287D]/90"
            onClick={onClickHandler}
          >
            <p className="mx-2 my-1">back</p>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
