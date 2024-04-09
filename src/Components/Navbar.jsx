import { NavLink } from "react-router-dom"

const Navbar = () => {
    return <>
        <nav>
            <NavLink to={'/'}>Dragons</NavLink>
            <NavLink to={'/knight'}>Knights</NavLink>
        </nav>
    </>
}

export default Navbar