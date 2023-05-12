import './Navbar.scss'
import './MediaScreen.scss'
import { BrowserRouter as Router, Routes, Route, Link, redirect} from 'react-router-dom'
import {NotificationImportant, NotificationsActiveOutlined, Search, ViewListTwoTone} from '@material-ui/icons'
import { useContext, useEffect, useRef, useState } from 'react';
import { Context } from '../context/Context';
import axios from 'axios';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false)
    const [showSearchInput, setShowSearchInput] = useState(false)

    const {setGenre} = useContext(Context)
    // If isScrolled the navbar will have a background
    window.onscroll = () => {
        setIsScrolled(window.pageYOffset === 0 ? false : true)
        return () => window.onscroll = null;
    }

    const [closeNavbar, setCloseNavbar] = useState(true);
    const listRef = useRef();
    
    function openNavbar(closeNavbar) {
        if(closeNavbar) {
            listRef.current.style.display = 'block';
            listRef.current.style.transition = '5s';
            // listRef.current.style.height = '99vh';
            setCloseNavbar(false);
        } else {
            listRef.current.style.display = 'none';

            setCloseNavbar(true)
        }
    }
    
    function handleChange() {
        if('home') {
            setGenre(null)
        }
    }

    return (
        <div className="navbar" style={{background: isScrolled && 'black'}}>
            {/* on media screen only */}
            <div className="topNavbar"> 
                <div className="sidebar" onClick={() => openNavbar(closeNavbar)}>
                    <span className="sidebar-item"></span>
                    <span className="sidebar-item item" ></span>
                    <span className="sidebar-item"></span>
                </div>
            </div>
            <div className="container" 
            // style={{display: closeNavbar && 'none'}}
            ref={listRef}>
                <div className="left">
                    <Link to='/'>
                        {/* home -> renders the movies */}
                        <span onClick={() => handleChange('home')}>Home</span>
                    </Link>
                    <Link to='/movies'>
                        <span onClick={() => setGenre('movies')}>Movies</span>
                    </Link>
                    <Link to='/series'>
                        <span onClick={() => setGenre('series')}>Series</span>
                    </Link>
                    <Link to='/action'>
                        <span onClick={() => setGenre('action')}>Action</span>
                    </Link>
                    <Link to='/comedy'>
                        <span onClick={() => setGenre('comedy')}>Comedy</span>
                    </Link>
                    <Link to='/drama'>
                        <span onClick={() => setGenre('drama')}>Drama</span>
                    </Link>
                    <Link to='/thriller'>
                        <span onClick={() => setGenre('Thriller')}>Thriller</span>
                    </Link>
                    <Link to='/crime'>
                        <span onClick={() => setGenre('Crime')}>Crime</span>
                    </Link>
                    <Link to='/horror'>
                        <span onClick={() => setGenre('Horror')}>Horror</span>
                    </Link>
                    <Link to='/documentary'>
                        <span onClick={() => setGenre('documentary')}>Documentary</span>
                    </Link>
                    <Link to='/wishlist'>
                        <span>Wishlist</span>
                    </Link>
                </div>
                <div className="right">
                    <input type="text" className="search-input" placeholder="Search"
                    style={{display: !showSearchInput && 'none'}}/>
                    <Search className='icons' onClick={() => setShowSearchInput(true)}/>
                    <NotificationsActiveOutlined className='icons'/>
                </div>
            </div>
        </div>
    )
}

export default Navbar;

// {
//     arr.map((value) => {
//         return (
//             <Link to={navigateTo.current}>
//                 <span onClick={() => HandleType(value)}>{value}</span>
//             </Link>
//         )
//     })
// }