import { Add, AddCircleOutline, AddOutlined, ExpandMore, InfoOutlined, PlayArrow, PlayCircleFilled, RemoveCircleOutlined } from '@material-ui/icons';
import { useState, Alert, useContext, useEffect } from 'react';
import MovieDetail from '../../pages/watch/MovieDetail';
import './ListItem.scss';
import { Context } from '../context/Context';
import { useRoute } from 'react-router-dom';
import { HttpStatusCode } from 'axios';
const ListItem = (movie, {removeItem}) => {
    const {AddToList} = useContext(Context)
    
    let index = movie.index; // It's a key for each movies, 0 to index number
    let trailer = null // defining trailer video for midleware api
    // When i hover over the movie, trailer will play
    const [isHovered, setIsHovered] = useState();
    const [disabled, setDisabled] = useState(false);
    const {modal, viewDetail} = useContext(Context);

    let arr = movie.info.plprogram$thumbnails['orig-93x165']
    let value = null

    if(arr === undefined) {
        value = null
    } else {
        // The url image
        value = arr['plprogram$url'] 
    }
    
    // If there is no movie trailer it will return null else returning it
    if(movie.info.plprogramavailability$media[1] === undefined || movie.info.plprogramavailability$media[1] === null) {
        // return null
        trailer = 'null'
    } 
    else {
        trailer = movie.info.plprogramavailability$media[1].plmedia$publicUrl;
    }
    // -----------------------  Main return -----------------------
    return (  
    <>
    {/* // isHovered ? key * 225 -50 + key*2.5 : null */}
    <div className="listItem" 
    style={{left: isHovered && index * 225 -175 + index*2.5, filter: modal && 'blur(9px)' }} 
    onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} >
        {/* I had a problems with status code of 412 */}
        <img src={value} />
        {
            isHovered &&
            (
            <> 
            <video src={trailer} autoPlay={true} loop/>
            <div className="itemInfo">
                <div className="itemInfoTop">
                    <div className="icons">
                        <PlayCircleFilled className="icon"/>
                        {disabled ? (
                            <RemoveCircleOutlined className='icon' onClick={() => removeItem(movie.info.id, setDisabled(false))}/>
                        ) : (
                        <AddCircleOutline className='icon' onClick={() => AddToList(movie.info.id, setDisabled(true))}/>
                        )
                        }
                        <ExpandMore className='detailIcon' onClick={() => viewDetail(movie.info.id)}/>
                    </div>
                    <div className="desc">
                     {movie.info.description}
                    </div>
                    <div className="genre">
                        {movie.info.plprogram$programType + ' | ' + movie.info.plprogram$year}
                    </div>
                </div>
            </div>
            </>
            )}
    </div>
    </>
    )
}


export default ListItem
