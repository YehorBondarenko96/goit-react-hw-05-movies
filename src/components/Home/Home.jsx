import { PopularFilms } from "components/APIsResults/APIsResults";
import { useState, useEffect } from "react";

const Home = () => {
    const [popularFilms, setPopularFilms] = useState([]);

    useEffect(() => {
        const searchPopularFilms = async () => {
            try{
                const result = await PopularFilms();
                setPopularFilms(result);
            } catch (error) {
                console.error("Error:", error.message);
            }
        };
        searchPopularFilms()
    }, []);

    return(
        <div>
            <h2>Trending today</h2>
            <ul>
                {popularFilms.map(popularFilm => 
                    <li key={popularFilm.id}>{popularFilm.title}</li>
                )}
            </ul>
        </div>
    )
};

export default Home;