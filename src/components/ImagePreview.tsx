import React from 'react';

interface ImagePreviewProps {
  images: string[];
}

const ImagePreview: React.FC<ImagePreviewProps> = ({ images }) => {
  return (
    <div className="mt-4 grid grid-cols-2 gap-4">
      {images.map((image, index) => (
        <div key={index} className="rounded-lg overflow-hidden shadow-md">
          <img src={image} alt={`Uploaded Image ${index + 1}`} className="w-full h-auto object-cover" />
        </div>
      ))}
    </div>
  );
};

export default ImagePreview;
