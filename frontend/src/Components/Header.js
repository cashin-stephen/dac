import logo from '.././images/DAC_TEXT_GIRDLE.png'
import {useEffect, useState} from 'react';

const Header = ({aboutY, projectY, teamY, servicesY, testemonialsY, contactY}) => {

    const [logoHeight, setLogoHeight] = useState(100)
    const [linkHeight, setLinkHeight] = useState(90)

    const headerOffset = 128;

    const movePage = (offset) => {
        console.log(offset);
        window.scrollTo({top: offset-headerOffset, left: 0, behavior: 'smooth'});
    }

    const resizeHeader = () => {
        const documentElement = document.documentElement;
        if(documentElement.scrollTop < 50) {
            setLogoHeight(100);
            setLinkHeight(90);
        }
        else {
            setLogoHeight(65);
            setLinkHeight(55);
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", () => resizeHeader());
    }, []);
    
    return (
        <header className = "header">
            <img className = "logo" src={logo} style={{height: logoHeight}} alt="DAC & Co. ltd Building Contractors"/>
            <div className="info">
                <div className="headerContact">
                    <div className="headerEmail">
                        <h5>086 2603225</h5>
                    </div>
                    <div className="headerEmail">
                        <h5>email@email.com</h5>
                    </div>
                </div>
                <div className="localLinks" style={{height: linkHeight}}>
                    <button className="localLinkButton" onClick={() => movePage(aboutY)}>About Us</button>
                    <button className="localLinkButton" onClick={() => movePage(projectY)}>Projects</button>
                    <button className="localLinkButton" onClick={() => movePage(teamY)}>Our Team</button>
                    <button className="localLinkButton" onClick={() => movePage(servicesY)}>Our Services</button>
                    <button className="localLinkButton" onClick={() => movePage(testemonialsY)}>Testemonials</button>
                    <button className="localLinkButton" onClick={() => movePage(contactY)}>Contact Us</button>
                </div>
            </div>
        </header>

    )
}

export default Header