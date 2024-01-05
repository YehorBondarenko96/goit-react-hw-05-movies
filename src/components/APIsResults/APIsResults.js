import axios from "axios";

const key = '68a811a0e5d082821be437ada1cb6380'

export const PopularFilms = async () => {
    try{
        const popularFilms = await axios.get(`https://api.themoviedb.org/3/trending/movie/day?api_key=${key}&page=1&language=en-US&include_adult=false`);
        return popularFilms.data.results;
    } catch(error) { 
        console.error("Error:", error.message);
    }
}