import MainPage from './page/MainPage';

function App() {
  return (
    <div className="w-screen  bg-[#CDFCF6] flex flex-col justify-between ">
      <header className="h-12 inset-x-0 top-0 mb-2 flex justify-center items-center bg-[#98A8F8]">
        <h2 className="my-2">Header</h2>
      </header>
      <section className="mt-20 ">
        <MainPage />
      </section>
      <footer className="h-12 inset-x-0 bottom-0 mt-20  flex justify-center items-center  bg-[#98A8F8]">
        <h2 className="my-2">Footer</h2>
      </footer>
    </div>
  );
}

export default App;
