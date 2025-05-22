import { Link } from "react-router-dom";

export default function Nav() {
    return (
        <nav>
            <ul style={{
            color: "orange",
            display: "flex",
            justifyContent: "space-around"
        }}>

                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/ahsahsah">Click this for an error message!!!</Link>
                </li>
            </ul>
        </nav>
    );
}