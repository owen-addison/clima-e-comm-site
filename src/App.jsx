import './App.css';

function Header() {
  return (
    <>
      <div className="header min-w-screen flex h-28 content-center justify-between p-4">
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
