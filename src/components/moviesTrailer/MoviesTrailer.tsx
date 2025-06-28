import {type FC, useEffect, useState} from 'react';
import type {IVideo} from "../../models/IVideo.ts";
import {movieService} from "../../services/movieService.tsx";


interface Props {
    movieId: string;
}

const MovieTrailer: FC<Props> = ({movieId}) => {
    const [trailer, setTrailer] = useState<IVideo | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        movieService.getMovieVideos(movieId)
            .then(({data}) => {
                const trailerVideo = data.results.find(
                    (video) => video.type === 'Trailer' && video.site === 'YouTube'
                );
                setTrailer(trailerVideo || null);
            })
            .finally(() => setLoading(false));
    }, [movieId]);

    if (loading) return <div>Loading trailer...</div>;

    if (!trailer) return <div>No trailer found.</div>;

    return (
        <div style={{margin: '20px 0 0 150px', zIndex: 2}}>
            <h3>{trailer.name}</h3>
            <iframe
                width="560"
                height="315"
                src={`https://www.youtube.com/embed/${trailer.key}`}
                title={trailer.name}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            />
        </div>
    );
};

export default MovieTrailer;
