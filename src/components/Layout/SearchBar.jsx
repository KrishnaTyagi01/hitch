import { Link, NavLink, Redirect, useLocation, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { logout } from '../../redux/actions/authActions';
import { useEffect, useRef, useState } from 'react/cjs/react.development';
import axios from 'axios';
import search from '../../icons/search.svg';
import { TagList } from '../../API/constants';
import DataListInput from "../../react-datalist-input";


const SearchBar = (props) => {

    const [searchKeyword, setSearchKeyword] = useState('');
    const [searchKeyCopy, setSearchKeyCopy] = useState('');
    const [goToSearchPage, setGoToSearchPage] = useState(false);
    const searchRef = useRef(null);
    const location = useLocation();


    const getTopics = (search) => {
        if (search.length !== 0) {
            let ans = "[" + "\"" + search + "\"]";
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

    const items = () => {
        let ret = [];
        ret.push({
            key: 0,
            label: searchKeyCopy,
        });
        for (let i = 0; i <= 2114; ++i) {
            ret.push({
                key: i + 1,
                label: TagList.Tags[i],
            });
        }
        return ret;
    }


    const onSelect = ((selectedItem) => {
        setSearchKeyCopy(selectedItem.label);
    });

    return (
        <>
            <form className='navbar__search-wrapper' id="catch" onSubmit={e => {
                e.preventDefault();
            }}>
                <DataListInput
                    placeholder="Search"
                    items={items()}
                    searchRef={searchRef}
                    value={searchKeyCopy}
                    onInput={(newValue) => setSearchKeyCopy(newValue)}
                    requiredInputLength={1}
                    dropDownLength={10}
                    img={search}
                    dropdownClassName="dropDownSearch"
                    activeItemClassName="activeItem"
                    itemClassName="itemClass"
                    onSelect={onSelect}
                />
            </form>
            {goToSearchPage ?
                goToSearch()
                : null}
        </>
    )
}

export default SearchBar;