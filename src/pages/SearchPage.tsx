import Search from "../components/search/Search.tsx";
import {useSearchParams} from "react-router-dom";

const SearchPage = () => {
    const [searchParams] = useSearchParams();
    const query = searchParams.get('query');

    return (
        <>
            <Search query={query}/>
        </>
    );
};
export default SearchPage;