import { NavLink } from "react-router-dom"

const Navbar = () => {
    return <>
        <nav className="navbar">
            <NavLink to={'/'} style={({isActive}) => isActive ? {color: "orange", fontWeight: "bold"} : {}}>Dragons</NavLink>
            <NavLink to={'/knight'} style={({isActive}) => isActive ? {color: "orange", fontWeight: "bold"} : {}}>Knights</NavLink>
        </nav>
    </>
}

export default Navbar