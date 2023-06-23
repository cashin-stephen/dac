import Card from './Card'
import house from '../images/house.png'
import compass from '../images/compass.png'
import aplus from '../images/aplus.png'

const CardBrace = () => {

    const linkPress = () => {
        console.log("Link button pressed, fill out later")
    }

    return (

        // <div className="braceUpper">
        //     <div className = "braceLower">
        //         <div className="braceItem">
        //             <img className = "cardImg" src={house} alt="House"></img>
        //             <p className = "cardText">We offer full-scale renovations and new build construction. Our personalized serice, attention to detail, and experience set us apart.</p>
        //         </div>
        //         <div className="braceItem">
        //             <img className = "cardImg" src={compass} alt="Compass"></img>
        //             <p className = "cardText">our unique set of skills allow us to design, engineer and build one-of-a-kind structures tailored for particular architectural, energy or individuals needs.</p>
        //         </div>
        //         <div className="braceItem">
        //             <img className = "cardImg" src={aplus} alt="A-Plus"></img>
        //             <p className = "cardText">DAC & CO Limited have designed and built a triple A rated House in North Country Dublin - one of the only three triple A rated houses constructed in Ireland.</p>
        //         </div>
        //     </div>
        //     <div className = "braceLower">
        //         <div className="braceItem">
        //             <h3 className = "linkText">See our Services</h3>
        //             <button className='linkArrow' onClick={linkPress}>{">"}</button>
        //         </div>
        //         <div className="braceItem">
        //             <h3 className = "linkText">View Recent Projects</h3>
        //             <button className='linkArrow' onClick={linkPress}>{">"}</button>
        //         </div>
        //         <div className="braceItem">
        //             <h3 className = "linkText">What is an A Rated House?</h3>
        //             <button className='linkArrow' onClick={linkPress}>{">"}</button>
        //         </div>
                
        //     </div >
        // </div>






        <div className="cardBrace">
            <Card text={"We offer full-scale renovations and new build construction. Our personalized serice, attention to detail, and experience set us apart."} img={house} linkText={"See Our Services"} />
            <Card text={"our unique set of skills allow us to design, engineer and build one-of-a-kind structures tailored for particular architectural, energy or individuals needs."} img={compass} linkText={"View Recent Projects"}/>
            <Card text={"DAC & CO Limited have designed and built a triple A rated House in North Country Dublin - one of the only three triple A rated houses constructed in Ireland."} img={aplus} linkText={"What is an A Rated House"} />
        </div>
    ) 

}

export default CardBrace