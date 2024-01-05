import { PopularFilms } from "components/APIsResults/APIsResults";

const Home = async() => {
    const popularFilms = await PopularFilms();
    console.log('popularFilms: ', popularFilms);

    return(
        <main>
            {/* <ul>
                {popularFilms.map(popularFilm => 
                    <li>{popularFilm.title}</li>
                )}
            </ul> */}
        </main>
    )
};

export default Home;