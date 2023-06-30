import { useState} from 'react';

const Panel = ({color}) => {

    const [width, setWidth] = useState("0px");

    const linkPress = () => {
        console.log(color + " panel pressed, fill out later")
    }

    return (
    
    <div className="panel" style={{backgroundColor: color}}
        onMouseEnter={() => setWidth("200px")}
        onMouseLeave={() => setWidth("0px")}>
        <div className="panelBanner">
            <button className="panelBanner" onClick={linkPress} style={{width: width}}>
                <h5 className = "panelText">VIEW PROJECT</h5>
            </button>
        </div>
    </div>
    

    )

}

export default Panel