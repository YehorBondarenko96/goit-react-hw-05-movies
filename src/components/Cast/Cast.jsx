import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { searchForCast } from "components/APIsResults/APIsResults";

const Cast = () => {
    const location = useLocation();
    const movieId = location.state.movieId;
    const [castResult, setCastResult] = useState();

    useEffect(() => {
        const searchCastFilms = async () => {
            try{
                const result = await searchForCast(movieId);
                setCastResult(result);
                console.log('result: ', result);
            } catch (error) {
                console.error("Error:", error.message);
            };
        };
        searchCastFilms()
    }, [movieId]);

    return(
        <h1>Cast</h1>
    )
};

export default Cast;