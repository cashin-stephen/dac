import {useRef, useEffect} from 'react';

const Services = ({getPosition}) => {

    const myRef = useRef();

    useEffect(() => {
        getPosition(myRef);
    }, [getPosition]);
    
    useEffect(() => {
        window.addEventListener("resize", () => getPosition(myRef));
    }, [getPosition]);

    return (
        <div className="services" ref={myRef}>
            <h1 className="serviceTitle">Our Services</h1>
            <div className="serviceBrace">
                <p className="serviceText">
                    DAC specialises in:  <br/><br/>
                    + New Houses  <br/>
                    + Renovations <br/>
                    + Extensions <br/> <br/>

                    We also have extensive experience in dealing with disabled access
                    and listed buildings working with many specialist architects and designers
                    <br/><br/>

                    We are members of The SEI House Energy saving Scheme. <br/>
                    Our contractor ID number is 10539 <br/><br/>

                    + C2 Registered <br/>
                    + Current Tax clearance certificate <br/>
                    + Employers Liability Insurance <br/>
                    + Public Liability Insurance <br/>
                    + Contractors All risk insurance
                    <br/><br/>

                    What We Do <br/><br/>

                    + Can design and build your Project <br/>
                    + Can build your project based on architects drawings and details
                </p>
                <p className="serviceText">
                    Our Company provides two services which complement each other 
                    <br/><br/>

                    1. DAC design 
                    <br/> <br/>

                    + DAC Design will transform your ideas for renovation, Extension
                    or conversion into professional drawings <br/>
                    + We provide the expertise to guide you through all possibilities <br/>
                    + We will then prepare planning drawings <br/>
                    + We will lodge the application with the relevant authority and follow it
                    through to receipt of planning permission on your behalf <br/>
                    + We will then cost the project based on planning drawings <br/>
                    <br/>

                    2. DAC constructions
                    <br/> <br/>

                    + DAC employs a full team from foremen to labour. <br/>
                    + DAC organises every aspect of the building work. <br/>
                    The company emplys the same team of contractors for all its projects:
                    plumbers, bricklayers, plasterers, etc. <br/>
                    + Dave and Paul will advise you regarding choice of suppliers and manufacturers <br/>
                    + We will arrange regular meetings to ensure efficient progress of
                    work on site <br/>

                </p>
            </div>
        </div>
    )

}

export default Services