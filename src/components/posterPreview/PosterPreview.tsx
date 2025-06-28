import type {FC} from "react";
import './PosterPreview.css'

interface posterProps {
    poster_path: string;
    title: string;
}

const PosterPreview: FC<posterProps> = ({poster_path, title}) => {
    const imgUrl = 'https://image.tmdb.org/t/p/w185'
    const placeholder = 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/800px-No-Image-Placeholder.svg.png';

    return (
        <>
             <img src={poster_path ? `${imgUrl}${poster_path}` : placeholder} alt={title} className={'poster'}/>

        </>
    );
};
export default PosterPreview;