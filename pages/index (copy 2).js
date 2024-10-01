// pages/index.js
import React, { useState } from 'react';
import Pins from '../components/Pins';
import styles from '../styles/Home.module.css';

import imagePlaceholder1 from '../images/3.jpg';
import imagePlaceholder2 from '../images/4.jpg';
import imagePlaceholder3 from '../images/5.jpg';
import imagePlaceholder4 from '../images/6.jpg';
import imagePlaceholder5 from '../images/7.jpg';
import imagePlaceholder6 from '../images/8.jpg';

const images = [
  { src: imagePlaceholder1, label: 'Image 1' },
  { src: imagePlaceholder2, label: 'Image 2' },
  { src: imagePlaceholder3, label: 'Image 3' },
  { src: imagePlaceholder4, label: 'Image 4' },
  { src: imagePlaceholder5, label: 'Image 5' },
  { src: imagePlaceholder6, label: 'Image 6' },
];

export default function Home() {
  const [pins, setPins] = useState([]);
  const [newPin, setNewPin] = useState({
    title: '',
    selectedImage: images[0].src, // Initialize with the first image's src
    description: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewPin({ ...newPin, [name]: value });
  };

  const handleImageChange = (e) => {
    const selectedSrc = e.target.value; // Get the selected image src
    console.log('Selected Image:', selectedSrc); // Log for debugging
    setNewPin({ ...newPin, selectedImage: selectedSrc });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newPin.title && newPin.selectedImage && newPin.description) {
      setPins([...pins, { ...newPin }]);
      setNewPin({ title: '', selectedImage: images[0].src, description: '' }); // Reset to the first image
    }
  };

  return (
    <div className={styles.container}>
      <h1>Pinterest-style Pins</h1>

      <form onSubmit={handleSubmit} className={styles.pinForm}>
        <input
          type="text"
          name="title"
          placeholder="Pin Title"
          value={newPin.title}
          onChange={handleInputChange}
          required
        />

        <select
          name="selectedImage"
          value={newPin.selectedImage}
          onChange={handleImageChange}
        >
          {images.map((image, index) => (
            <option key={index} value={image.src}>
              {image.label}
            </option>
          ))}
        </select>

        <textarea
          name="description"
          placeholder="Description"
          value={newPin.description}
          onChange={handleInputChange}
          required
        />

        <button type="submit">Create Pin</button>
      </form>

      <Pins pins={pins} /> {/* Pass the pins to Pins component */}
    </div>
  );
}
