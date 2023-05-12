import React, { useContext, useState } from 'react'
import { Context } from '../../context/Context'
import Movies from './Movies'
import Navbar from '../../navbar/Navbar'
import './MyList.scss'

const MyList = () => {
  const {movies, watchlist} = useContext(Context)

  return (
    <div className="lists" >
      <Navbar/>
        {
        watchlist && watchlist.map((response, key) => {
          return (
            <Movies info={response} index={key}/>
          )
        })
      }
    </div>
  )
} 

export default MyList;