import { Typography } from '@material-tailwind/react';
import React from 'react';

function Footer() {
  return (
    <>
      <footer className=" flex w-full flex-wrap items-center justify-center mt-[4rem] py-2 bg-[#1e293b] rounded-t-lg shadow-lg  hover:text-neutral-700 focus:text-neutral-700  lg:py-4">
        <Typography color="white" className="text-center font-normal">
          &copy; 2023 Suggestopia
        </Typography>
      </footer>
    </>
  );
}

export default Footer;
