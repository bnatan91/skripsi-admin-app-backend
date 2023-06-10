import React from 'react';
import Hero from '../assets/7720441-removebg-preview.png';
import { Button } from '@material-tailwind/react';
import { Link } from 'react-router-dom';
import ListForm from './ListForm';

function Header() {
  const handleClickScroll = () => {
    const elementId = document.getElementById('content');

    if (elementId) {
      elementId.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="flex flex-col justify-center lg:flex-row m-[2rem] lg:mx-[6rem] lg:mt-[4rem]  bg-[#1e293b] border border-gray-700 rounded-lg p-8 md:p-12">
      <div className="flex flex-col justify-center items-center lg:w-[60rem] lg:mr-[6rem]">
        <div>
          <h1 className="text-white text-3xl md:text-5xl font-extrabold">
            Rekomendasi Mata Pelajaran
          </h1>
          <br />
          <p className="text-lg font-normal text-gray-300 mb-6">
            Selamat datang di website Suggestopia yang menghadirkan rekomendasi
            mata pelajaran bagi siswa. Temukan mata pelajaran yang ingin Anda
            pelajari. Dari matematika hingga bahasa asing, kami memberikan
            rekomendasi yang membantu Anda dengan jurusan kuliah yang Anda
            minati.
          </p>
          <Button
            className="inline-flex justify-center items-center py-2.5 px-5 text-base font-medium text-center text-white rounded-lg bg-[#1d4ed8] hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
            onClick={handleClickScroll}
          >
            Let's Go
            <svg
              aria-hidden="true"
              className="ml-2 -mr-1 w-4 h-4"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </Button>
        </div>
      </div>
      <div className="flex justify-center items-center lg:ml-[2.5rem]">
        <img
          className=" h-[20rem] md:h-[25rem] lg:h-[30rem] w-[30rem] md:w-[25rem] lg:w-[40rem]"
          src={Hero}
          alt=""
          loading="lazy"
        />
      </div>
    </div>
  );
}

export default Header;

// { height: '30rem', width: '40rem' }
