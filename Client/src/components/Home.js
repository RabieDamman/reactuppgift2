import React from 'react'
import { Link } from 'react-router-dom';

function Home({ s }) {
    return (
        <div className="">
            <div className="card mb-3">
                <div className="row no-gutters">
                    <div className="col m-4">
                        <div className="card-block px-2">
                            <Link
                                to={`/gamedetails/${s.game.title}`}
                            >
                                <h3 className="item_game">{s.game.title}</h3>
                            </Link>
                            <p className="card-text">{s.date}</p>
                            <p className="card-text">{s.player}</p>


                        </div>
                    </div>
                    <div className="col m-4 text-center">
                        <div className="card-block px-2">
                            <span className="card-text ">{s.score}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Home
