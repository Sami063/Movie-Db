import './List.scss'
import ListItem from './ListItem'
import {useEffect, useRef, useState} from 'react';
import axios from 'axios';
import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from '@material-ui/icons';
const List = ({movie}) => {

    const listRef = useRef();
    const [slideNumber, setSlideNumber] = useState(0)
    const [isHovered, setIsHovered] = useState(false)

    // direction info - left/right
    // right: it will move to the X axis 'card width + the current distance'
    // left: it will move to the X axis '-card width + the current distance'
    const handleClick = (direction) => {
        // get current position
        let distance = listRef.current.getBoundingClientRect().x - 62 // 58
        console.log(distance)
        if(direction === 'left' && slideNumber > 0) {
            setSlideNumber(slideNumber - 1)
            listRef.current.style.transform = `translateX(${256 + distance}px)`
        } 
        if(direction === 'right' && slideNumber < 10){
            setSlideNumber(slideNumber + 1)
            listRef.current.style.transform = `translateX(${-256 + distance}px)`
        }
    }
    
  return (
    <>
    {movie.length > 0 ? (
    <div className="list" style={{}}>
        <div className="wrapper" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
            <ArrowBackIosOutlined className='slideArrow left' onClick={() => handleClick('left')} 
            style={{display: slideNumber < 1 ? 'none' : null}} />
            <div className="container" ref={listRef} >
                {
                   movie.map((response, i) => {
                    return (
                        <ListItem info={response} index={i} key={i}/>
                    )
                   })
                }
            </div>
            <ArrowForwardIosOutlined className='slideArrow right' onClick={() => handleClick('right')} style={{display: isHovered ? null : 'none'}}/>
        </div>
    </div>
    ) : <h1>No movies avalaible</h1>}
   </> 
  )
}

export default List;
