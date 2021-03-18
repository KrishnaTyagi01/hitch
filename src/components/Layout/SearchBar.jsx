import { Link, NavLink, Redirect, useLocation, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { logout } from '../../redux/actions/authActions';
import { useEffect, useRef, useState } from 'react/cjs/react.development';
import axios from 'axios';
import search from '../../icons/search.svg';
import { TagList } from '../../API/constants';


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
    // console.log(TagList);
    const myTags = () => {
        let ret = [];
        for (let i = 0; i <= 2114; ++i) {
            ret.push(<option value={TagList.Tags[i]} />);
        }
        return ret;
    }

    return (
        <>
            <form className='navbar__search-wrapper' onSubmit={e => e.preventDefault()}>
                {/* <label for="search" >S</label>
                <input id="search" list="search" name="search" placeholder='Search' ref={searchRef} style={{ backgroundImage: `url(${search})` }} />
                <datalist id="search">
                    <option value="Edge" />
                    <option value="Firefox" />
                    <option value="Chrome" />
                    <option value="Opera" />
                    <option value="Safari" />
                </datalist> */}
                <label style={{ width: '100%' }}>
                    <input list="search" placeholder='Search' ref={searchRef} name="myBrowser" style={{ backgroundImage: `url(${search})` }} />
                </label>
                <datalist id="search">
                    {myTags()}

                </datalist>
            </form>

            {goToSearchPage ?
                goToSearch()
                : null}
        </>
    )
}

export default SearchBar;