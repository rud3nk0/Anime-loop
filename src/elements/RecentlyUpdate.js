import "./RecentlyUpdate.css"

import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

import VoiceActing from "./VoiceActing";

import blackBullet from "../assets/blackBullet.png"
import HeroAcademia from "../assets/img-2.png"
import Hayikuya from "../assets/haikuya.png"

function RecentlyUpdate() {

    // Show Update Day
    const [dateTime, setDateTime] = useState('');

    useEffect(() => {
        const now = new Date();
        const day = now.getDate();
        const monthAbbreviation = now.toLocaleString('en-US', { month: 'short' }).toUpperCase();
        const year = now.getFullYear();
        const dayOfWeek = now.toLocaleString('en-US', { weekday: 'long' }).toUpperCase();

        const formattedDate = `${dayOfWeek} ${day} ${monthAbbreviation} ${year}`;

        setDateTime(formattedDate);
    }, []);



    return (
        <>
            <div className="wrapper__recently">
                <div className="wrapper__title">

                    <h1 className="title">
                        Recently Update
                    </h1>

                    <p className="subTitle">
                        {dateTime}
                    </p>
                </div>
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
        </>
    )
}

export default RecentlyUpdate