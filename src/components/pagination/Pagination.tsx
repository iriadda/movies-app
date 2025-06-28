import type {FC} from "react";
import './Pagination.css'


interface Props {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}

const Pagination: FC<Props> = ({currentPage, totalPages, onPageChange}) => {
    return (
        <div className={'pagination'}>
            <button disabled={currentPage === 1} onClick={() => onPageChange(1)}>First page</button>
            <button
                disabled={currentPage === 1}
                onClick={() => onPageChange(currentPage - 1)}
            >
                back
            </button>

            <span>Page {currentPage} </span>

            <button
                disabled={currentPage === totalPages}
                onClick={() => onPageChange(currentPage + 1)}
            >
                next
            </button>
            <button disabled={currentPage === totalPages} onClick={() => onPageChange(totalPages)}>Last page</button>
        </div>
    );
};

export default Pagination;
