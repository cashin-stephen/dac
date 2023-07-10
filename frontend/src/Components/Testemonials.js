import RadioBrace from "./Radio"
import { useState, useEffect, useRef} from 'react';

const Testimonials = ({getPosition}) => {

    const myRef = useRef();
    const [testmonyList] = useState([
                            "Excellent WorkExcellent WorkExcellent WorkExcellent WorkExcellent WorkExcellent WorkExcellent WorkExcellent WorkExcellent WorkExcellent WorkExcellent WorkExcellent Work",
                            "Great Job",
                            "Well Done",
                            "Absolutely Perfect",
                            "Nice"
                        ])
    const [testemonySignOffList] = useState([
                            "Joe Schmoe",
                            "Alphonso Gregory III",
                            "Thomas Tuchel",
                            "Albert Georgeson",
                            "Adam Smith",
                        ])
    const [testemonyLocation] = useState([
                            "Cabra",
                            "Rathfarnham",
                            "Norway",
                            "43 Downing Street",
                            "Hibernia",
                        ])
    const [testmonycolor] = useState([
                            "blue",
                            "red",
                            "green",
                            "brown",
                            "purple",
                        ])
    const [index, setIndex] = useState(0);
    const [realIndex, setRealIndex] = useState(0)

    const leftButtonPress = () => {
        const message = document.querySelector(".testemonialText");
        const dot = document.querySelector(".activeDot");
        message.classList.remove("messageFade");
        dot.classList.remove("messageFade");
        requestAnimationFrame(() => {
            setIndex(index- 1);
            message.classList.add("messageFade");
            dot.classList.add("messageFade");
        });
    }

    const rightButtonPress = () => {
        const message = document.querySelector(".testemonialText");
        const dot = document.querySelector(".activeDot");
        message.classList.remove("messageFade");
        dot.classList.remove("messageFade");
        requestAnimationFrame(() => {
            setIndex(index+1);
            message.classList.add("messageFade");
            dot.classList.add("messageFade");
        });
    }

    useEffect(() => {
        index%testmonyList.length === 0 ?
            setTimeout(() => setRealIndex(0),500) :
            index > 0 ?
                setTimeout(() => setRealIndex(index%testmonyList.length),500) :
                setTimeout(() => setRealIndex((testmonyList.length)-(Math.abs(index))%testmonyList.length),500)
    }, [index, testmonyList.length]);

    useEffect(() => {
        getPosition(myRef);
    }, [getPosition]);
        
    useEffect(() => {
        window.addEventListener("resize", () => getPosition(myRef));
    }, [getPosition]);

    return (

        <div className="testemonials" ref={myRef}>
            <div className="clientImg" style={{backgroundColor:testmonycolor[realIndex]}} ></div>
            <div className="textContainer">
                <button className='galleryButton back gray' onClick={leftButtonPress}>{"<"}</button>
                <div className="testemonialText">
                    <p className="testemony">{testmonyList[realIndex]}</p>
                    <p className="testemonialSignOff">
                        {testemonySignOffList[realIndex]}, <br></br>
                        {testemonyLocation[realIndex]}
                    </p>
                </div>
                <button className='galleryButton forward gray' onClick={rightButtonPress}>{">"}</button>
            </div>
            <div className="testemonialRadio">
                <RadioBrace index={realIndex} num={5}/>
            </div>
        </div>
    )


}

export default Testimonials;