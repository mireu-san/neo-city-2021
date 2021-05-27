import "./Header.scss";

export default function Header({ menuOpen, setMenuOpen }) {
    return (
        <div className={"header " + (menuOpen && "active")}>
            <div className="wrapper">
                <div className="left">
                    <a href="#home" className="logo">
                        Mirue Chronicle
                    </a>
                    {/*<div className="itemContainer">
                        Forget this area - use only to add text on header
                    </div> 
                    */}
                </div>
                <div className="right">
                    <div className="hamburger" onCLick={() => setMenuOpen(!menuOpen)}>
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
