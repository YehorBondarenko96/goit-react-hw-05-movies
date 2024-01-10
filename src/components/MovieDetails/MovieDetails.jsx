import { useState, useEffect } from "react";
import { useLocation, useParams, Link } from "react-router-dom";
import { searchForId } from "components/APIsResults/APIsResults";
import { Button, BriefInfoMov, ImgInfoMov, TextInfoMov, AddInfo } from "./MovieDetails.styled";
import { Loader } from "components/Loader/Loader";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";

const MovieDetails = () => {
    const {movieId} = useParams();
    const [movie, setMovie] = useState();
    const [indicatorLoader, setIndicatorLoader] = useState(true);
    const location = useLocation();
    const [backLocation, setBackLocation] = useState(location.state?.from ?? '/');

    useEffect(() => {
        const searchPopularFilms = async () => {
            try{
                const result = await searchForId(movieId);
                setMovie(result);
            } catch (error) {
                console.error("Error:", error.message);
            };
            setIndicatorLoader(false);
        };
        searchPopularFilms()
    }, [movieId]);

    return(
        <>
        {indicatorLoader && <Loader />}
        {movie && (
            <>
        <Link to={backLocation}>
        <Button>Go back</Button>
        </Link>
        <BriefInfoMov>
        <ImgInfoMov src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`} alt={movie.title}/>
        <TextInfoMov>
            <h2>{movie.title} ({movie.release_date.slice(0, 4)})</h2>
            <p>User Scoce: {String(movie.popularity).replace(/\./g, "").slice(0, 2)}%</p>
            <h3>Overview</h3>
            <p>{movie.overview}</p>
            <h3>Genres</h3>
            <p>{movie.genres.map(item => item.name).join(', ')}</p>
        </TextInfoMov>
        </BriefInfoMov>
        <AddInfo>
            <p>Additional information</p>
            <ul>
                <li><Link to='cast'>Cast</Link></li>
                <li><Link to='reviews'>Revievs</Link></li>
            </ul>
        </AddInfo>
        <Suspense fallback={<Loader />}>
            <Outlet />
        </Suspense>
        </>
        )}
        </>
    )
};

export default MovieDetails;