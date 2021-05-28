import "./Home.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";

export default function Home() {
    const textRef = useRef();
    
    useEffect(() => {
        init(textRef.current, {
            showCursor: true,
            backDelay: 1500,
            strings: ["React.js", "Node.js", "Redux", "HTML/CSS", "Economics algorithm to harmonise with colleague."],
        });
    },[]);


    return (
        <div className="home" id="home">
            <div className="left">
                <div className="imageContainer">
                    <img src="assets/landscape.jpg" alt=""/>
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>안녕하세요! Greetings!</h2> 
                    <h1>I AM</h1> 
                    <h1>JONGWAN KIM</h1>
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
