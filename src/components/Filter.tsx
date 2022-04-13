import React, { useEffect } from "react";
import { IMovie } from "../App";

interface IProps {
  filter: number;
  setFilter: React.Dispatch<React.SetStateAction<number>>;
  setFilteredMovies: React.Dispatch<React.SetStateAction<IMovie[]>>;
  popMovies: IMovie[];
}

export default function Filter(Props: IProps): JSX.Element {
  useEffect(() => {
    if (Props.filter === 0) {
      Props.setFilteredMovies(Props.popMovies);
      return;
    } else {
      Props.setFilteredMovies(
        Props.popMovies.filter((movie) =>
          movie.genre_ids.includes(Props.filter)
        )
      );
    }
  }, [Props.filter]);

  return (
    <div className="filter">
      <button
        className={Props.filter === 0 ? "active" : ""}
        onClick={() => Props.setFilter(0)}
      >
        All
      </button>
      <button
        className={Props.filter === 45 ? "active" : ""}
        onClick={() => Props.setFilter(35)}
      >
        Comedy
      </button>
      <button
        className={Props.filter === 28 ? "active" : ""}
        onClick={() => Props.setFilter(28)}
      >
        Action
      </button>
    </div>
  );
}
