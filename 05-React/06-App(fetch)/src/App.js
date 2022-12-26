import React,{useState , useEffect, useCallback} from 'react';

import MoviesList from './components/MoviesList';
import './App.css';
import Forms from './components/Forms';

function App() {
  const[movies, setMovies] = useState([])
  const[isLoading , setIsLoading] = useState(false)
  const [error , setError] = useState(null)

  
  let timeInterval;
  
  const fetchMovieHandler = useCallback( async()=>{
    console.log("fetching")
    setIsLoading(true);
    setError(null)
    try{
    const response = await fetch(`https://react-movies-app-93087-default-rtdb.firebaseio.com/movies.json`)
    if(!response.ok){
      throw new Error("Something went wrong  ...Retrying !")
    }
    const data = await response.json();
  //  console.log(data)

  const loadedMovies =[];
  for (const key in data){
    loadedMovies.push({
      id : key,
      title : data[key].title,
      openingText : data[key].openingText,
      releaseDate : data[key].releaseDate
    })
  }
   
  console.log(loadedMovies)

    const transformedMovies = loadedMovies.map(movieData=>{
      return {
        id: movieData.id,
        title: movieData.title,
        openingText : movieData.openingText,
        releaseDate : movieData.releaseDate
      }
    })
    setMovies(transformedMovies)
    console.log("fetching completed")
    }catch(error){
       setError(error.message)
    }
  setIsLoading(false)
  } ,[]
  )

  async function addMovieHandler(movie){
    try{
    const response = await fetch(`https://react-movies-app-93087-default-rtdb.firebaseio.com/movies.json`,{
      method:'POST',
      body: JSON.stringify(movie),
      headers:{
        'Content-Type' : 'application/json'
      }
    })

    const data = await  response.json();
    console.log(data);
    fetchMovieHandler();
  }catch(error){
    console.log(error.message)
  }
  }

  async function deleteMovieHandler(id){
    try{
    const response = await fetch(`https://react-movies-app-93087-default-rtdb.firebaseio.com/movies.json/${id}`,{
      method:'DELETE',
      headers:{
        'Content-Type' : 'application/json'
      }
    })

    const data = await  response.json();
    fetchMovieHandler();
  }catch(error){
    console.log(error.message)
  }
  }

  useEffect(()=>{
    fetchMovieHandler()
  } , [fetchMovieHandler])

  if(error){
    timeInterval = setTimeout(fetchMovieHandler , 5000)
   }

  function cancelFetch(){
    clearInterval(timeInterval)
    setError(null)
  }

  let content = <p>Found no movies</p>
  if(movies.length >0){
    content = <MoviesList onClick={deleteMovieHandler} movies={movies} />
  }
  if(error){
    content = <p>{error}</p>
  }
  if(isLoading){
    content=<p>Loading ...</p>
  }

  return (
    <React.Fragment>
      <section>
        <Forms onAddMovie={addMovieHandler} />
      </section>
      <section>
        <button onClick={fetchMovieHandler}>Fetch Movies</button>
      </section>
      <section>
        {content}
      </section>
      <section>
        <button onClick={cancelFetch}>Cancel Fetch</button>
      </section>
    </React.Fragment>
  );
}

export default App;
