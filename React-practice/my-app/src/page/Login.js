import React from 'react'

export default function Login() {

    function handleClick(e) {
        // e.preventDefault();
        console.log("submitted");
    }
    return (
        <div className="d-flex justify-content-center align-items-center vh-100 ">
            <div className="justify-content-around border border-info border-2 text-center shadow-lg p-3 mb-5 bg-rounded bg-info bg-gradient">
                <h1 className="mb-5">Login</h1>
                <div class="form-floating mb-3">
                    <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                    <label for="floatingInput">Email address</label>
                </div>
                <div class="form-floating">
                    <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                    <label for="floatingPassword">Password</label>
                </div>
                <button className="btn btn-warning m-5" onClick={handleClick}>Submit</button>
                <button className="btn btn-danger m-5">Reset</button>
            </div>
        </div>
    )
}
