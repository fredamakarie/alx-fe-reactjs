
import { useState } from 'react';
import fetchUserData from '../services/githubService.js';

const Search = () => {
    const [searchItem, setSearchItem]= useState("");
    const [username, setUsername] =useState([]);
    const handleSearch = async () => {
        try{
            const data = await fetchUserData(searchItem); setUsername(data);
        }
        catch (error){
            alert("Looks like we cant find the user");
        }
    }
  return (
    <>
    
    <h2>Search for GitHub Usernames</h2>
    <form>
        <input 
            placeholder="Enter Username"
            type="text"
            value={searchItem}
            onChange={(e) => setSearchItem(e.target.value)}
        />
    </form>
    <button className="btn" onClick={handleSearch}>Submit</button>

    <ul>
        {username.map((item, index) =>(
            <li key={index}>{item}</li>
        ))}
    </ul>

    </>
  )
}

export default Search