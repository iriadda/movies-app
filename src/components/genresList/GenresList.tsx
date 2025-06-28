import {type FC, useEffect, useState} from "react";
import {movieService} from "../../services/movieService.tsx";
import type {IGenres} from "../../models/IBaseGenres.ts";
import GenreBadge from "../genreBadge/GenreBadge.tsx";
import './GenreList.css'
import {useSearchParams} from "react-router-dom";

interface Props {
    onSelect: (genreId: number | null) => void;
}

const GenresList: FC<Props> = ({onSelect}) => {
    const [genres, setGenres] = useState<IGenres[]>([])
    const [activeGenre, setActiveGenre] = useState<number | null>(null);
    const [searchParams] = useSearchParams();

    useEffect(() => {
        const genreFromQuery = searchParams.get('genre');
        const genreId = genreFromQuery ? Number(genreFromQuery) : null;
        setActiveGenre(genreId);
        onSelect(genreId);
    }, []);

    useEffect(() => {
        movieService.getGenres()
            .then(({data: {genres}}) => setGenres(genres))
    }, [])
    const handleSelect = (id: number | null) => {
        setActiveGenre(id);
        onSelect(id);
    };
    return (
        <ul className={"genresList"}>
            <GenreBadge
                name="All"
                isActive={activeGenre === null}
                onClick={() => handleSelect(null)}
            />
            {genres.map(genre => <GenreBadge name={genre.name} key={genre.id} isActive={activeGenre === genre.id}
                                             onClick={() => handleSelect(genre.id)}/>)}
        </ul>
    );
};
export default GenresList;