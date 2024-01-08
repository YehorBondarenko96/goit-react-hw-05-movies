import { useState, useEffect } from "react";
import { useLocation, useParams, Link } from "react-router-dom";
import { searchForId } from "components/APIsResults/APIsResults";
import { Button, BriefInfoMov, ImgInfoMov, TextInfoMov } from "./MovieDetails.styled";

const MovieDetails = () => {
    const {movieId} = useParams();
    const [movie, setMovie] = useState();
    const location = useLocation();
    const backLocation = location.state?.from ?? '/';

    useEffect(() => {
        const searchPopularFilms = async () => {
            try{
                const result = await searchForId(movieId);
                setMovie(result);
            } catch (error) {
                console.error("Error:", error.message);
            }
        };
        searchPopularFilms()
    }, [movieId]);

    return(
        <>
        {movie && (
            <>
        <Link to={backLocation}>
        <Button>Go back</Button>
        </Link>
        <BriefInfoMov>
        <ImgInfoMov src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`} alt={movie.title}/>
        <TextInfoMov>
            <h2>{movie.title} ({movie.release_date.slice(0, 4)})</h2>
            <p>User Scoce: {String(movie.popularity).slice(0, 2)}%</p>
            <h3>Overview</h3>
            <p>{movie.overview}</p>
            <h3>Genres</h3>
            <p>{Object.values(movie.genres).map(item => item.name).join(', ')}</p>
        </TextInfoMov>
        </BriefInfoMov>
        </>
        )}
        </>
    )
};

export default MovieDetails;