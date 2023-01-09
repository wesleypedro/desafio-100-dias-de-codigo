import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav>
        <Link to='/'> Home </Link>
        <Link to='1-map'> Map </Link>
        <Link to='3-hook-useState'> UseState </Link>
        <Link to='4-modal'> Modal </Link>
        <Link to='6-hook-useReducer'> UseReducer </Link>
    </nav>
  )
}
