import logo from '.././images/DAC_TEXT_GIRDLE.png'


const Header = (aboutY) => {

    const headerOffset = 115;

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
                    <button onClick={() => movePage(aboutY.aboutY)}>
                        <h4>
                            About Us
                        </h4>
                    </button>
                    <h4>Our Services</h4>
                    <h4>Projects</h4>
                    <h4>Our Team</h4>
                    <h4>Testimonials</h4>
                    <h4>Contact Us</h4>
                </div>
            </div>
        </header>

    )
}

export default Header