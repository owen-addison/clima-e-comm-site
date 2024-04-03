import { useState, useEffect } from 'react';
import Header from './components/Header';
import Item from './components/Item';
import './App.css';

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
