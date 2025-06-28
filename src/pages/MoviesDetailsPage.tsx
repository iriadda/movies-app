import {useParams} from "react-router-dom";
import MovieInfo from "../components/movieInfo/MovieInfo.tsx";


const MoviesDetailsPage = () => {
    const {id} = useParams()

    return (
        <>
            <MovieInfo id={id}/>
        </>
    );
};
export default MoviesDetailsPage;