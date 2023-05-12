import Home from './pages/home/Home';
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import MyList from './component/list/mylist/MyList';
import Navbar from './component/navbar/Navbar';

function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Wishlist" element={<MyList/>} />
        <Route path="/movies" element={<Home/>} />
        <Route path="/series" element={<Home/>} />
        <Route path="/action" element={<Home/>} />
        <Route path="/comedy" element={<Home/>} />
        <Route path="/drama" element={<Home/>} />
        <Route path="/thriller" element={<Home/>} />
        <Route path="/horror" element={<Home/>} />
        <Route path="/crime" element={<Home/>} />
        <Route path="/drama" element={<Home/>} />
        <Route path="/documentary" element={<Home/>} />
      </Routes>
    </Router>
    </>
    // <MovieList/>
  );
}

export default App;
