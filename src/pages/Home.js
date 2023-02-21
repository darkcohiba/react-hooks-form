import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import useFetch from "../hooks/useFetchHook";

function Home() {
    const [url, setUrl] = useState("http://localhost:3000/movies")

    const { isLoading, serverError, apiData } = useFetch(url);

    if (isLoading) return <h2>Loading...</h2>

    if (serverError) return <h2>ERROR...</h2>
    
    return (
        <div>
            {apiData?.map(movie=>(
            <MovieCard 
                movie={movie}
                key={movie.id}
            />
    ))}
        </div>
    );
}

export default Home;




