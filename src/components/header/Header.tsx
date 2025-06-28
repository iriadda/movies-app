import {type FormEvent, useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import logo from '../../assets/logo.svg'
import './headerStyle.css'
import UserInfo from "../userInfo/UserInfo.tsx";

const Header = () => {
    const [query, setQuery] = useState('');
    const navigate = useNavigate();

    const handleSearch = (e: FormEvent) => {
        e.preventDefault();
        if (!query.trim()) return;
        navigate(`/search?query=${encodeURIComponent(query.trim())}`);
        setQuery('');
    };

    return (
        <header>
            <Link to={'/'}> <img src={logo} alt="TMDb Logo" className="logo"/></Link>


            <form onSubmit={handleSearch}>
                <input
                    type="text"
                    placeholder="Search movies..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}

                />
                <button type="submit" className={'headerButton'}>Search</button>
            </form>
            <UserInfo/>
        </header>
    );
};

export default Header;


