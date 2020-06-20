import React from "react";
import "./Home.css"
import Head from "./Head";
import Media from "./Media";

const media = ["PodCast", "Essays", "Media", "About"];

function Home(){
    return(
        <div className="homePage">
            <Media {props.media[0]}/>
            <Media {props.media.media.essays}/>
            <Head/>
            <Media {props.media.media.media}/>
            <Media {props.media.media.about/>
        </div>
    )
}

export default Home