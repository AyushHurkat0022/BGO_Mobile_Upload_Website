// Function to save an image in localStorage
export const saveImageToLocalStorage = (userId: string, sessionId: string, imageBase64: string) => {
  // Get the current images data from localStorage or initialize it as an empty object
  const localData = JSON.parse(localStorage.getItem('userImages') || '{}');

  // If no data exists for the user, create a new entry
  if (!localData[userId]) {
    localData[userId] = {};
  }

  // If no session data exists for the user, create a new entry for that session
  if (!localData[userId][sessionId]) {
    localData[userId][sessionId] = [];
  }

  // Add the new image (Base64 encoded) to the session's image list
  localData[userId][sessionId].push(imageBase64);

  // Save the updated data back to localStorage
  localStorage.setItem('userImages', JSON.stringify(localData));
};

// Function to retrieve images from localStorage for a specific user and session
export const getImagesFromLocalStorage = (userId: string, sessionId: string): string[] => {
  // Get the images data from localStorage or return an empty array if no data exists
  const localData = JSON.parse(localStorage.getItem('userImages') || '{}');

  // Return the images for the given user and session, or an empty array if no images are found
  return localData[userId]?.[sessionId] || [];
};
