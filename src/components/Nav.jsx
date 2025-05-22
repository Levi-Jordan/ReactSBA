import { Link } from "react-router-dom"

export default function Nav(){
    return(
        <nav>
            <ul>
                <li>
                    <Link to="/">Homepage</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/ahsahsah">Click this for an error message!!!</Link>
                </li>
            </ul>
        </nav>
    );
}