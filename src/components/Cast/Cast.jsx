import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { searchForCast } from "components/APIsResults/APIsResults";
import { ContainerCast, ListCast, ItemCast, ImgCast } from "./Cast.styled";
import { Loader } from "components/Loader/Loader";

const Cast = () => {
    const location = useLocation();
    const movieId = location.state.movieId;
    const [castResult, setCastResult] = useState(null);
    const [indicatorLoader, setIndicatorLoader] = useState(true);

    useEffect(() => {
        const searchCastFilms = async () => {
            try{
                const result = await searchForCast(movieId);
                setCastResult(result);
            } catch (error) {
                console.error("Error:", error.message);
            };
            setIndicatorLoader(false)
        };
        searchCastFilms()
    }, [movieId]);

    return(
        <ContainerCast>
        {indicatorLoader && <Loader />}
        {castResult && (
            <ListCast>
                {castResult.map(actor => 
                    <ItemCast key={actor.id}>
                        <ImgCast src={actor.profile_path ? (`https://image.tmdb.org/t/p/w200/${actor.profile_path}`):('https://lh3.googleusercontent.com/pw/ABLVV84zci9C9zWeXHgV9_NUIfxRzW_2SyA3whYBaXKw-mF-AB8bYqM2abi0T5518xnJmjAH0f2AkDYz8PGjJHkORp7Czcuw7_oK_ZRVlep-TCCFXh98G7GA7i5EeVXXnr2PrwMOwAHPqxnlDQ5_lKz0__rZQw=w600-h600-s-no-gm?authuser=0')} alt={actor.name} />
                        <p>{actor.name}</p>
                        <p>Character: {actor.character}</p>
                    </ItemCast>
                    )}
            </ListCast>
        )}
        </ContainerCast>
    )
};

export default Cast;