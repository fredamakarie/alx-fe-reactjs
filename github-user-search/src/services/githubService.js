import axios from "axios";

// Base Axios instance
const gitAPI = axios.create({
  baseURL: import.meta.env.VITE_APP_GITHUB_API_KEY
});

// Function that accepts a username and fetches user data
export const fetchUserData = async (username) => {
  try {
    const response = await gitAPI.get(`/users/${username}`);
    return response.data;
  } catch (error) {
    console.error("Something went wrong:", error);
    throw error;
  }
};

export default gitAPI;
