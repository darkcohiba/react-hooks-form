import { useForm } from "react-hook-form";
import postData from "../hooks/usePostHook";

function MovieForm() {

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();


    const onSubmit = (data) => {
        console.log(data);
        fetch("http://localhost:3000/movies",{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(err => console.log(` error: ${err}`))
        //data coming through with ID
        // postData("http://localhost:3000/movies", data)
    };

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label>Movie Name:</label>
                <input {...register("name", { required: true })} />
                {errors.name && <p>This field is required</p>}
                <br></br>
                <label>Movie Genre:</label>
                <input {...register("genre", { required: true })} />
                {errors.genre && <p>This field is required</p>}
                <br></br>
                <label>Movie Release Year:</label>
                <input {...register("releaseYear", { required: true, maxLength: 4 })} />
                {errors.releaseYear && <p>This field is required and must be no longer then 4 numbers</p>}
                <br></br>
                <label>Movie Poster URL:</label>
                <input {...register("PosterURL", { required: true })} />
                {errors.PosterURL && <p>This field is required</p>}
                <br></br>
                <label>Movie Website:</label>
                <input {...register("Website", { required: true })} />
                {errors.Website && <p>This field is required</p>}
                <br></br>
                <input type="submit" />
            </form>
            
        </div>
    );
}

export default MovieForm;