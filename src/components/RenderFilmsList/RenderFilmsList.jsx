import { Link } from "react-router-dom";

const RenderFilmsList = ({filmsList, location}) => {
    return(
        <>
        {filmsList &&
            (<ul>
            {filmsList.map(film => 
                <li key={film.id}>
                    <Link to={`/movies/${film.id}`} state={{from: location}}>
                    {film.title}
                    </Link>
                </li>
            )}
        </ul>)
    }
        </>
    )
};

export default RenderFilmsList;