import React, { useEffect, useState } from 'react'
import './MovieDetail.scss'
import { Context } from '../../component/context/Context'
import { useContext } from 'react'
import axios from 'axios'
import { AddCircleOutline, Close, PlayArrow } from '@material-ui/icons'

const MovieDetail = ({movie}) => {

  // const {modal, movie, setModal} = useContext(Context) // Opening the modal
  const {modal, setModal} = useContext(Context) // Opening the modal
  
  let credit = movie.plprogram$credits // Actors/directors
  let programUrl = movie.plprogram$thumbnails // Images as url
  let image = null // Get the single image

  if(programUrl === undefined) {
      image = null
  } else { 
    let a = programUrl['orig-93x165']
    image = a['plprogram$url']
  }

  return (
    <div className="movieDetail" style={{display: modal ? null : 'none'}}>
      {
        <>
        <div className="top">
          <Close className='closeIcon' onClick={() => setModal(false)}/>
          <img src={image} 
          alt=''/>
          <div className="topIcon">
            <PlayArrow className='playArrow icon'/>
            <AddCircleOutline className='addIcon icon'/>
          </div>
        </div>
        <div className="botton">
          <div className="left">
            <div className="left-container">
              <div className="top-left">
                <span className='match item'>93 % match</span>
                <span className='year item'>1992</span>
                <span className='year item'>16+</span>
                <span className='hour item'>2 h. 55 min. </span>
                <span className='hd item'>HD</span>
              </div>
              <h1 className='title'>{movie.title}</h1>
              <div className="description">{movie.description}</div>
            </div>
          </div>
          <div className="right">
            <div className="right-container">
              Medvikende :
              <div className="actors">
                {
                  credit && credit.map((credit) => {
                    return (
                      <p><span>{credit.plprogram$creditType + ':'}</span> {credit.plprogram$personName}</p>
                    )
                  })
                }
              </div>
              <div className="genre">
                <p><span>Genre: </span>{movie.plprogram$programType}|fiction|action|</p>
              </div>
            </div>
          </div>
        </div>
        </>
      }
    </div>
    )
  }

export default MovieDetail

{/* if modal is false, close the modal else it will open the modal/detail page*/}


// movie.map((movie) => {
//   return (
//   <div className="movieDetail" style={{display: modal ? null : 'none'}}>
//     <div className="top">
//       <Close className='closeIcon' onClick={() => setModal(false)}/>
//       <img src='https://1.bp.blogspot.com/-Cw51_m69_4M/XoSyJSJrYAI/AAAAAAAAp2E/Ll-1g-0htdkwmTzxkkOjIJUdqInEyrJpQCLcBGAsYHQ/s2560/avatar-5k-k8-3840x2160.jpg' 
//       alt=''/>
//     </div>

//     <div className="botton">
//       <div className="left">
//         {/* {movie'.plprogram$credits.plprogram$creditType} */}
//         {/* <p>{movie.plprogram$credits.plprogram$personName}</p> */}
//       </div>
//       <div className="right">
//         <div className="genre">{movie.plprogram$programType}|fiction|action|</div>
//         <h1 className='title'>{movie.title}</h1>
//         <div className="description">{movie.description}</div>
//       </div>
//     </div>
//   </div>
//   )})