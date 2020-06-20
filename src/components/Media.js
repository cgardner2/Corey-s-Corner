import React from "react";
import "./Media.css"

function Media(props){
    return(
        <div>
            <h2 className="Media">{props.media}</h2>
        </div>
    )
}

export default Media