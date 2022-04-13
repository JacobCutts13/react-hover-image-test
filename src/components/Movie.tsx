import { IMovie } from "../App";
import { motion } from "framer-motion";


interface IProps {
  movie: IMovie;
  hoverID: number;
  setHoverID: React.Dispatch<React.SetStateAction<number>>;
}

export default function Movie(Props: IProps): JSX.Element {
  const opacityPerm = Props.hoverID === Props.movie.id? 0.8: 1;
    return (
  <>    
    <motion.div
    layout
    animate={{ opacity: opacityPerm }}
    initial={{ opacity: 0 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.5 }}
    className="movie"
    id={Props.movie.id.toString()}
    >
    <h2>{Props.movie.title}</h2>
    <div className="movie-img" id={Props.movie.id.toString()+"img"}>
            <img
                src={"https://image.tmdb.org/t/p/w500" + Props.movie.backdrop_path}
                alt=""
                id={Props.movie.id.toString()}
                onMouseOver={e => (Props.setHoverID(parseInt(e.currentTarget.id)))}
                onMouseOut={() => Props.setHoverID(0)}
            />
            {Props.hoverID === Props.movie.id &&
            <>
                <div className="top-left">{Props.movie.title}</div>
                <div className="bottom-left">{Props.movie.title}</div>
            </>
            } 
    </div>
    </motion.div>    
  </>

  );
}
