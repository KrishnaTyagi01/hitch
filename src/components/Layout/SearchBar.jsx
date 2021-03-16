import { Link, NavLink, Redirect, useLocation, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { logout } from '../../redux/actions/authActions';
import { useEffect, useRef, useState } from 'react/cjs/react.development';
import axios from 'axios';
import search from '../../icons/search.svg';


const SearchBar = (props) => {
    const [searchKeyword, setSearchKeyword] = useState('');
    const [goToSearchPage, setGoToSearchPage] = useState(false);
    const searchRef = useRef(null);
    const location = useLocation();


    const getTopics = (search) => {
        if (search.length !== 0) {
            let ans = "[" + "\"" + search + "\"]";
            // console.log(ans);
            return ans;
        }
    }

    useEffect(() => {
        const handleEnter = async (e) => {
            if (e.keyCode === 13) {
                setSearchKeyword(e.target.value);
                setGoToSearchPage(true);

            }
        }
        if (searchRef && searchRef.current) {
            searchRef.current.addEventListener('keyup', handleEnter);
        }
        return (() => {
            if (searchRef && searchRef.current) searchRef.current.removeEventListener('keyup', handleEnter);
        })

    }, []);

    const goToSearch = () => {
        if (location.pathname === '/search' && props.changeSearchTerm) {
            props.changeSearchTerm(searchKeyword);
            return null;
        }
        return (<Redirect to={{
            pathname: "/search",
            state: {
                topics: getTopics(searchKeyword),
            }
        }} />);
    }

    return (
        <>
            <div className='navbar__search-wrapper'>
                <input placeholder='Search' ref={searchRef} style={{ backgroundImage: `url(${search})` }} />
            </div>

            {goToSearchPage ?
                goToSearch()
                : null}
        </>
    )
}

export default SearchBar;