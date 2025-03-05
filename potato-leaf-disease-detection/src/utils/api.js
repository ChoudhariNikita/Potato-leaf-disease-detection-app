import axios from 'axios';
import Constants from 'expo-constants';

const GEMINI_API_KEY = Constants.manifest.extra.GEMINI_API_KEY;
const GEMINI_API_URL = Constants.manifest.extra.GEMINI_API_URL;

export const generateContent = async (text) => {
  const url = `${GEMINI_API_URL}?key=${GEMINI_API_KEY}`;
  const headers = {
    'Content-Type': 'application/json',
  };
  const data = {
    contents: [{
      parts: [{ text }],
    }],
  };

  try {
    const response = await axios.post(url, data, { headers });
    return response.data;
  } catch (error) {
    console.error('Error generating content:', error);
    throw error;
  }
};