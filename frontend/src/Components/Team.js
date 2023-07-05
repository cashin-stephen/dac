import {useRef, useEffect} from 'react';
import TeamMember from "./TeamMember"

const Team = ({getPosition}) => {

    const myRef = useRef();

    useEffect(() => {
    getPosition(myRef);
    }, []);
    
    // Re-calculate X and Y of the red box when the window is resized by the user
    useEffect(() => {
    window.addEventListener("resize", () => getPosition(myRef));
    }, []);

    return (
        <div className="team" ref={myRef}>
            <h1 className="title">Our Team</h1>
            <div className="teamBrace">
                <TeamMember />
                <TeamMember />
            </div>
        </div>
    )

}

export default Team