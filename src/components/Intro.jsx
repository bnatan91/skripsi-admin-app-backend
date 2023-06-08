import React from 'react';

function Intro(props) {
  const onClickHandler = (e) => {
    e.preventDefault();
    props.onIntro(false);
  };

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-75">
      <div className="w-72 flex flex-col justify-center items-center bg-[#B7C0EE]/95 rounded md:w-8/12 lg:w-4/12">
        <p className="mx-4 my-6">
          Selamat datang di website Suggestopia yang menghadirkan rekomendasi
          mata pelajaran bagi siswa. Temukan mata pelajaran yang ingin Anda
          pelajari. Dari matematika hingga bahasa asing, kami memberikan
          rekomendasi yang membantu Anda dengan jurusan kuliah yang Anda minati.
        </p>
        <div className="flex justify-center mx-2 mb-6">
          <button
            type="click"
            className="border-2 rounded-lg text-slate-200 bg-[#7B287D]/90"
            onClick={onClickHandler}
          >
            <p className="mx-2 my-1">Close </p>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Intro;
