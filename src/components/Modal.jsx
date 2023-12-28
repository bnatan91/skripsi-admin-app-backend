import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from '@material-tailwind/react';
import React from 'react';

function Modal(props) {
  const value = props.onSubmit.sort((a, b) => b.value - a.value);
  const onClickHandler = (e) => {
    e.preventDefault();
    props.onBack(false);
  };
  return (
    <>
      <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-70">
        <Card className="h-[50rem] lg:h-[40rem] flex items-center md:w-[40rem] bg-[#111827] overflow-y-scroll">
          <CardBody>
            <Typography
              variant="h4"
              color="white"
              className="flex justify-center mb-2"
            >
              Hasil Rekomendasi
            </Typography>
            <Typography
              variant="p"
              color="white"
              className="flex justify-center"
            >
              Urutan rekomendasi berdasarkan dengan nilai, urutan yang teratas
              merupakan mata pelajaran yang paling di rekomendasikan dan yang
              terbawah paling tidak di rekomendasikan
            </Typography>
            <table className="mx-auto">
              <thead>
                <tr>
                  <td className="p-4">
                    <Typography
                      variant="small"
                      color="white"
                      className="font-normal"
                    >
                      Mata Pelajaran
                    </Typography>
                  </td>
                  <td className="p-4">
                    <Typography
                      variant="small"
                      color="white"
                      className="font-normal"
                    >
                      No
                    </Typography>
                  </td>
                  <td className="p-4">
                    <Typography
                      variant="small"
                      color="white"
                      className="font-normal"
                    >
                      Nilai
                    </Typography>
                  </td>
                </tr>
              </thead>
              <tbody>
                {value.map((subject, index) => (
                  <tr
                    key={index + 1}
                    // className="flex flex-row justify-between mx-4 ml-4 my-6 even:bg-blue-gray-900"
                  >
                    <td className="p-4">
                      <Typography
                        variant="small"
                        color="white"
                        className="font-normal"
                      >
                        {subject.name}
                      </Typography>
                    </td>
                    <td className="p-4">
                      <Typography
                        variant="small"
                        color="white"
                        className="font-normal"
                      >
                        {index + 1}
                      </Typography>
                    </td>
                    <td className="p-4">
                      <Typography
                        variant="small"
                        color="white"
                        className="font-normal"
                      >
                        {subject.value.toString() === 'NaN'
                          ? 0
                          : subject.value.toFixed(5)}
                      </Typography>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </CardBody>
          <CardFooter>
            <CardFooter className="pt-0">
              <Button
                className="bg-[#1d4ed8] items-start text-gray-200"
                onClick={onClickHandler}
              >
                Close
              </Button>
            </CardFooter>
          </CardFooter>
        </Card>
      </div>
    </>
  );
}

export default Modal;
