import { useState } from "react";
import "./Contact.scss";

export default function Contact() {
    const [ message, setMessage ] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setMessage(true)
    };

    return (
        <div className="contact" id="contact">
            <div className="left">
                <img src="assets/email.jpg" alt=""/>
            </div>
            <div className="right">
                <h2>Contact</h2>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Email" />
                    <textarea placeholder="Message"></textarea>
                    <button type="submit">Send</button>
                    {message && <span>Thank you. 확인 후 답장드리겠습니다.</span>}
                </form>
            </div>
            
        </div>
    );
}
