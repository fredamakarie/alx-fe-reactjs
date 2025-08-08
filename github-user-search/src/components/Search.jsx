
import { useState } from 'react';
import fetchUserData from '../services/githubService.js';

const Search = () => {
    const [searchItem, setSearchItem]= useState("");
      const [location, setLocation]= useState("");
    const [user, setUser] = useState(null);
    const [loading, setLoading]= useState(false);
    const handleSearch = async (event) => {
        event.preventDefault();
        setLoading(true);
        try{
            const data = await fetchUserData(searchItem);
            setUser(data);
        }
        catch (error){
            alert("Looks like we cant find the user");
        }
        finally {
            setLoading(false);
        } 
    }
  return (
    <>
    
        <h2>Search for GitHub Usernames</h2>
        <form  onSubmit={handleSearch}>
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

        </form>
        <button className="btn">Submit</button>
        
         {loading ? (
        <p>Loading...</p>
             ) : (
        user && (
          <div>
            <h3>{user.name}</h3>
            <p>{user.bio}</p>
            <img src={user.avatar_url} alt={`${user.name}'s avatar`} width="100" />
          </div>
        )
      )}
    </>
  )
}

export default Search