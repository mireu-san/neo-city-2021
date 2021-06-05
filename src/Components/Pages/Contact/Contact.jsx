import { useState } from "react";
import emailjs from "emailjs-com";
import "./Contact.scss";


export default function Contact() {
    const [ message, setMessage ] = useState(false);
    
    const handleSubmit = (e) => {
        e.preventDefault();
        setMessage(true);

    emailjs.sendForm('starmireu', 'template_e341pwx', e.target, 'user_rIJ3MvYpGYtkU69hbTOgg')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()

    }

    return (
            <div className="contact" id="contact">
                <div className="left">
                    <img src="assets/email.jpg" alt="" />
                </div>
                <div className="right">
                    <h2>Contact</h2>
                        <form onSubmit={handleSubmit}>
                            <input type="text"  placeholder="Name / Organisation" name="name"/>
                            <input type="email"  placeholder="email" name="email"/>
                            <input type="text"  placeholder="Subject" name="subject"/>
                            <textarea id="" cols="30" rows="8" placeholder="문의하실 내용을 남겨주시기 바랍니다.   Please leave your message" name="message"></textarea>
                            <button type="submit" value="Send Message">Send inquiry</button>
                            {message && <span>메일이 전송되었습니다! 확인 후, 연락드리겠습니다.</span>}
                    </form>
                </div>
            </div>

    );
}  
