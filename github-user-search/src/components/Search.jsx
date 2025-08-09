import { useState } from 'react';
import fetchUserData from '../services/githubService.js';

const Search = () => {
  const [searchItem, setSearchItem] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (event) => {
    event.preventDefault();
    setLoading(true);
    try {
      const data = await fetchUserData({
        username: searchItem,
        location,
        minRepos,
      });
      setUsers(data);
    } catch (error) {
      alert("Looks like we cant find the user");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <h2>Search for GitHub Usernames</h2>
      <form onSubmit={handleSearch}>
        <input
          placeholder="Enter Username"
          type="text"
          value={searchItem}
          onChange={(e) => setSearchItem(e.target.value)}
        />
        <input
          placeholder="Enter Location"
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <input
          type="number"
          placeholder="Minimum Repositories"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
        />
        <button className="btn" type="submit">Submit</button>
      </form>

      {loading ? (
        <p>Loading...</p>
      ) : (
        users.length > 0 && (
          <div>
            {users.map((user) => (
              <div key={user.id}>
                <h3>{user.name}</h3>
                <p>{user.login}</p>
                <p>{user.bio}</p>
                <img
                  src={user.avatar_url}
                  alt={`${user.name}'s avatar`}
                  width="100"
                />
                <a href={user.html_url} target="_blank" rel="noopener noreferrer"> View Profile</a>
              </div>
            ))}
          </div>
        )
      )}
    </>
  );
};

export default Search;
