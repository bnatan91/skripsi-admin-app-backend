import {
  Button,
  Collapse,
  Card,
  CardBody,
  Typography,
} from '@material-tailwind/react';
import { useState } from 'react';

function Instruction() {
  const [open, setOpen] = useState(false);
  const toggleOpen = () => setOpen((cur) => !cur);

  const refresh = () => window.location.reload(true);

  return (
    <>
      <div id="instruction" className="flex justify-center ">
        <Button className="bg-[#1d4ed8] " onClick={toggleOpen}>
          Petunjuk!
        </Button>
        <Button className="bg-[#1d4ed8] " onClick={refresh}>
          Back
        </Button>
      </div>
      <Collapse open={open}>
        <Card className="my-4 mx-auto w-8/12 bg-[#1e293b]">
          <CardBody>
            <Typography className="text-white">
              <span className="flex justify-center mb-4">Petunjuk!!!</span>

              <span className="mr-2">1. </span>
              <span>
                Pilih jurusan yang paling anda minati jika tidak ada jurusan
                yang anda minati dipilihan, maka pilihlah jurusan yang paling
                menarik menurut anda
              </span>
              <br />
              <span className="mr-2">2. </span>
              <span>Isi setiap mata pelajaran dengan nilai Semester</span>
              <br />
              <span className="mr-2">3. </span>
              <span>
                Untuk Rekomendasi Guru dan Pelajaran yang Diminati bersifat
                optional yang dimana Anda bisa memilih semuanya atau tidak sama
                sekali atau memilih salah satu
              </span>
              <br />
              <span className="mr-2">4.</span>
              <span>Setelah Mengisi semua maka tekan tombol Submit</span>
            </Typography>
          </CardBody>
        </Card>
      </Collapse>
    </>
  );
}

export default Instruction;
