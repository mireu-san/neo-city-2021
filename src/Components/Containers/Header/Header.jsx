import "./Header.scss";

export default function Header({ menuOpen, setMenuOpen }) {
    return (
        <div className={"header " + (menuOpen && "active")}>
            <div className="wrapper">
                <div className="left">
                    <a href="#home" className="logo">
                        Mirue Chronicle
                    </a>
                    <div className="itemContainer">
                        Welcome! I am React.js developer enthusiast
                    </div> 

                </div>
                <div className="right">
                    <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                    {/* for dynamic animation hamburger bar - line1~3 */}
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>
        </div>
    );
}
