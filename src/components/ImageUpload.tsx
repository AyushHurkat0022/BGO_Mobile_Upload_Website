// import React, { useState } from 'react';

// interface ImageUploadProps {
//   onImageUpload: (imageBase64: string) => void;
// }

// const ImageUpload: React.FC<ImageUploadProps> = ({ onImageUpload }) => {
//   const [image, setImage] = useState<File | null>(null);

//   const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     const file = event.target.files ? event.target.files[0] : null;
//     if (file) {
//       setImage(file);
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         if (reader.result) {
//           onImageUpload(reader.result as string);
//         }
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   return (
//     <div className="mb-4 text-center">
//       <input
//         type="file"
//         accept="image/*"
//         onChange={handleFileChange}
//         className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-indigo-500 file:text-white hover:file:bg-indigo-600"
//       />
//       {image && (
//         <div className="mt-4">
//           <img
//             src={URL.createObjectURL(image)}
//             alt="Preview"
//             className="w-full h-auto rounded-md shadow-md"
//           />
//         </div>
//       )}
//     </div>
//   );
// };

// export default ImageUpload;
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
