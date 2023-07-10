import logo from '.././images/DAC_TEXT_GIRDLE.png'


const Header = ({aboutY, projectY, teamY, servicesY, testemonialsY, contactY}) => {

    const headerOffset = 128;

    const movePage = (offset) => {
        console.log(offset);
        window.scrollTo({top: offset-headerOffset, left: 0, behavior: 'smooth'});
    }
    
    return (
        <header className = "header">
            <img className = "logo" src={logo} alt="DAC & Co. ltd Building Contractors"/>
            <div className="info">
                <h3 className="phoneNum" >086 2603225</h3>
                <div className="offLinks">
                    <h3 className="headerItems">F</h3>
                </div>
                <div className="localLinks">
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