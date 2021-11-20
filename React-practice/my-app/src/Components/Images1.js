import React, { useEffect } from 'react'


// Mount and Unmounting from function - Component based
// useEffect - hook has to use to demonstrate Mounding and unmounting LifeCycle
export default function Images1() {
    useEffect(() => {
        let myInterval = setInterval(() => {
            console.log("Hello");
        }, 1000);
        return () => {
            clearInterval(myInterval);
        }
    }, [])
    return (
        <img src="https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80" width="700px" height="400px" />
    )
}
