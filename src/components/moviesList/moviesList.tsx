import {movieService} from "../../services/movieService.tsx";
import {useEffect, useState} from "react";
import type {IMovieShortModel} from "../../models/IMovieModel.ts";
import MoviesListCard from "../moviesListCard/MoviesListCard.tsx";
import Pagination from "../pagination/Pagination.tsx";
import GenresList from "../genresList/GenresList.tsx";
import './moviesList.css'
import {useSearchParams} from "react-router-dom";

const MoviesList = () => {
    const [searchParams] = useSearchParams();
    const initialGenreId = searchParams.get('genre') ? Number(searchParams.get('genre')) : null;

    const [movies, setMovies] = useState<IMovieShortModel[]>([])
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [selectedGenreId, setSelectedGenreId] = useState<number | null>(initialGenreId);

    useEffect(() => {
        movieService.getMovies(page, selectedGenreId)
            .then(({data}) => {
                setMovies(data.results)
                setTotalPages(data.total_pages)
            })

    }, [page, selectedGenreId]);

    const handleGenreSelect = (genreId: number | null) => {
        setSelectedGenreId(genreId);
        setPage(1);
    };
    return (
        <>
            {<GenresList onSelect={handleGenreSelect}/>}
            <ul className={'moviesList'}>{movies.map((movie) => (<MoviesListCard movie={movie} key={movie.id}/>))}</ul>
            {<Pagination currentPage={page} totalPages={Math.min(totalPages, 500)} onPageChange={setPage}/>}
        </>
    );
};
export default MoviesList;