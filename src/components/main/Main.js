import React from "react";
import "./Main.css";

function Main() {
    return (
        <div className="main">
            <video
                width="100%"
                className="home__video"
                autoPlay
                muted
                loop
                playsInline
            >
                <source
                    src="https://digitalassets.tesla.com/tesla-contents/video/upload/Homepage-Model-Y-Desktop-NA-v2.mp4"
                    type="video/mp4"
                />
                Your browser does not support the video tag.
            </video>
            <div className="main__wrapper">
                <div className="main__item">
                    <h1>Model Y</h1>
                    <p>Lease starting at $329/mo*</p>
                </div>
                <div className="main__item">
                    <div className="main__buttons">
                        <button title="Custom Order">
                            <a href="/">Custom Order</a>
                        </button>
                        <button title="Demo Drive">
                            <a href="/">Demo Drive</a>
                        </button>
                    </div>
                    <div className="main__text">
                        <p>
                            *Excludes taxes and fees with price subject to
                            change. Available in select states.
                            <span>
                                <a href="/"> See details</a>
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Main;
