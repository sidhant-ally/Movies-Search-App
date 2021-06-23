import React from "react";
import MovieCard from "../MovieCard";
import "./index.css";

const MoviesGrid = ({ movies }) => {
    return (
        <div className="grid">
            {movies.length === 0 ? (
                <div> No Movies Found</div>
            ) : (
                <div className="Products">
                    {movies.map((item, index) => (
                        <MovieCard movie={item} key={index} />
                    ))}
                </div>
            )}
        </div>

    );
}


export default MoviesGrid;
