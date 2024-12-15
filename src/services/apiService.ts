// import axios from "axios";

// const API_BASE_URL = "https://yhzyxry6rj.execute-api.ap-south-1.amazonaws.com/dev";

// export const uploadImageToApi = async (userId: string, sessionId: string, imageBase64: string) => {
//   const payload = { user_id: userId, session_id: sessionId, image_base64: imageBase64 };

//   try {
//     const response = await axios.post(`${API_BASE_URL}/handle_promode_session_images`, payload, {
//       headers: { "Content-Type": "application/json" },
//     });
//     return response.data; // Return API response
//   } catch (error) {
//     console.error("API Error:", error);
//     throw new Error("Failed to upload the image. Please try again.");
//   }
// };
import axios from "axios";

const API_BASE_URL = "https://yhzyxry6rj.execute-api.ap-south-1.amazonaws.com/dev";

export const uploadImageToApi = async (userId: string, sessionId: string, imageBase64: string) => {
  const payload = { user_id: userId, session_id: sessionId, image_base64: imageBase64 };

  try {
    const response = await axios.post(`${API_BASE_URL}/handle_promode_session_images`, payload, {
      headers: { "Content-Type": "application/json" },
    });
    return response.data; // Return API response
  } catch (error) {
    console.error("API Error:", error);
    throw new Error("Failed to upload the image. Please try again.");
  }
};
