import React from "react";

import blackBullet from "../assets/blackBullet.png"
import HeroAcademia from "../assets/img-2.png"
import Hayikuya from "../assets/haikuya.png"


import './Anime.css'
import VoiceActing from "./VoiceActing";

function Anime() {

    return (
        <div className="table_all_anime">
            <div className="table_post">

                <div className="recently__card" >
                    <div className="card__img">
                        <img className="card__image" src={blackBullet} alt="" />
                    </div>

                    <div className="card__miniNav">
                        <VoiceActing />
                    </div>
                    <div className="animeName">
                        <p className="title__anime">
                            Black Bullet
                        </p>
                    </div>
                </div>

                <div className="recently__card" >
                    <div className="card__img">
                        <img className="card__image" src={HeroAcademia} alt="" />
                    </div>

                    <div className="card__miniNav">
                        <VoiceActing />
                    </div>
                    <div className="animeName">
                        <p className="title__anime">
                            Hero Academia
                        </p>
                    </div>
                </div>

                <div className="recently__card" >
                    <div className="card__img">
                        <img className="card__image" src={Hayikuya} alt="" />
                    </div>

                    <div className="card__miniNav">
                        <VoiceActing />
                    </div>
                    <div className="animeName">
                        <p className="title__anime">
                            Hayikuya
                        </p>
                    </div>
                </div>

            </div>
            {/* table_post */}


        </div>
    )
}

export default Anime