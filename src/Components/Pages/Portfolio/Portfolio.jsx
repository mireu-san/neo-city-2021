import { useState, useEffect } from "react";
import PortfolioList from "../PortfolioList/PortfolioList";
import "./Portfolio.scss";
import { featuredPortfolio, 
    mobilePortfolio, 
    reactPortfolio } 
    from "../../data";




export default function Portfolio() {
    
    const [ selected, setSelected ] = useState("featured")
    const [ data, setData ] = useState([]);
    const list = [
        {
            id: "featured",
            title: "React.js"
        },
        {
            id: "mobile",
            title: "HTML/CSS"
        },
        {
            id: "react-movie",
            title: "Backend"
        },
    ];

    useEffect(() => {
        
        switch(selected){
            case "featured":
                setData(featuredPortfolio);
                break;
            case "mobile":
                setData(mobilePortfolio);
                break;
            case "react-movie":
                setData(reactPortfolio);
                break;
            default:
                setData(featuredPortfolio);
        }
    }, [selected])
    
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
                {data.map(db => (
                    <div className="item">
                        
                            <img 
                                src={db.img}
                                alt=""
                                onClick={() => window.open('https://github.com/mireu-san')}
                                />

                                <h3>{db.title}</h3>
                    </div>
                ))}
            </div>
        </div>
    );
}

