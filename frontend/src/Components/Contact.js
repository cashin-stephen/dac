
import logoInverted from '../images/DAC_TEXT_GIRDLE_INVERTED.png'
import {useRef, useEffect} from 'react';

const Contact = ({getPosition}) => {

    const myRef = useRef();

    useEffect(() => {
        getPosition(myRef);
    }, [getPosition]);
    
    useEffect(() => {
        window.addEventListener("resize", () => getPosition(myRef));
    }, [getPosition]);

    return (
        <div className="contact" ref={myRef}>
            <div className="contactInfo">
                <div className="upperContact">
                    <div className="logoSection">
                        <img className = "logoInverted" src={logoInverted} alt="DAC & Co. ltd Building Contractors"/> 
                    </div>
                    <div className="contactTitleSection">
                        <p className="contactText"> <b>Contact Us</b></p>
                    </div>
                </div>
                <div className="textSection">
                    <div className="sectionLower">
                        <p className="contactText2">Build, Renovate, Extend</p>
                        <p className="contactText"> <b>Address:</b><br></br>Drumcondra, Dublin 9</p>
                    </div>
                    <div className="sectionLower">
                        <p className="contactText"> <b>Phone:</b><br></br> 086 2603225</p>
                        <p className="contactText"><b>Email:</b><br></br>email@email.com</p>
                    </div>
                </div>
            </div>
            <div className="contactInfo">
                <div className="inputSection">
                    <form className="contactForm">
                        <div className="contactDetails">
                            <div className="nameContact">
                                <label><p className="formLabel">Name</p></label>
                                <input type="text" id="nameInput" name="nameInput"  placeholder="Your Name..." /><br></br>
                            </div>
                            <div className="nameContact">
                                <label ><p className="formLabel">Email</p></label>
                                <input type="text" id="emailInput" name="emailInput" placeholder="Your Email..." /><br></br>
                            </div>
                        </div>
                        <label ><p className="formLabel">Message</p></label>
                        <textarea rows={4} id="messageInput" name="messageInput" placeholder="Your Message..."></textarea>
                        <div className="contactDetails">
                            <div className="nameContact">
                                <input type="text" id="captchaPlaceHolder" name="nameInput"  placeholder="Captcha Here" /><br></br>
                            </div>
                            <div className="nameContact">
                                <input type="submit" value="Submit" />
                            </div>
                        </div>

                    </form>
                </div>
                {/* <img className = "logoInverted" src={logoInverted} alt="DAC & Co. ltd Building Contractors"/> */}
            </div>
        </div>
    )

}

export default Contact