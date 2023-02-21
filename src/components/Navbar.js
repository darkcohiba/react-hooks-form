import { NavLink, useNavigate } from "react-router-dom";


function Navbar() {
    return (
        <div>
            <nav>
                <NavLink to="/">Home</NavLink>
                <NavLink to="movieform">Add a Movie!</NavLink>
                <p></p>
            </nav>
        </div>
    );
}

export default Navbar;