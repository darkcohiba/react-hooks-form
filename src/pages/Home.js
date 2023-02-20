import { useEffect, useState } from "react";

function Home() {
    const [movies, setMovies] = useState({})

    useEffect(()=>{
        fetch('http://localhost:3000/movies')
        .then(response => response.json())
        .then(data => setMovies(data))

    },[])
    return (
        <div>

        </div>
    );
}

export default Home;




