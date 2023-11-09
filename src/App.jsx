import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from './page/MainPage';
import Search from './components/Search';
import axios from 'axios';
axios.defaults.withCredentials = true;

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
