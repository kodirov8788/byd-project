import React from "react";
import { nav_data } from "../../../static/static_data";
import { GrLanguage } from "react-icons/gr";
import { MdOutlineAccountCircle } from "react-icons/md";
import "./SideBar.css";

function SideBar({ openMenu, setOpenMenu }) {
    return (
        <>
            <div className="sidebar" style={openMenu ? { width: "100%" } : {}}>
                <div className="sidebar__wrapper">
                    <div
                        className="sidebar__button"
                        style={openMenu ? { opacity: 1 } : { opacity: 0 }}
                    >
                        <button onClick={() => setOpenMenu(!openMenu)}>
                            X
                        </button>
                    </div>
                    <ul style={openMenu ? { opacity: 1 } : { opacity: 0 }}>
                        {nav_data.slice(0, 4).map((item) => (
                            <li>
                                {item.nav_name} <span>&#62;</span>
                            </li>
                        ))}
                        <li>Shop</li>
                        <li>Support</li>
                        <li>
                            <div className="sidebar__language">
                                <GrLanguage style={{ marginTop: "5px" }} />
                                <div>
                                    <h3>United States</h3>
                                    <p>English</p>
                                </div>
                            </div>
                            <span>&#62;</span>
                        </li>
                        <li className="sibebar__account">
                            <div>
                                <MdOutlineAccountCircle />
                                <p>Account</p>
                            </div>
                            <span></span>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default SideBar;
