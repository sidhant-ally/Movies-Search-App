import React from 'react';
import './index.css'

const MovieCard = (props) => {
    const { Title, Poster, Year } = props.movie
    return (
        <div className="card" >
            <div><img src={Poster} alt="Movie" /></div>
            <div className="details">
                <h4>{Title}</h4>
                <h5 style={{ color: "#009688" }}>{Year}</h5>
            </div>
        </div >
    );
}

export default MovieCard;
