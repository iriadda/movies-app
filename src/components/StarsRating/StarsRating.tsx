import type {FC} from "react";
import StarRatings from "react-star-ratings";

interface RatingProps {
    rating: number;
}

const StarsRating: FC<RatingProps> = ({rating}) => {
    return (
        <>
            <StarRatings rating={rating / 2} starRatedColor="gold" numberOfStars={5} name='rating'  starDimension="20px" starSpacing="2px"/>
        </>
    );
};
export default StarsRating;