import React from 'react';

interface ImageUploadProps {
  onImageUpload: (imageBase64: string) => void;
}

const ImageUpload: React.FC<ImageUploadProps> = ({ onImageUpload }) => {
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (reader.result) {
          onImageUpload(reader.result as string);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="image-upload">
      <input type="file" id="file" onChange={handleFileChange} />
      <label htmlFor="file">Upload Image</label>
    </div>
  );
};

export default ImageUpload;
