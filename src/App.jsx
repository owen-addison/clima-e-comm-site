import { useState, useEffect } from 'react';
import Item from './components/Item';
import './App.css';

function Header() {
  return (
    <>
      <div className="header min-w-screen flex h-auto content-center justify-between border-b border-moss-800 pt-0">
        <div
          id="logo-container"
          className="font-sans text-2xl font-light tracking-widest text-moss-950"
        >
          Clima
        </div>
        <div
          id="header-links-container"
          className="flex flex-row items-center justify-center"
        >
          <div className="flex items-center justify-center">
            <p className="font-sans text-base font-light tracking-wide text-moss-950">
              About
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    // Simulate fetching data from an API
    fetch('/api/items.json')
      .then((response) => response.json())
      .then((data) => setItems(data.items))
      .catch((error) => console.error('Error fetching items:', error));
  }, []);

  return (
    <>
      <Header />
      {items.map((item) => (
        <Item key={item.id} data={item} />
      ))}
    </>
  );
}

export default App;
