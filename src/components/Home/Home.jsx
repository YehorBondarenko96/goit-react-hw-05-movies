import { PopularFilms } from "components/APIsResults/APIsResults";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Loader } from "components/Loader/Loader";

const Home = () => {
    const [popularFilms, setPopularFilms] = useState([]);
    const location = useLocation();
    const [indicatorLoader, setIndicatorLoader] = useState(true);

    useEffect(() => {
        const searchPopularFilms = async () => {
            try{
                const result = await PopularFilms();
                setPopularFilms(result);
            } catch (error) {
                console.error("Error:", error.message);
            };
            setIndicatorLoader(false)
        };
        searchPopularFilms()
    }, []);

    return(
        <div>
            {indicatorLoader && <Loader />}
            <h2>Trending today</h2>
            <ul>
                {popularFilms.map(popularFilm => 
                    <li key={popularFilm.id}>
                        <Link to={`/movies/${popularFilm.id}`} state={{from: location}}>
                        {popularFilm.title}
                        </Link>
                    </li>
                )}
            </ul>
        </div>
    )
};

export default Home;