import { Link } from "react-router-dom";

const RenderFilmsList = ({filmsList, location}) => {
    return(
        <>
        {filmsList &&
            (<ul>
            {filmsList.map(Film => 
                <li key={Film.id}>
                    <Link to={`/movies/${Film.id}`} state={{from: location}}>
                    {Film.title}
                    </Link>
                </li>
            )}
        </ul>)
    }
        </>
    )
};

export default RenderFilmsList;