import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <nav className="bg-dark py-4 px-5">
            <ul className="list-unstyled d-flex justify-content-between px-10">
                <span className="d-flex">
                    <li className="mx-3 ">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="mx-3 ">
                        <Link to="/login">Login</Link>
                    </li>
                </span>
                <li>
                    <Link to="/gallery">Gallery</Link>
                </li>
            </ul>
        </nav>
    )
}
