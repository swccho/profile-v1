import {Link, NavLink} from "react-router-dom";

function Header() {
    return (
        <>
            <nav>
                <div className="logo"></div>
                <ul>
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                </ul>
            </nav>
        </>
    );
}

export default Header;
