import axios from "axios";

const gitAPI = axios.create({
    baseURL: import.meta.env.VITE_APP_GITHUB_API_KEY,});

export const fetchUserData = async () => {
        
        try{
            const response = await gitAPI.get('/search', {params: {searchItem}
            });
            return response.data;
        }
        catch(error){
            console.error("Something went wrong", error);
            throw error;
        }
    };

  
export default gitAPI