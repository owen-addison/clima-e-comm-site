import Item from './Item';
import './App.css';

function Header() {
  return (
    <>
      <div className="header min-w-screen border-moss-800 flex h-auto content-center justify-between border-b pt-0">
        <div
          id="logo-container"
          className="text-moss-950 font-sans text-2xl font-light tracking-widest"
        >
          Clima
        </div>
        <div
          id="header-links-container"
          className="flex flex-row items-center justify-center"
        >
          <div className="flex items-center justify-center">
            <p className="text-moss-950 font-sans text-base font-light tracking-wide">
              About
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

function App() {
  return (
    <>
      <Header />
      <Item />
    </>
  );
}

export default App;
