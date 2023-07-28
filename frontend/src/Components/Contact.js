import logoInverted from '../images/DAC_TEXT_GIRDLE_INVERTED.png'
import React, { useRef, useEffect } from 'react'
import PropTypes from 'prop-types'

const Contact = ({ getPosition, marginLeft, width }) => {
  const myRef = useRef()

  useEffect(() => {
    getPosition(myRef)
  }, [getPosition])

  useEffect(() => {
    window.addEventListener('resize', () => getPosition(myRef))
  }, [getPosition])

  return (
        <div className="contact" ref={myRef} style={{ marginLeft, width }}>
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
                                <label>
                                    <p className="formLabel">Name</p>
                                    <input type="text" id="nameInput" name="nameInput" placeholder="Your Name..." required/><br></br>
                                </label>
                            </div>
                            <div className="nameContact">
                                <label >
                                    <p className="formLabel">Email</p>
                                    <input type="text" id="emailInput" name="emailInput" placeholder="Your Email..." required/><br></br>
                                </label>
                            </div>
                        </div>
                        <label>
                            <p className="formLabel">Message</p>
                            <textarea rows={5} id="messageInput" name="messageInput" placeholder="Your Message..." required></textarea>
                        </label>
                        <div className="contactDetails">
                            <div className="nameContact">
                                <input type="text" id="captchaPlaceHolder" name="nameInput" placeholder="Captcha Here" /><br></br>
                            </div>
                            <div className="nameContact">
                                <input type="submit" value="Submit" />
                            </div>
                        </div>

                    </form>
                </div>
            </div>
        </div>
  )
}

Contact.propTypes = {
  getPosition: PropTypes.func.isRequired,
  marginLeft: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired
}

export default Contact
