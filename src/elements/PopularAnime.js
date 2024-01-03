import './PopularAnime.css'

import React from "react";


import VoiceActing from "./VoiceActing";

import blackBullet from "../assets/blackBullet.png"
import HeroAcademia from "../assets/img-2.png"
import Hayikuya from "../assets/haikuya.png"

function PopularAnime() {

    return (
        <div className="wrapper__popular">
            <h1 className="title">
                Popular Anime
            </h1>
            <div className="wrapper__recently_scrollSection">
                <div className="wrapper__recently__row">

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
            </div>
        </div>
    )
}

export default PopularAnime;