import { PopularFilms } from "components/APIsResults/APIsResults";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Loader } from "components/Loader/Loader";
import RenderFilmsList from "components/RenderFilmsList/RenderFilmsList";

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
            <h2 style={{marginLeft: '20px'}}>Trending today</h2>
            <RenderFilmsList filmsList={popularFilms} location={location} />
        </div>
    )
};

export default Home;