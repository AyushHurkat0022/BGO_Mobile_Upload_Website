import React, { useState, useEffect } from "react";
import ImageUpload from "./components/ImageUpload";
import ImagePreview from "./components/ImagePreview";
import { uploadImageToApi } from "./services/apiService";
import './App.css';

const App: React.FC = () => {
  const [images, setImages] = useState<string[]>([]); // State for storing image previews
  const [isLoading, setIsLoading] = useState<boolean>(false); // Loading state
  const [uploadMessage, setUploadMessage] = useState<string>(""); // Upload status message
  const [error, setError] = useState<string | null>(null); // Error message
  const [userId, setUserId] = useState<string | null>(null);
  const [sessionId, setSessionId] = useState<string | null>(null);

  useEffect(() => {
    // Extract userId and sessionId from the URL query parameters
    const urlParams = new URLSearchParams(window.location.search);
    const userId = urlParams.get("userId");
    const sessionId = urlParams.get("sessionId");

    if (userId && sessionId) {
      setUserId(userId);
      setSessionId(sessionId);
    }
  }, []);

  // Handle image upload and send it to the API
  const handleImageUpload = async (imageBase64: string) => {
    if (!userId || !sessionId) {
      setError("Missing userId or sessionId.");
      return;
    }
  
    try {
      setIsLoading(true);
      setUploadMessage("Uploading image...");
      setError(null);
  
      // Upload the image to the API
      await uploadImageToApi(userId, sessionId, imageBase64);
      setUploadMessage("Image uploaded successfully!");
      setImages((prevImages) => [...prevImages, imageBase64]);
  
    } catch (error) {
      console.error("Error uploading image:", error); // Log the error for debugging
      setUploadMessage("Image upload failed. Please try again.");
      setError("Failed to upload image.");
    } finally {
      setIsLoading(false);
    }
  };  

  return (
    <div className="app-container">
      {/* Header section */}
      <div className="header">
        <h1 className="title">KinMitra</h1>
        <p className="subtitle">ProMode/Outfit Based Jewellery</p>
        <p className="welcome-text">Welcome to KinMitra Mobile! 🚀</p>
      </div>

      {/* Main content area */}
      <div className="main-content">
        {/* Upload Button */}
        <div className="upload-button-container">
          <ImageUpload onImageUpload={handleImageUpload} />
        </div>

        {/* Show loading spinner while uploading */}
        {isLoading && (
          <div className="loading-container">
            <video className="loading-animation" autoPlay loop muted>
              <source src="src/assets/Animation - 1734265253792.webm" type="video/webm" />
            </video>
          </div>
        )}

        {/* Show success or error message */}
        {uploadMessage && (
          <div className={`upload-message ${error ? "error" : "success"}`}>
            {uploadMessage}
          </div>
        )}

        {/* Show uploaded images */}
        {images.length > 0 && <ImagePreview images={images} />}
      </div>

      {/* Footer section */}
      <footer className="footer">
        <p>© 2024 Kinmitra Phone Website. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default App;
