import logoInverted from '../images/DAC_TEXT_GIRDLE_INVERTED.png'
import Axios from 'axios'
import React, { useRef, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import ReCAPTCHA from 'react-google-recaptcha'

const Contact = ({ getPosition, marginLeft, width }) => {
  const myRef = useRef()

  const [validToken, setValidToken] = useState([])
  const [captchaError, setcaptchaError] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  // Put these in an .env variable
  const SITE_KEY = process.env.REACT_APP_reCAPTCHA_SITE_KEY
  const SECRET_KEY = process.env.REACT_APP_reCAPTCHA_SECRET_KEY

  const captchaRef = useRef(null)

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (isSubmitting) return

    const token = captchaRef.current.getValue()

    if (!token) {
      setcaptchaError('Please complete the Captcha')
      return
    }

    setIsSubmitting(true)
    setcaptchaError('')

    try {
      // Verify captcha first
      const verificationResult = await verifyToken(token)
      setValidToken(verificationResult)

      if (verificationResult && verificationResult.success) {
        // Only send email if captcha is verified
        const emailResult = await sendEmail()

        if (emailResult && emailResult.success) {
          setcaptchaError('Message successfully sent!')
          // Clear form
          document.getElementById('nameInput').value = ''
          document.getElementById('emailInput').value = ''
          document.getElementById('messageInput').value = ''
          captchaRef.current.reset()
        } else {
          setcaptchaError('Failed to send email. Please try again.')
          captchaRef.current.reset()
        }
      } else {
        setcaptchaError('Captcha verification failed. Please try again.')
        captchaRef.current.reset()
      }
    } catch (error) {
      console.error('Form submission error:', error)
      setcaptchaError('An error occurred. Please try again.')
      captchaRef.current.reset()
    } finally {
      setIsSubmitting(false)
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
      console.error('Captcha verification error:', error)
      return { success: false, message: 'Network error during verification' }
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
      text: 'name: ' + name + '\n' + 'email: ' + email + '\n' + 'msg: ' + msg
    }
    try {
      const response = await Axios.post('http://localhost:8000/send-email', {
        message
      })
      return response.data
    } catch (error) {
      console.error('Email sending error:', error)
      return { success: false, message: 'Network error during email send' }
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
        <div className="contact" ref={myRef} style={{ marginLeft, width, marginTop: '0px' }}>
            <div className="contactInfo">
                <div className="upperContact">
                    <div className="logoSection">
                        <img className = "logoInverted" src={logoInverted} alt="DAC & Co. ltd Building Contractors" style={{ width: '150px', height: 'auto' }}/>
                    </div>
                    <div className="contactTitleSection">
                        <p className="contactText" style={{ fontSize: '28px', fontWeight: 'bold', margin: '0' }}> Contact Us</p>
                    </div>
                </div>
                <div className="textSection">
                    <div className="sectionLower">
                        <p className="contactText2">Build, Renovate, Extend</p>
                        <p className="contactText"> <b>Address:</b><br></br>Drumcondra, Dublin 9</p>
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
                            <input type="submit" value={isSubmitting ? 'Sending...' : 'Submit'} disabled={isSubmitting} />
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
