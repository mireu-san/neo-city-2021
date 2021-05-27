import "./Home.scss";

export default function Home() {
    return (
        <div className="home" id="home">
            <div className="left">
                <div className="imageContainer">
                    <img src="assets/landscape.jpg" alt=""/>
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h1>안녕하세요! Greetings!</h1> 
                    <h2>THIS IS JONGWAN KIM.</h2>
                    <h2>저는 프론트엔드 웹개발을 하고 있습니다.</h2>
                    <h2>특히, 바닐라 JS 기반의 React.js 라이브러리 위주로 여러가지를 시도 해보고 있습니다.</h2>
                </div>
                <a href="#portfolio">
                    <img src="assets/arrow_down.png" alt="" />
                </a>    
            </div>
        </div>
    )
}
