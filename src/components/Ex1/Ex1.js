import React,{ useState, useEffect } from "react";

function Ex1() {
    const [counter, setCounter] = useState(0);
    const [type, setType] = useState("dog");
    const [url, setUrl] = useState();

    const increaseCounter = () => {
        setCounter((prev)=> prev +1);
    }

    const changeURL = () => {
        setUrl("https://loremflickr.com/320/240/"+type);
    }

    const changeType = () => {
        if (type === "dog"){
            setType("cat");
        } else setType("dog");
    }

    useEffect (()=>{
        console.log("change url");
        changeURL(type);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[type]);

    return ( 
        <div className="us-page">
            <div className="result">{counter}</div>
            <button onClick={increaseCounter}>Click</button>
            <button onClick={changeType}>Change</button>
            {url && <img src={url} alt=""/>}
        </div>
     );
}

export default Ex1;