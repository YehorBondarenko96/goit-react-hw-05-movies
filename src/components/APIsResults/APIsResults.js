import axios from "axios";

const baseURL = 'https://api.themoviedb.org/3';
const key = '68a811a0e5d082821be437ada1cb6380';


const endUrl = {
    trending: '/trending/movie/day',
    idSearch: '/movie/',
    credits: '/credits'
};

export const PopularFilms = async () => {
    try{
        const popularFilms = await axios.get(`${baseURL}${endUrl.trending}?api_key=${key}&page=1&language=en-US&include_adult=false`);
        return popularFilms.data.results;
    } catch(error) { 
        console.error("Error:", error.message);
    }
};

export const searchForId = async (idMovie) => {
    try{
        const result = await axios.get(`${baseURL}${endUrl.idSearch}${idMovie}?api_key=${key}&page=1&language=en-US&include_adult=false`);
        return result.data;
    } catch(error) { 
        console.error("Error:", error.message);
    }
};

export const searchForCast = async (idMovie) => {
    try{
        const result = await axios.get(`${baseURL}${endUrl.idSearch}${idMovie}${endUrl.credits}?api_key=${key}&page=1&language=en-US&include_adult=false`);
        return result.data.cast;
    } catch(error) { 
        console.error("Error:", error.message);
    }
}