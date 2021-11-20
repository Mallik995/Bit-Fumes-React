import React, { useState } from 'react'
import Images2 from '../Components/Images2';

export default function Gallery() {
    // const [title, setTitle] = useState("Hello React World!!!");
    const [isShowing, setIsShowing] = useState(null);
    let handleClick = () => {
        setIsShowing(!isShowing);
    }
    return (
        <>
            <div className="d-flex flex-column justify-content-center ">
                <div className="mx-auto">
                    <button className="btn mx-auto my-5  btn-warning color-white"
                        onClick={handleClick}>Toggle Me</button>
                </div>
            </div>
            <div >
                {(isShowing ? <Images2 /> : null)}
            </div>
        </>

    )
}
