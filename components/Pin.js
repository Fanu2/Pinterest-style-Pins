// components/Pin.js
import Image from 'next/image';

function Pin({ imageUrl, description }) {
  return (
    <div className="pin">
      <Image
        src={imageUrl} // Make sure this is a valid image URL
        alt={description || 'Pin description'} // Provide a fallback description if none is given
        width={400}
        height={400}
        priority // Optional: Use priority if necessary
      />
      <p>{description}</p>
    </div>
  );
}

export default Pin;
