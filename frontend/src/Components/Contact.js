import logoInverted from '../images/DAC_TEXT_GIRDLE_INVERTED.png'
import Axios from 'axios'
import React, { useRef, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import ReCAPTCHA from 'react-google-recaptcha'

const Contact = ({ getPosition, marginLeft, width }) => {
  const myRef = useRef()

  const [validToken, setValidToken] = useState([])
  const [captchaError, setcaptchaError] = useState('')

  // Put these in an .env variable
  const SITE_KEY = '6LcveW0nAAAAAKv7_GdWCqcLWhRDBTDvR1XOIVdS'
  const SECRET_KEY = process.env.SECRET_KEY

  const captchaRef = useRef(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    const token = captchaRef.current.getValue()
    captchaRef.current.reset()

    if (token) {
      const thisValidtoken = await verifyToken(token)
      setValidToken(thisValidtoken)
      setcaptchaError('')
      sendEmail()
      setcaptchaError('Message successfully sent')
    } else {
      setcaptchaError('Please Fill in Captcha')
    }
  }

  const verifyToken = async (token) => {
    try {
      const response = await Axios.post('http://localhost:8000/verify-token', {
        reCAPTCHA_TOKEN: token,
        Secret_Key: SECRET_KEY
      })

      return response.data
    } catch (error) {
      console.log(error)
    }
  }

  const sendEmail = async () => {
    const name = document.getElementById('nameInput').value
    const email = document.getElementById('emailInput').value
    const msg = document.getElementById('messageInput').value
    const message = {
      to: 'stephencashin2000@gmail.com',
      from: 'cashinstephen@gmail.com',
      subject: 'Dac Website Enquiry',
      text: 'name: ' + name + '\n' + 'email ' + email + '\n' + 'msg: ' + msg
    }
    try {
      const response = await Axios.post('http://localhost:8000/send-email', {
        message
      })
      return response.data
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    if (validToken.length !== 0) {
      console.log(validToken)
      if (validToken.success === true) {
        console.log('verified')
      } else {
        console.log('not verified')
      }
    }
  }, [validToken])

  useEffect(() => {
    getPosition(myRef)
    window.addEventListener('resize', () => getPosition(myRef))
    return () => {
      window.removeEventListener('resize', () => getPosition(myRef))
    }
  }, [])

  const formResponse =
  <>
    {captchaError.includes('sent') ? <p style={{ color: 'green' }}>{captchaError}</p> : <p style={{ color: 'red' }}>{captchaError}</p>}
  </>

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
                    <form className="contactForm" onSubmit={handleSubmit}>
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
                        <div className="contactDetails" style={{ marginTop: '10px', flexWrap: 'wrap', gap: '10px', justifyContent: 'space-between' }}>
                            <div className='captchaDiv'>
                                <ReCAPTCHA className="recaptcha" sitekey={SITE_KEY} ref={captchaRef} />
                                {formResponse}
                            </div>
                            <input type="submit" value="Submit" />
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
