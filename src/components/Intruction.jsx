import React from 'react';

function Intruction() {
  return (
    <div className="w-72 flex mb-10 flex-col justify-between items-center bg-[#B7C0EE]  rounded md:w-[25rem] lg:w-[30rem]">
      <div className="mt-4 my-6">
        <h2>Petunjuk!!!</h2>
      </div>
      <div className="ml-4 mx-4 mt-2 mb-8">
        <div className="flex flex-row">
          <p className="mr-2">1. </p>
          <p>
            Pilih jurusan yang paling anda minati jika tidak ada jurusan yang
            anda minati dipilihan, maka pilihlah jurusan yang paling menarik
            menurut anda
          </p>
        </div>
        <div className="flex flex-row">
          <p className="mr-2">2. </p>
          <p>Isi setiap mata pelajaran dengan nilai Semester</p>
        </div>
        <div className="flex flex-row">
          <p className="mr-2">3. </p>
          <p>
            Untuk Rekomendasi Guru dan Pelajaran yang Diminati bersifat optional
            yang dimana Anda bisa memilih semuanya atau tidak sama sekali atau
            memilih salah satu
          </p>
        </div>
        <div className="flex flex-row">
          <p className="mr-2">4.</p>
          <p>Setelah Mengisi semua maka tekan tombol Submit</p>
        </div>
      </div>
    </div>
  );
}

export default Intruction;
