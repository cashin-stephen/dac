const Card = ({text, img, linkText}) => {

    const linkPress = () => {
        console.log("Link button pressed, fill out later")
    }

    return (
        <div className="cardThing">
            <img className = "cardImg" src={img} alt="House"></img>
            <p className = "cardText">{text}</p>
            <h3 className = "linkText">{linkText}</h3>
            <button className='linkArrow' onClick={linkPress}>{">"}</button>
        </div>
    ) 

}

export default Card