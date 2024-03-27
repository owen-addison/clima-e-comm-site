import './App.css';

function Header() {
  return (
    <>
      <div className="header min-w-screen flex h-auto content-center justify-between border-b border-lime-800 pt-0">
        <div id="logo-container">Clima</div>
        <div id="header-links-container">
          <div className="about-link">About</div>
        </div>
      </div>
    </>
  );
}

function App() {
  return (
    <>
      <Header />
    </>
  );
}

export default App;
