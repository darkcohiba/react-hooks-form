function MovieCard({movie}) {
    return (
        <div className="movieContainer">
            <p>{movie.name}({movie.releaseYear})</p>
            <p>Genre: {movie.genre}</p>
            <img src={movie.posterUrl}/>
            <br></br>
            <a href={movie.website} target="_blank">Movie Link</a>

        </div>
    );
}

export default MovieCard;