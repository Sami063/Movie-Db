// import React, { Component, createContext, useEffect, useState } from 'react'
// import axios from 'axios';

// export const Context = createContext();

// class ContextProvider extends Component {
//     state = {
//         modal: false,
//         data: [],
//         movie: [],
//     };

//   // Queck view of the movie info
  
//    useEffect(() => {
//     axios.get('https://feed.entertainment.tv.theplatform.eu/f/jGxigC/bb-all-pas?form=json&lang=da&byProgramType=movie&range=10-15')
//     .then(response => {
//         setData(response.data.entries)
//     })
//     .catch(error => {
//         console.log(error)
//       })
//     },[])

//     // console.log(data)
    
//   function showModal(id) {
//     setModal(true);

//     // Find specifik movie by id 
//     data.forEach(movie => {
//       if(movie.id === id) {
//         setMovie(movie)
//         // console.log(movie)
//       }
//     });
//   }

//   // const [movieType, setMovieType] = useState([])
//   // function HandleType(type) {
//   //   alert(type)
//   //   useEffect(() => {
//   //     const getMovies = async () => {
//   //       try {
//   //         const res = await axios.get(`https://feed.entertainment.tv.theplatform.eu/f/jGxigC/bb-all-pas?form=json&lang=da&byProgramType=${type}&range=1-20`)
//   //         setMovieType(res.entries)
//   //       }
//   //       catch(err) {
//   //         console.log(err)
//   //       }
//   //     }
//   //     getMovies()
//   //   }, [])
//   // }
//   render() {
//     return (
//     <Context.Provider value={{...this.state}}>
//         {this.props.children}
//     </Context.Provider>
//     );
//   } 
// }

// export default ContextProvider;
