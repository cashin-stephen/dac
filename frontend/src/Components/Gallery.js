import { useState, useEffect, useRef} from 'react';
import RadioBrace from './Radio';

const Gallery = () => {

    const [messageIndex, setMessageIndex] = useState(0)
    const [imgIndex, setImgIndex] = useState(0);
    const [messageList] = useState(["Bespoke Building Solutions", "Other Things", "A third Thing", "Four", "Five"])
    const [transition, setTransition] = useState("1s ease-out");
    const btnTimer = useRef(null);

    const leftButtonPress = () => {
        const message = document.querySelector(".message");
        const dot = document.querySelector(".activeDot");
        message.classList.remove("messageFade");
        dot.classList.remove("messageFade");
        requestAnimationFrame(() => {
            setImgIndex(imgIndex- 1);
            message.classList.add("messageFade");
            dot.classList.add("messageFade");
        });
    }

    const rightButtonPress = () => {
        const message = document.querySelector(".message");
        const dot = document.querySelector(".activeDot");
        message.classList.remove("messageFade");
        dot.classList.remove("messageFade");
        requestAnimationFrame(() => {
            setImgIndex(imgIndex+1);
            message.classList.add("messageFade");
            dot.classList.add("messageFade");
        });
    }

    const backgroundCorrection = () => {
        setTransition("none");
        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                setTransition("1s ease-out");
            });
        });
    }

    useEffect(() => {
        clearTimeout(btnTimer.current);
        btnTimer.current = window.setTimeout(backgroundCorrection,5000);
        setTimeout(() => setMessageIndex(imgIndex%messageList.length),500);
        imgIndex%messageList.length === 0 ?
            setTimeout(() => setMessageIndex(0),500) :
                imgIndex > 0 ?
                    setTimeout(() => setMessageIndex(imgIndex%messageList.length),500) :
                    setTimeout(() => setMessageIndex(((messageList.length)-(Math.abs(imgIndex))%messageList.length)),500);
    }, [imgIndex]);

    useEffect(() => {
        setImgIndex(imgIndex%5);
    }, [transition]);

    return (
        <div className="gallery" style={{backgroundPosition: imgIndex*25+'%', transition: transition}}>
            <div />
            <div className="galleryControl">
                <button className='galleryBackButton' onClick={leftButtonPress}>{"<"}</button>
                <h1 className="message">{messageIndex%messageList.length === 0 ? messageList[0] : messageIndex > 0 ? messageList[messageIndex%messageList.length] : messageList[(messageList.length)-(Math.abs(messageIndex))%messageList.length]}</h1>
                <button className='galleryForwardButton' onClick={rightButtonPress}>{">"}</button>
            </div>
            <RadioBrace index={messageIndex} num={messageList.length}/>
        </div>
    )
}

export default Gallery
