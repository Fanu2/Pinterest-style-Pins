// ./pages/index.js
import React, { useState } from 'react';
import Pin from '../components/Pin';
import styles from '../styles/Home.module.css';

export default function Home() {
  // Sample pins data
  const [pins, setPins] = useState([
    {
      title: 'Beautiful Sunset',
      imageUrl: 'https://via.placeholder.com/400',
      description: 'A beautiful sunset over the mountains.',
    },
    {
      title: 'Delicious Pasta',
      imageUrl: 'https://via.placeholder.com/400',
      description: 'A plate of delicious Italian pasta.',
    },
    {
      title: 'Cute Kitten',
      imageUrl: 'https://via.placeholder.com/400',
      description: 'A cute kitten playing in the garden.',
    },
  ]);

  // State for new pin input
  const [newPin, setNewPin] = useState({
    title: '',
    imageUrl: '',
    description: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewPin({ ...newPin, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setPins([...pins, newPin]);
    setNewPin({ title: '', imageUrl: '', description: '' }); // Reset form
  };

  return (
    <div className={styles.container}>
      <h1>Pinterest-style Pins</h1>

      {/* Pin Creation Form */}
      <form onSubmit={handleSubmit} className={styles.pinForm}>
        <input
          type="text"
          name="title"
          placeholder="Pin Title"
          value={newPin.title}
          onChange={handleInputChange}
          required
        />
        <input
          type="text"
          name="imageUrl"
          placeholder="Image URL"
          value={newPin.imageUrl}
          onChange={handleInputChange}
          required
        />
        <textarea
          name="description"
          placeholder="Description"
          value={newPin.description}
          onChange={handleInputChange}
          required
        />
        <button type="submit">Create Pin</button>
      </form>

      <div className={styles.pinGrid}>
        {pins.map((pin, index) => (
          <Pin
            key={index}
            title={pin.title}
            imageUrl={pin.imageUrl}
            description={pin.description}
          />
        ))}
      </div>
    </div>
  );
}
