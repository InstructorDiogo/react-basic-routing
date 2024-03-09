import { NavLink } from "react-router-dom"; 

function Navbar() {

    const isSelected = ({ isActive }) => isActive ? "selected" : ""

    return (
        <nav className="Navbar">
            <ul>
                <NavLink className={isSelected} to="/"> Home </NavLink>         
                <NavLink className={isSelected} to="/about"> About </NavLink>  
                <NavLink className={isSelected} to="/services"> Services </NavLink>
                <NavLink className={isSelected} to="/dashboard"> Dashboard </NavLink>
                <NavLink className={isSelected} to="/projects"> Projects </NavLink>
            </ul>
        </nav>
    );
}

export default Navbar;
