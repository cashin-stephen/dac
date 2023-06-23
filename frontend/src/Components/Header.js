import logo from '.././images/DAC_TEXT_GIRDLE.png'
import emailLink from '.././images/emailLink.png'
import box from '.././images/box.png'
import RadioBrace from './Radio.js';

const Header = () => {


    return (
        <header className = "header">
            <img className = "logo" src={logo} alt="DAC & Co. ltd Building Contractors"/>
            <div className="info">
                <h3 >086 2603225</h3>
                <div className="offLinks">
                    <h3>F</h3>
                </div>
                <div className="localLinks">
                    <h4>About Us</h4>
                    <h4>Our Services</h4>
                    <h4>projects</h4>
                    <h4>Our Team</h4>
                    <h4>Testimonials</h4>
                    <h4>Contact Us</h4>
                </div>
            </div>
        </header>

    )
}

export default Header