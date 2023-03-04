# Steps to run website

## First step:
Open a terminal and run 
`npm install`

This will install the dependencies and scripts inside package.json onto our local respository, creating a node_modules folder, and a package-lock.json.

## Second Step:
In the same terminal run
`npm run start`

Runs the app in the development mode.\
Open [http://localhost:4000](http://localhost:4000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

## Third Step: 
Open a new terminal and run
`npm run json`

Lauches a local server with the db.json under the api directory
Open [http://localhost:3000/movies](http://localhost:3000/movies) to view it in your browser.

# Explanation of features

## UseFetchHook
This hook is designed to run a fetch request to a given URL. The fetch request is run inside a try catch block using async await. The entire try catch block is encased with a useEffect that will run when the url is changed.

The useFetch function uses 3 states to manage the data, the errors and if the data has loaded. All three of these states can be destructured from the hook when you import it into any component.
Import it like this:
```
    const { isLoading, serverError, apiData } = useFetch(url);
```

Use the error and loading states like this to prevent the page from loading with an error:

```
    if (isLoading) return <h2>Loading...</h2>

    if (serverError) return <h2>ERROR...</h2>
```

## MovieForm with React-Hook-Form 
This form is created using the `React-Hook-Form` package