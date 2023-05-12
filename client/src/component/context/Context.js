import React, { createContext, useEffect, useState } from 'react'
import axios from 'axios';

export const Context = createContext();
export const ContextProvider = ({children}) => {
  const [modal, setModal] = useState(false); // If modal is true, the modal opens - 'detail page'
  const [movies, setMovies] = useState([]); // I will use it in my movie detail page
  const [data, setData] = useState([]); // I will use it in my movie detail page
  const [watchlist, setWatchlist] = useState([]); // I will have new arrays to mylist
  const [genre, setGenre] = useState()

  // let url = `${genre === '' ? `https://feed.entertainment.tv.theplatform.eu/f/jGxigC/bb-all-pas?form=json&range=1-30&byTags=genre:${genre}&byYear=2017&byProgramType=movie` : 'https://feed.entertainment.tv.theplatform.eu/f/jGxigC/bb-all-pas?form=json&lang=da&byProgramType=movie&range=1-15'}`
  let number = 40;
  useEffect(() => {
    if(genre) {
        axios.get(`https://feed.entertainment.tv.theplatform.eu/f/jGxigC/bb-all-pas?form=json&range=1-${number}&byTags=genre:${genre}&byYear=2017&byProgramType=movie`)
        .then(response => {
            setMovies(response.data.entries)
            setData(response.data.entries)
        })
    } else {
        axios.get(`https://feed.entertainment.tv.theplatform.eu/f/jGxigC/bb-all-pas?form=json&lang=da&byProgramType=movie&range=1-${number}`)
        .then(response => {
          if(response.status === 302) {
            console.log('erorr 302 accured')
          }
            setMovies(response.data.entries)
            setData(response.data.entries)
        })
        .catch(error => {
            console.log(error)
          })
    }
  }, [genre])

    // Find specifik movie by id - Queck view of the movie info
    const [movie, setMovie] = useState([])
    function viewDetail(id) {
      movies.forEach(movie => {
        if(movie.id === id) {
          setMovie(movie)
        }
      });
      setModal(true); // When opening the movie detail page/modal
    }

  // Adding movies to watchlist, if exist return null/don't add it again
  function AddToList(id) {
    movies.find(movie => {
        if(movie.id === id) {
          const newListMovie = watchlist.concat(movie)
          setWatchlist(newListMovie)
        }
      })
    }

    // Will run when ever our state changes  
    useEffect(() => {
      localStorage.setItem('watchlist', JSON.stringify(watchlist))
    })

    // UseEffect: to add object/data to local storage whenever the vale of our state changes
    useEffect(() => {
      const lists = JSON.parse(localStorage.getItem('watchlist'))
      if(lists) {
        setWatchlist(lists)
      }
    }, [])
    
  return (
    <Context.Provider value={{modal, viewDetail, movies, setModal, 
    movie, AddToList, watchlist, setWatchlist, setMovies, genre, setGenre, data}}>
        {children}
    </Context.Provider>
  );
}











// React context allow us to use data in whatever component we need in our react app without using props