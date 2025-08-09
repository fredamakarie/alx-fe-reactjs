import axios from "axios";

// Base Axios instance
const gitAPI = axios.create({
  baseURL: import.meta.env.VITE_APP_GITHUB_API_KEY
});

// Function that accepts a username and fetches user data
export const fetchUserData = async ({username, location, minRepos}) => {
      let query = '';

  if (username) query += `${user} `;
  if (location) query += `location:${location} `;
  if (minRepos) query += `repos:>${minRepos}`;
  try {
    const response = await axios.get('https://api.github.com/search/users?q={query}', {params:{q:query.trim()}
  });
      const detailedUsers = await Promise.all(
      response.data.items.map(async (user) => {
        const userDetails = await gitAPI.get(`/users/${user.login}`);
        return userDetails.data;
      })
    );

    return detailedUsers
  } catch (error) {
    console.error("Something went wrong:", error);
    throw error;
  }
};

export default gitAPI;
