import { useState } from "react";
import PortfolioList from "../PortfolioList/PortfolioList";
import "./Portfolio.scss";

export default function Portfolio() {
    
    const [ selected, setSelected ] = useState("featured")
    const list = [
        {
            id: "featured",
            title: "Featured"
        },
        {
            id: "mobile",
            title: "G&K talk"
        },
        {
            id: "react-movie",
            title: "React movie"
        },
    ]
    
    return (
        <div className="portfolio" id="portfolio">
            <h1>Portfolio</h1>
            <ul>
                {list.map(item => (
                    <PortfolioList 
                    title={item.title} 
                    active={selected === item.id}
                    setSelected={setSelected}
                    id={item.id}
                />
            ))}
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
