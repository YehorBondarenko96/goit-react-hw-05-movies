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
        <main>
            <ul>
                {popularFilms.map(popularFilm => 
                    <li key={popularFilm.id}>{popularFilm.title}</li>
                )}
            </ul>
        </main>
    )
};

export default Home;