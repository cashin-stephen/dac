import craneBase from "./../images/CraneBaseWhite.png"
import craneBody from "./../images/craneBodyWhite.png"
import craneGrabber from "./../images/grabber.png"
import box from "./../images/box.png"

const LoadingCrane = () => {

    return (
        <div className= "crane" >
            <img className = "craneBody" src={craneBody} alt="base of Construction Crane"/>
            <div className="lowerCrane">
                <div className="boxGroup1">
                    <img className = "box1" src={box} alt="box"/>
                    <img className = "box1" src={box} alt="box"/>
                </div>
                <img className = "craneBase" src={craneBase} alt="body of Construction Crane"/>
                <div className = "grabberBoxStack">
                    <img className = "craneGrabber" src={craneGrabber} alt="grabber of Construction Crane"/>
                    <img className = "box2" src={box} alt="box"/>
                    <div className="boxGroup2">
                        <img className = "box1" src={box} alt="box"/>
                        <img className = "box1" src={box} alt="box"/>
                    </div>
                </div>
            </div>
        </div>
    )
 }

export default LoadingCrane
