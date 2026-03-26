const API_KEY = "77891c1015bfbb311c8bef4ff1a9f19f";
const BASE_URL = "https://api.themoviedb.org/3";

export const getPopularMovies = async () => {
    const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
    
    if (!response.ok) {
        throw new Error(`HTTP Error! Status: ${response.status}`);
    }
    
    const data = await response.json();
    return data.results;
}

export const searchMovies = async (query) => {
    const response = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`);
    console.log(response);
    console.log(response.status);
    
    if (!response.ok) {
        throw new Error(`HTTP Error! Status: ${response.status}`);
    }
    
    const data = await response.json();
    return data.results;
}