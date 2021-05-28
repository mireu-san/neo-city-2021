import "./Portfolio.scss";

export default function Portfolio() {
    return (
        <div className="portfolio" id="portfolio">
            <h1>Portfolio</h1>
            <ul>
                <li>Featured</li>
                <li>App 1</li>
                <li>App 2</li>
                <li>App 3</li>
                <li>App 4</li>
            </ul>
            <div className="container">
                <div className="item">
                    <img src="" alt="" />
                    <h3>App</h3>
                </div>
            </div>
        </div>
    )
}
