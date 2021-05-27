import "./Header.scss";

export default function Header() {
    return (
        <div className="header">
            <div className="wrapper">
                <div className="left">
                    <a href="#home" className="logo">Mirue Chronicle</a>
                    <div className="itemContainer">
                        
                    </div>
                </div>
                <div className="right">
                    <div className="hamburger">
                    {/* for dynamic animation hamburger bar - line1~3 */}
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>

                    {/* <a href="#" className="portfolio">Portfolio</a>
                    <a href="#" className="contact">Contact</a> */}
                    
                </div>
            </div>
        </div>
    )
}
