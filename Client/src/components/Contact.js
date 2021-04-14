import React from 'react'
import {
    Link
} from "react-router-dom";
import Home from './Home'
function Contact({ highscores }) {

    <h1 className="text-center">Highscores</h1>

    return (
        <div>
            <Link to="/register">Register </Link>
            { highscores.map(s =>
                <Home key={s._id} s={s} />
            )}
        </div>)


}

export default Contact
