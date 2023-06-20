import { useState, useEffect } from 'react';

const Gallery = () => {

    const [messageindex, setMessageIndex] = useState(0)
    const [imgIndex, setImgIndex] = useState(0);
    const [messageList] = useState(["Bespoke Building Solutions", "Other Things", "A third Thing"])

    const leftButtonPress = () => {
        const message = document.querySelector(".message");
        message.classList.remove("messageFade");
        requestAnimationFrame((time) => {
                setImgIndex(imgIndex- 1);
                message.classList.add("messageFade");
                setMessageIndex(messageindex+ 1)
          });

    }

    const rightButtonPress = () => {
        const message = document.querySelector(".message");
        message.classList.remove("messageFade");
            requestAnimationFrame((time) => {
                setImgIndex(imgIndex+1);
                message.classList.add("messageFade");
                setMessageIndex(messageindex+ 1)
          });
    }

    const backgroundCorrection = () => {
        if(imgIndex%5 === 0 && imgIndex!==0) {
            const gallery = document.querySelector(".gallery");
            gallery.classList.remove("galleryTrans");
            requestAnimationFrame((time) => {
                setImgIndex(0);
                requestAnimationFrame((time) => {
                    gallery.classList.add("galleryTrans");
                });
            });
        }
    }

    useEffect(() => {
        setTimeout(() => setMessageIndex(imgIndex),500);
        //setTimeout(() => backgroundCorrection(),3000);
      }, [imgIndex]);

    return (
        <div className="gallery galleryTrans" style={{backgroundPosition: imgIndex*25+'%'}}>
            <div className="galleryControl">
                <button className='galleryBackButton' onClick={leftButtonPress}>{"<"}</button>
                <h1 className="message">{messageList[messageindex%messageList.length]}</h1>
                <button className='galleryForwardButton' onClick={rightButtonPress}>{">"}</button>
            </div>
        </div>
    )
}

export default Gallery
