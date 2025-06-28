import {useEffect, useState} from "react";
import type {IMovieShortModel} from "../../models/IMovieModel.ts";
import {movieService} from "../../services/movieService.tsx";
import MoviesListCard from "../moviesListCard/MoviesListCard.tsx";

const PopularMovieList = () => {
    const [movies, setMovies] = useState<IMovieShortModel[]>([])
    // const [page, setPage] = useState(1);
    // const [totalPages, setTotalPages] = useState(1);


    useEffect(() => {
        movieService.getPopularMovies()
            .then(({data}) => {
                const top5 = data.results.slice(0, 5);
                setMovies(top5)
            })

    }, []);

    return (
        <>
            <h3 style={{paddingLeft: '120px', zIndex: 2}}>🔥 Popular Now</h3>
            <ul className={'moviesList'}>{movies.map((movie) => (<MoviesListCard movie={movie} key={movie.id}/>))}</ul>
            {/*{<Pagination currentPage={page} totalPages={Math.min(totalPages, 500)} onPageChange={setPage}/>}*/}
        </>
    );
};
export default PopularMovieList;