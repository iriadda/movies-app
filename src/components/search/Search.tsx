import {type FC, useEffect, useState} from "react";
import {movieService} from "../../services/movieService.tsx";
import type {IMovieModel} from "../../models/IMovieModel.ts";
import MoviesListCard from "../moviesListCard/MoviesListCard.tsx";
import Pagination from "../pagination/Pagination.tsx";
import './search.css'

interface SearchProps {
    query?: string | null
}

const Search: FC<SearchProps> = ({query}) => {
    const [movies, setMovies] = useState<IMovieModel[]>([])
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    useEffect(() => {
        const fetchData = async () => {
            const {data} = await movieService.searchMovies(query, page)
            setTotalPages(Math.min(data.total_pages, 500));

            const results = await Promise.allSettled(
                data.results.map((item) => movieService.getMovieById(String(item.id)))
            );

            const successfulMovies = results
                .filter(result => result.status === 'fulfilled')
                .map(result => (result as PromiseFulfilledResult<{ data: IMovieModel }>).value.data);

            setMovies(successfulMovies);
        };

        if (query) fetchData()
    }, [query, page]);


    return (
        <div className={'search'}>
            <h1>Search results for {query}</h1>
            {!movies.length && <p>No results</p>}
            <ul className={'moviesList'}>{movies.map((movie) => <MoviesListCard movie={movie} key={movie.id}/>)}</ul>
            {!!movies.length &&
                <Pagination currentPage={page} totalPages={Math.min(totalPages, 500)} onPageChange={setPage}/>}

        </div>
    );
};
export default Search;