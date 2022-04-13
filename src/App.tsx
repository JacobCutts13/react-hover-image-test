import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Movie from "./components/Movie";
import Filter from "./components/Filter";

export interface IMovie {
  title: string;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
}

function App(): JSX.Element {
  const [popMovies, setPopMovies] = useState<IMovie[]>([]);
  const [filteredMovies, setFilteredMovies] = useState<IMovie[]>([]);
  const [filter, setFilter] = useState<number>(0); //0=all 28=action 35=comedy
  const [hoverID, setHoverID] = useState<number>(0)

  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=43b6b5ee0e7f808c5d3d5f89eb9f269d&language=en-US&page=1"
    );
    const moviesObj = await data.json();
    const movies: IMovie[] = moviesObj.results;
    setPopMovies(movies);
    setFilteredMovies(movies);
  };

  return (
    <div className="app">
      <h1>Movies</h1>
      <Filter
        filter={filter}
        setFilter={setFilter}
        setFilteredMovies={setFilteredMovies}
        popMovies={popMovies}
      />
      <motion.div layout className="movies" key="movies-motion">
        <AnimatePresence>
          {popMovies.length > 1 &&
            filteredMovies.map((movie: IMovie) => (
              <div key={movie.title}>
                <Movie movie={movie} hoverID={hoverID} setHoverID={setHoverID}/>
              </div>
            ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

export default App;
