import { IMovie } from "../App";
import { motion } from "framer-motion";

interface IProps {
  movie: IMovie;
}

export default function Movie(Props: IProps): JSX.Element {
  return (
    <motion.div
      layout
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="movie"
      id={Props.movie.title}
    >
      <h2>{Props.movie.title}</h2>
      <img
        src={"https://image.tmdb.org/t/p/w500" + Props.movie.backdrop_path}
        alt=""
      />
    </motion.div>
  );
}
