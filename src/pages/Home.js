import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";

function Home() {
    const [movies, setMovies] = useState([])

    useEffect(()=>{
        fetch('http://localhost:3000/movies')
        .then(response => response.json())
        .then(data => setMovies(data))
    },[])

    return (
        <div>
            {movies?.map(movie=>(
            <MovieCard 
                movie={movie}
                key={movie.id}
            />
    ))}
        </div>
    );
}

export default Home;




