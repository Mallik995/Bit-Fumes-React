import React, { useState, useEffect } from 'react'
// import Images from './Components/Images';
import Images1 from './Components/Images1';

export default function App1() {
    const [title, setTitle] = useState("Hello React-1");
    const [isShowing, setIsShowing] = useState(false);
    let handleClick = () => {
        setIsShowing(!isShowing)
    }

    // Mounting in function component
    //component did mount
    useEffect(() => {
        console.log("fn-component Mounted");
    }, [])


    return (
        < div className="d-flex  flex-column" >
            {console.log("Render - >fun -component")};
            <div className="mx-auto">{title}</div>
            <div className="mx-auto my-2">
                <button className="btn btn-outline-warning" onClick={handleClick}>Click ME</button>
            </div>
            <div className="mx-auto my-2 border border-3 border-info">{isShowing ? <Images1 /> : null}</div>
        </div >
    )
}

