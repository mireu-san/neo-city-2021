import "./Portfolio.scss";

export default function Portfolio() {
    return (
        <div className="portfolio" id="portfolio">
            <h1>Portfolio</h1>
            <ul>
                <li className="active">Featured</li>
                <li>App 1</li>
                <li>App 2</li>
                <li>App 3</li>
                <li>App 4</li>
            </ul>
            <div className="container">
                <div className="item">
                    <img 
                        src="https://cdn.pixabay.com/photo/2020/02/22/11/09/anemone-4870275_1280.jpg" 
                        alt=""
                />
                    <h3>App</h3>
                </div>
            </div>
        </div>
    )
}
