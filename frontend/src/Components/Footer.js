const Footer = () => {

    const year = new Date().getFullYear();

    return (
        <div className="footerManual">
            <div className="footerSection">
                <p className="contactText">Designed By Stephen Cashin</p>
            </div>
            <div className="footerSection">
                <p className="contactText">DAC 2023</p>
            </div>
        </div>
    )

}

export default Footer