import './Home.scss';
import Navbar from '../../component/navbar/Navbar';
import Featured from '../../component/featured/Featured';
import List from '../../component/list/List';
import MovieDetail from '../watch/MovieDetail';
import { Component, useContext, useEffect, useState } from 'react';
import { Context } from '../../component/context/Context';
import axios from 'axios';
const Home = () => {

    const {movies, movie, setGenre} = useContext(Context)

    function chunkArray(myArray, chunkSize)  {
        let result = [];
        if(myArray.length) {
            result.push(myArray.splice(0, chunkSize));
        }
        return result;
    }
    const movieList = chunkArray(movies, 10);
    const arr = movieList
    // console.log(arr.length);

    console.log(movieList.length);
    arr.forEach((movie, index) => {
        // console.log(movie[index]);
    })

    return (
        <div className="home" >
            <Featured/>
            <MovieDetail movie={movie}/>
            {
                <>
                <List movie={movies}/>
                <List movie={movies}/>
                <List movie={movies}/>
                </>
            } 
        </div> 
    )
}

export default Home; 