import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import MainContent from './MainContent';
import Footer from '../components/Footer';
import Search from '../components/Search';
import Content from '../components/Content';
import ErrorModal from '../components/ErrorModal';

const listMajor = [
  {
    label: 'Perhotelan Dan Pariwisata',
    name: 'Perhotelan Dan Pariwisata',
    description: `It really matters and then like it really doesn't matter.
      What matters is the people who are sparked by it. And the people 
      who are like offended by it, it doesn't matter.`,
  },
  {
    label: 'MIPA',
    name: 'MIPA',
    description: `Because it's about motivating the doers. Because I'm here
      to follow my dreams and inspire other people to follow their dreams, too.`,
  },
  {
    label: 'Seni dan Design',
    name: 'Seni dan Design',
    description: `We're not always in the position that we want to be at.
      We're constantly growing. We're constantly making mistakes. We're
      constantly trying to express ourselves and actualize our dreams.`,
  },
  {
    label: 'Teknologi Informasi',
    name: 'Teknologi Informasi',
    description: `Because it's about motivating the doers. Because I'm here
      to follow my dreams and inspire other people to follow their dreams, too.`,
  },
  {
    label: 'Psikologi',
    name: 'Psikologi',
    description: `We're not always in the position that we want to be at.
      We're constantly growing. We're constantly making mistakes. We're
      constantly trying to express ourselves and actualize our dreams.`,
  },
];

function MainPage() {
  const [isTrue, setIsTrue] = useState(false);
  const [dataMajor, setDataMajor] = useState(listMajor);
  const [errMsg, setErrMsg] = useState('');
  const [errorModal, setErrorModal] = useState(false);

  useEffect(() => {
    if (isTrue === false) {
      setDataMajor(listMajor);
    }
  }, [isTrue]);

  const onErrorHandler = (data) => {
    setErrMsg(data);
    setErrorModal(true);
  };

  const onBackErrorHandler = () => {
    setErrorModal(false);
  };

  const onClickHandler = (data) => {
    if (!data) {
      setIsTrue(false);
    }
    setIsTrue(true);
    setDataMajor(data.majors);
  };
  return (
    <>
      <div className="w-full h-full bg flex flex-col font-sans bg-[#020617]">
        <Navbar />
        <Header />
        <Search onClickInput={onClickHandler} Error={onErrorHandler} />
        {errorModal === false ? (
          ''
        ) : (
          <ErrorModal Error={errMsg} onBack={onBackErrorHandler} />
        )}
        <Content onSubmitData={dataMajor} isTrue={isTrue} />
        <MainContent isTrue={isTrue} Major={dataMajor} />
        <Footer />
      </div>
    </>
  );
}

export default MainPage;
