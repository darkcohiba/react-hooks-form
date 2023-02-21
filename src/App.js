import './App.css';
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider
} from 'react-router-dom'
import Home from './pages/Home'
import MovieForm from './pages/MovieForm';
import RootLayout from './layouts/RootLayout';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={< Home />} />
      <Route path='Movieform' element={< MovieForm />} />
    </Route>
  )
)

function App() {
  return (
    <div>
      <RouterProvider router={router} />

    </div>
  );
}

export default App;
