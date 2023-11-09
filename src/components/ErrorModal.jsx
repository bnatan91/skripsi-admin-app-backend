import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Typography,
} from '@material-tailwind/react';
import { useEffect, useState } from 'react';

function ErrorModal({ Error, onBack }) {
  const onClickHandler = () => {
    onBack(false);
  };

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-70">
      <Card className="h-[50rem] lg:h-[40rem] flex items-center md:w-[40rem] bg-[#111827] overflow-y-scroll">
        <CardBody>
          <Typography
            variant="h5"
            color="white"
            className="flex justify-center mb-2"
          >
            {Error}
          </Typography>
        </CardBody>
        <CardFooter>
          <CardFooter className="pt-0">
            <Button
              className="bg-[#1d4ed8] items-start text-gray-200"
              onClick={onClickHandler}
            >
              Back
            </Button>
          </CardFooter>
        </CardFooter>
      </Card>
    </div>
  );
}

export default ErrorModal;
