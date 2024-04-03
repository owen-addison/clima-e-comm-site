import { useState, useEffect } from 'react';
import Header from './components/Header';
import About from './components/About';
import Item from './components/Item';
import './App.css';

function App() {
  const [items, setItems] = useState([]);
  const [showAbout, setShowAbout] = useState(false);

  useEffect(() => {
    // Simulate fetching data from an API
    fetch('/api/items.json')
      .then((response) => response.json())
      .then((data) => setItems(data.items))
      .catch((error) => console.error('Error fetching items:', error));
  }, []);

  return (
    <>
      <Header onShowAbout={() => setShowAbout(true)} />
      {showAbout && <About />}
      {items.map((item) => (
        <Item key={item.id} data={item} />
      ))}
    </>
  );
}

export default App;
