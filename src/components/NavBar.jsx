import "./NavBar.css"

const NavBar = () => {
    return (
        <nav>
            <p className="navbar-logo">&lt;alsarria/&gt;</p>
            <ul>
                <li><p>About</p></li>
                <li><p>Experience</p></li>
                <li><p>Portfolio</p></li>
                <li><p>Contact</p></li>
            </ul>
            <ul>
                <li><p>Github</p></li>
                <li><p>LinkedIn</p></li>
                <li><p>Slack</p></li>
                <li><p>Discord</p></li>
            </ul>
        </nav>
    );
};

export default NavBar;
