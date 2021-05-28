import "./Works.scss";

export default function Works() {
    return <div className="works" id="works">
        <div className="slider">
            <div className="container">
                <div className="item">
                    <div className="left">
                        <div className="leftContainer">
                            <div className="imgContainer">
                                <img 
                                    src="assets/" 
                                    alt="" 
                                />
                            </div>
                            <h2>Title</h2>        
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia cum omnis debitis reiciendis modi eius quam aperiam harum eum perferendis, voluptatibus nostrum labore unde. Eveniet illo voluptatibus velit cumque iusto.</p>
                            <span>Projects</span>
                        </div>    
                    </div>
                    <div className="right">
                        <img 
                            src="assets/" 
                            alt="" 
                        />
                    </div>
                </div>
            </div>
        </div>
        <img src="assets/" className="arrow left" alt="" />
        <img src="assets/" className="arrow right" alt="" />
    </div>;
}
