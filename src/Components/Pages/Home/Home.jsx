import "./Home.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";

export default function Home() {
    const textRef = useRef();
    
    useEffect(() => {
        init(textRef.current, {
            showCursor: true,
            backDelay: 1500,
            backSpeed: 60,
            strings: ["React.js", "Redux", "Node.js", "HTML/CSS", "Python", "Economics to harmonise with anyone."],
        });
    },[]);


    return (
        <div className="home" id="home">
            <div className="left">
                <div className="imageContainer">
                    <img src="assets/landscape.jpg" alt="" />
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Greetings! The name is</h2> 
                    <h1>Jongwan Kim</h1>
                    <h2>Front-end engineer enthusiast</h2>
                    <h3>With a sense of <span ref={textRef}></span></h3>
                </div>
                <a href="#portfolio">
                    <img src="assets/arrow_down.png" alt="" />
                </a>    
            </div>
        </div>
    );
}
