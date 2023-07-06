const RadioBrace = ({index, num}) => {
    const rows = [];
    for (let i = 0; i < num; i++) {
        if(i === index) {
            rows.push(<span className="dot" key={i}>
                    <span className="activeDot"></span>
                </span>);
        }
        else {
            rows.push(<span className="dot" key={i}></span>);
        }
    }
    return (
        <div className = "radioTest">
            {rows}
        </div>


    )

}

export default RadioBrace;