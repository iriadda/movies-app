import type {FC} from "react";
import './GenreBadge.css'

interface GenreBadgeProps {
    name: string;
    isActive?: boolean;
    onClick?: () => void;
}

const GenreBadge: FC<GenreBadgeProps> = ({name, onClick, isActive = false}) => {

    return (
        <li>
            <a href="#" onClick={(e) => {
                e.preventDefault();
                onClick?.();
            }} className={`genre-badge ${isActive ? 'active' : ''}`}
            >{name}
            </a>
        </li>

    );
};
export default GenreBadge;