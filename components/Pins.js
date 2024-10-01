// components/Pins.js
import React from 'react';
import Image from 'next/image';

const Pins = ({ pins }) => {
  return (
    <div>
      {pins.map((pin, index) => (
        <div key={index}>
          <h2>{pin.title}</h2>
          <Image
            src={pin.selectedImage} // Use selectedImage from newPin
            alt={pin.title || "Pin Image"} // Fallback alt text
            width={400}
            height={400}
          />
          <p>{pin.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Pins;
