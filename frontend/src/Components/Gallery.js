import { useState } from 'react';

const Gallery = () => {

    const [index, setIndex] = useState(1)
    const [messageList, setMessageList] = useState(["Bespoke Building Solutions", "Other Things", "A third Thing"])

    const buttonPress = () => {
        const message = document.querySelector(".message");
        message.classList.add("messageFade");
        setTimeout(() => setIndex(index+ 1),500)
        setTimeout(() =>  message.classList.remove("messageFade"),1000)
      };


    return (
        <div className="gallery">
            <div className="galleryControl">
                <button className='galleryBackButton' onClick={buttonPress}>{"<"}</button>
                <h1 className="message">{messageList[index%messageList.length]}</h1>
                <button className='galleryForwardButton' onClick={buttonPress}>{">"}</button>
            </div>
        </div>
    )
}

export default Gallery
