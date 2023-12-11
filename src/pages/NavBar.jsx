import { NavLink } from "react-router-dom"

export default function NavBar() {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink to={"/"}>Home</NavLink>
                </li>
                <li>
                    <NavLink to={"/films"}>Films</NavLink>
                </li>
            </ul>
      </nav>
    )
}