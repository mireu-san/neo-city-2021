import { useState } from "react";
import "./Works.scss";

export default function Works() {


    const [currentSlide, setCurrentSlide] = useState(0);
    const data = [
        {
            id: "1",
            icon: "./assets/mobile.png",
            title: "Not only user, but developer too",
            desc: "Design the webpage by considering the aftermath.",
            img:
                ""
        },
        {
            id: "2",
            icon: "./assets/globe.png",
            title: "Optimising Your Mobile Device ",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste illo, ab, velit, provident officiis praesentium suscipit molestiae nam facilis beatae expedita debitis laborum nobis saepe sint ducimus amet quis earum.",
            img:
                ""
        },
        {
            id: "3",
            icon: "./assets/writing.png",
            title: "User friendly",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste illo, ab, velit, provident officiis praesentium suscipit molestiae nam facilis beatae expedita debitis laborum nobis saepe sint ducimus amet quis earum.",
            img:
                ""
        },
    ];

    // arrow direction control panel
    const handleClick = (way) => {
        way === "left" 
        ? setCurrentSlide(currentSlide > 0 ? currentSlide -1 : 2) 
        : setCurrentSlide(currentSlide < data.length -1 ? currentSlide + 1 : 0);
    }

    return <div className="works" id="works">
        <div 
            className="slider" style={{ transform: `translateX(-${ currentSlide * 100}vw)` }}
        >
            {data.map((d) => (
            <div className="container">
                <div className="item">
                    <div className="left">
                        <div className="leftContainer">
                            <div className="imageContainer">
                                <img 
                                    src="{d.icon}" 
                                    alt="" 
                                />
                            </div>
                            <h2>{d.title}</h2>        
                            <p>{d.desc}</p>
                            <span>Projects</span>
                        </div>    
                    </div>
                    <div className="right">
                        <img 
                            src="assets/nature1.jpg" 
                            alt="" 
                        />
                    </div>
                </div>
                </div>
                ))}
            </div>
            <img src="assets/arrow.png" className="arrow left" alt="" onClick={() => handleClick("left")} />
            <img src="assets/arrow.png" className="arrow right" alt="" onClick={() => handleClick("")} />
            
        </div>
}
