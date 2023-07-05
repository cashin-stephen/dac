import Panel from "./Panel"
import {useRef, useEffect} from 'react';

const ImageGrid = ({getPosition}) => {

    const myRef = useRef();

    useEffect(() => {
        getPosition(myRef);
        }, []);
        
        // Re-calculate X and Y of the red box when the window is resized by the user
        useEffect(() => {
        window.addEventListener("resize", () => getPosition(myRef));
        }, []);

    return (

        <div className="grid" ref={myRef}>
            <Panel color={"red"} />
            <Panel color={"blue"} />
            <Panel color={"purple"} />
            <Panel color={"green"} />
            <Panel color={"orange"} />
            <Panel color={"brown"} />
        </div>
    )
}

export default ImageGrid
