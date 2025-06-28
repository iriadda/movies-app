import * as React from "react";
import {useEffect, useState} from "react";
import type {IMovieModel} from "../../models/IMovieModel.ts";
import {movieService} from "../../services/movieService.tsx";
import StarsRating from "../StarsRating/StarsRating.tsx";
import './MovieInfo.css'
import MoviesTrailer from "../moviesTrailer/MoviesTrailer.tsx";
import GenreBadge from "../genreBadge/GenreBadge.tsx";
import {useNavigate} from "react-router-dom";
import PopularMovieList from "../popularMovieList/PopularMovieList.tsx";


interface MovieInfoProps {
    id: string | undefined
}

const baseImgUrl = 'https://image.tmdb.org/t/p/original';
const MovieInfo = ({id}: MovieInfoProps) => {

    const [movie, setMovie] = useState<IMovieModel>()
    const navigate = useNavigate()


    useEffect(() => {
        if (id) {
            movieService.getMovieById(id)
                .then(({data}) => setMovie(data))

        }
    }, [id]);
    if (!movie) return <div>Loading...</div>;

    const bgImage: React.CSSProperties = {
        backgroundImage: `url(${baseImgUrl}${movie.backdrop_path})`,
        backgroundSize: 'cover',
        backgroundPosition: ' center',
        backgroundRepeat: 'no-repeat',
        width: '100%',
        minHeight: '600px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        padding: '40px 80px',
        color: 'white',
        position: 'relative',

    }
    const handleSelect = (id: number | null) => {
        navigate(`/?genre=${id}`)
    };

    return (

        <div style={bgImage} className={'blur'}>
            <div className={'info-container'}>

                <h1>{movie.title} </h1>
                <p>{movie.status} • {movie.release_date} • {movie.runtime} min</p>
                <ul className={'movie-genres'}>
                    {movie.genres.map((genre) => (
                        <GenreBadge name={genre.name} key={genre.id} onClick={() => handleSelect(genre.id)}/>))}
                </ul>
                {<StarsRating rating={movie.vote_average}/>}

                <p className={'movie-tagline'}>{movie.tagline}</p>

                <h4>Overview</h4>
                <p className={'movie-overview'}>{movie.overview}</p>

                {movie.homepage && (<a href={movie.homepage} target={"_blank"} className="official-site-button">
                        Visit Official Site</a>
                )}

            </div>
            <MoviesTrailer movieId={id as string}/>

            <PopularMovieList/>

        </div>

    );
};
export default MovieInfo;