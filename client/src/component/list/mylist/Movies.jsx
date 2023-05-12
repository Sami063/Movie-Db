import { AddCircleOutline, InfoOutlined, RemoveCircleOutlined } from '@material-ui/icons'
import React, { useContext, useEffect, useState } from 'react'
import { Context } from '../../context/Context'
import ListItem from '../ListItem'
import './Movies.scss'

const Movies = (movie) => {

  const [isHovered, setIsHovered] = useState();
  const {watchlist, setWatchlist} = useContext(Context)
  let index = movie.index;

  function removeItem(id) {
    if(watchlist.length > 0) {
      const filtered = watchlist.filter((movie) => {
        return movie.id !== id
      })
      setWatchlist(filtered)
    }
  }
  let arr = movie.info.plprogram$thumbnails['orig-93x165']
  let value = null
  if(arr === undefined) {
      value = null
  } else {
      value = arr['plprogram$url'] // The url image
  }
  return (
    <>
      <div className="card" 
      // style={{left: isHovered && index * 225}}
      onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
        <img src={value}/>
        {
          isHovered && (
          <>
          {/* <video src={movie.plprogramavailability$media[1].plmedia$publicUrl} autoPlay={true} loop/> */}
          <div className="cardInfo">
            <div className="icons">
              <InfoOutlined className='icon'/>
              <RemoveCircleOutlined className='icon' onClick={() => removeItem(movie.info.id)}/>
            </div>
            <div className="desc">
              <p>{movie.info.description}</p> 
            </div>
            <div className="genre">
            {movie.info.plprogram$programType + ' | ' + movie.plprogram$year}
            </div>
          </div>
          </>
          )
        }
      </div>
    </>
  )
} 

export default Movies







// return (
//     <>
//     <Navbar/>
//     <div className="mylist"  >
//     {
//       mylist.map(movie => {
//         return (
//           <>
//             <div className="card" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
//               <img src='https://static1.srcdn.com/wordpress/wp-content/uploads/2020/11/Matrix-4.jpg'/>
//               {
//                 isHovered && (
//                 <>
//                 {/* <video src={movie.plprogramavailability$media[1].plmedia$publicUrl} autoPlay={true} loop/> */}
//                 <div className="cardInfo">
//                   <div className="icons">
//                     <InfoOutlined className='icon'/>
//                     <RemoveCircleOutlined className='icon'/>
//                   </div>
//                   <div className="desc">
//                     <p>{movie.description}</p> 
//                   </div>
//                   <div className="genre">
//                   {movie.plprogram$programType + ' | ' + movie.plprogram$year}
//                   </div>
//                 </div>
//                 </>
//                 )
//               }
              
//             </div>
//           </>
//         )
        
//       })
//     }
//     </div>
//     </>
    
//   )