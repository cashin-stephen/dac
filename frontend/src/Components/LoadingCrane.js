import craneBase from "./../images/CraneBaseWhite.png"
import craneBody from "./../images/craneBodyWhite.png"
import craneGrabber from "./../images/grabber.png"
import box from "./../images/box.png"

const LoadingCrane = () => {

    return (
        <div class= "crane" >
            <img class = "craneBody" src={craneBody} alt="base of Construction Crane"/>
            <div class="lowerCrane">
                <div className="boxGroup1">
                    <img class = "box1" src={box} alt="box"/>
                    <img class = "box1" src={box} alt="box"/>
                </div>
                <img class = "craneBase" src={craneBase} alt="body of Construction Crane"/>
                <div class = "grabberBoxStack">
                    <img class = "craneGrabber" src={craneGrabber} alt="grabber of Construction Crane"/>
                    <img class = "box2" src={box} alt="box"/>
                    <div className="boxGroup2">
                        <img class = "box1" src={box} alt="box"/>
                        <img class = "box1" src={box} alt="box"/>
                    </div>
                </div>
            </div>
        </div>
    )
 }

export default LoadingCrane
