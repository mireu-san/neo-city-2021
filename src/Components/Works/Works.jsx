import { useState } from "react";
import "./Works.scss";



export default function Works() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const data = [
        {
            id: "1",
            icon: "./assets/arrow.png",
            title: "Mireulix (Mireu + Netflix)",
            desc: "단순하지만 넷플릭스의 분위기를 연출하는데 중점을 두었습니다. 최근 TV 방영 프로그램을 소개하는 페이지이며, 외부 오픈 API 에 의존하여 구동됩니다. 숙련도는 '익숙한 단계' 입니다.",
            project: "#react.js",
            img:
                "./assets/arrow.png"
        },
        {
            id: "2",
            icon: "./assets/arrow.png",
            title: "G&K Kokoatalk",
            desc: "HTML/CSS 만으로 구성하였습니다. 카카오톡의 UI를 구현하는데에 중점을 둔 첫 프로젝트입니다. 첫 시작 언어는 파이썬이었지만, 웹 API에 대한 이해와 흥미도를 높이는 계기가 되었습니다. 숙련도는 '익숙한 단계' 입니다.",
            project: "#HTML/CSS",
            img:
                ""
        },
        {
            id: "3",
            icon: "./assets/arrow.png",
            title: "Airbnb clone",
            desc: "최초의 풀스택 프로젝트. Python과 Django, TailwindCSS 를 사용하여 에어비엔비 사이트의 주요 기능을 구현 해 보았습니다. 백엔드 부분은 장고를 이용하여 진행되었으며, '해당 라이브러리와 프레임워크를 이용해서 어떻게 각 부분별 데이터가 서로 연결 되어 구동하는지 파일을 보고 설명할 수 있다' 정도의 이해력을 가지고 있습니다. 숙련도는 '입문 단계' 입니다.",
            project: "#python, django, scss",
            img:
                ""
        },
        {
            id: "4",
            icon: "./assets/arrow.png",
            title: "The portfolio page - Mireu's Laboratory",
            desc: "본 웹 사이트는 React.js 를 기반으로 제작되었으며, UI 부분은 scss 를 이용하여 구성되었습니다. 주된 목표는 '나중에 코드를 다시 봐도 수정할 마음이 생기는 웹페이지' 입니다.",
            project: "#react.js, scss",
            img:
                ""
        },
    ];

    // arrow direction control panel
    const handleClick = (way) => {
        way === "left" 
        ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 3) 
        : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
    };



    return (
        <div className="works" id="works">
            <div 
                className="slider" 
                style={{ transform: `translateX(-${ currentSlide * 100}vw)` }}
            >
                {data.map((db) => (
                    <div className="container">
                        <div className="item">
                            <div className="left">
                                <div className="leftContainer">
                                    <div className="imageContainer">
                                        <img 
                                            src={db.icon} 
                                            alt=""
                                            onClick={() => window.open("https://github.com/mireu-san")}
                                        />
                                    </div>
                                    <h2>{db.title}</h2>        
                                    <p>{db.desc}</p>
                                    <span>{db.project}</span>
                                </div>    
                            </div>
                            <div className="right">
                                <img 
                                    src="assets/work.jpg" 
                                    alt=""
                                    onClick={() => window.open("https://github.com/mireu-san")} 
                                />
                            </div>
                        </div>
                        </div>
                        ))}
                    </div>
                    
                    <img src="assets/arrow.png" className="arrow left" alt="" onClick={() => handleClick("left")} />
                    <img src="assets/arrow.png" className="arrow right" alt="" onClick={() => handleClick("")} />
                    
            </div>
    );
}
