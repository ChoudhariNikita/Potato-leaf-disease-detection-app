import { GEMINI_API_KEY, GEMINI_API_URL } from '@env';
import axios from 'axios';

export const generateContent = async (text) => {
  const url = `${GEMINI_API_URL}?key=${GEMINI_API_KEY}`;

  const headers = {
    'Content-Type': 'application/json',
  };

  const data = {
    contents: [
      {
        parts: [{ text }],
      },
    ],
  };

  try {
    const response = await axios.post(url, data, { headers });
    console.log('Full API response:', response); // Log the full response object

    if (!response.data?.candidates?.length) {
      throw new Error("Invalid response from API");
    }

    return response.data;
  } catch (error) {
    console.error('Error generating content:', error?.response?.data || error.message);
    throw error;
  }
};