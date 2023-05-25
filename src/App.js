import { useState } from 'react';
import './App.css';
import { Routes, Route} from 'react-router-dom';
import MovieDetail from './components/MovieDetail';
import MovieList from './components/MovieList';


function App() {

  
  let [films, setFilms] = useState([
    {
      id : 1,
      title : "nested dynamic router",
      description : "description du film 1 ici",
      link : "https://www.youtube.com/embed/lGjU0tBmP5M",
      coverImage : "https://imgur.com/zejebz.jpg"
    },
    
    {
      id : 2,
      title : "Découverte du CSS (18/31) : Media query",
      description : "description du film 2 ici",
      link : "https://www.youtube.com/embed/wu1Sk8iOPnE",
      coverImage : "https://imgur.com/zejebz.jpg"
    },

    {
      id : 3,
      title : "Pourquoi est nul",
      description : "description du film 3 ici",
      link : "https://www.youtube.com/embed/BXhaykc3uqA",
      coverImage : "https://imgur.com/zejebz.jpg"
    }, 

    {
      id : 4,
      title : "title",
      description : "description du film 4 ici",
      link : "https://www.youtube.com/embed/OP9DdpCgf6s",
      coverImage : "https://imgur.com/zejebz.jpg"
    }
  
  
  ]);

  

  return (
    <>
      <Routes>
        <Route path='/' element={<MovieList films={films}/>}/>
        <Route path='/movie/:id' element={<MovieDetail films={films}/>}/>
      </Routes>
    </>
  );
}
export default App;