import { useState } from "react";
import { useForm } from "react-hook-form";
import postData from "../hooks/usePostHook";

function MovieForm() {
    const [id, setId] = useState(0)

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();


    const onSubmit = (data) => {
        setId(id + 1)
        // console.log({...data, id: data.releaseYear});
        // fetch("http://localhost:3000/movies",{
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify({...data, id: data.releaseYear})
        // })
        // .then(response => response.json())
        // .then(data => console.log(data))
        // .catch(err => console.log(` error: ${err}`))
        postData("http://localhost:3000/movies", {...data, id: id})
    };

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label>Movie Name:</label>
                <input placeholder="enter your name" {...register("name", { required: true })} />
                {errors.name && <p>This field is required</p>}
                <br></br>
                <label>Movie Genre:</label>
                <input placeholder="movie genre" {...register("genre", { required: true })} />
                {errors.genre && <p>This field is required</p>}
                <br></br>
                <label>Movie Release Year:</label>
                <input placeholder="movie release year" {...register("releaseYear", { required: true, maxLength: 4 })} />
                {errors.releaseYear && <p>This field is required and must be no longer then 4 numbers</p>}
                <br></br>
                <label>Movie Poster URL:</label>
                <input placeholder="movie poster URL" {...register("PosterURL", { required: true })} />
                {errors.PosterURL && <p>This field is required</p>}
                <br></br>
                <label>Movie Website:</label>
                <input placeholder="website" {...register("Website", { required: true })} />
                {errors.Website && <p>This field is required</p>}
                <br></br>
                <input type="submit" />
            </form>
            
        </div>
    );
}

export default MovieForm;