import React from 'react';
import logo from '../assets/suggestopia-logo.png';

function Navbar() {
  return (
    <div>
      <nav className="relative flex w-full flex-wrap items-center justify-between py-2 bg-[#1e293b] rounded-b-lg shadow-lg  hover:text-neutral-700 focus:text-neutral-700  lg:py-4">
        <div className="flex w-full flex-wrap items-center justify-between px-3">
          <div>
            <a
              className="my-1 mr-2 flex items-center text-neutral-200 hover:text-neutral-900 focus:text-neutral-900 lg:mb-0 lg:mt-0"
              href="#"
            >
              <img
                className="mr-2"
                src={logo}
                style={{ height: 20 }}
                alt=""
                loading="lazy"
              />
              <span className="font-medium text-gray-200">Suggestopia</span>
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
