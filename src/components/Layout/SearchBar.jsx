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
                console.log(searchKeyCopy);
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
    // const myTags = () => {
    //     let ret = [];
    //     for (let i = 0; i <= 2114; ++i) {
    //         ret.push(<option value={TagList.Tags[i]} key={i} />);
    //     }
    //     return ret;
    // }

    const items = () => {
        let ret = [];
        ret.push({
            key: 0,
            label: searchKeyCopy + 'bb'
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
        // setSearchKeyCopy(selectedItem.label);
    });

    return (
        <>
            {/* <form className='navbar__search-wrapper' onSubmit={e => e.preventDefault()}> */}
            {/* <label style={{ width: '100%' }}>
                    <input list="search"
                        value={searchKeyCopy}
                        onChange={e => setSearchKeyCopy(e.target.value)}
                        placeholder='Search' ref={searchRef} name="myBrowser" style={{ backgroundImage: `url(${search})` }} />
                </label>
                <datalist id="search">
                    {myTags()}
                </datalist> */}
            {/* <template id="resultstemplate">
                    <option>Ray0</option>
                    <option>Ray1</option>
                    <option>Ray2</option>
                    <option>Ray3</option>
                    <option>Ray01</option>
                    <option>Ray11</option>
                    <option>Ray21</option>
                    <option>Ray31</option>
                    <option>Ray02</option>
                    <option>Ray12</option>
                    <option>Ray22</option>
                    <option>Ray32</option>
                    <option>Ray012</option>
                    <option>Ray112</option>
                    <option>Ray212</option>
                    <option>Ray312</option>
                    <option>Ray03</option>
                    <option>Ray13</option>
                    <option>Ray23</option>
                    <option>Ray33</option>
                    <option>Ray013</option>
                    <option>Ray113</option>
                    <option>Ray213</option>
                    <option>Ray313</option>
                    <option>Ray023</option>
                    <option>Ray123</option>
                    <option>Ray223</option>
                    <option>Ray323</option>
                    <option>Ray0123</option>
                    <option>Ray1123</option>
                    <option>Ray2123</option>
                    <option>Ray3123</option>
                </template>
                <input type="text" name="search" id="search" placeholder="type 'r'" list="searchresults" autocomplete="off" />
                <datalist id="searchresults"></datalist> */}
            {/* </form> */}
            <form className='navbar__search-wrapper' id="catch" onSubmit={e => {
                e.preventDefault();
                // console.log(searchKeyCopy);
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