import React, { useEffect, useState } from "react";
import "./Navbar.css";
import Logo from "../../assets/byd-logo.png";
import { CiCircleQuestion } from "react-icons/ci";
import { TbWorld, TbUserCircle } from "react-icons/tb";
import { nav_data } from "../../static/static_data";
import { IoIosMenu } from "react-icons/io";
import NavChild from "./navChild/NavChild";
import SideBar from "./sideBar/SideBar";

function Navbar() {
    const [open, setOpen] = useState(false);
    const [isWideScreen, setIsWideScreen] = useState(window.innerWidth < 990);
    const [openMenu, setOpenMenu] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsWideScreen(window.innerWidth < 990);
        };

        window.addEventListener("resize", handleResize);

        // Call handleResize initially to set the initial state
        handleResize();

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <div className="navbar">
            <div className="navbar__item">
                <div
                    className={`navbar__logo ${
                        open ? `color-black` : `color-white`
                    }`}
                >
                    <a href="/">
                        <img src={Logo} alt="" />
                    </a>
                </div>
            </div>
            <div
                className={`navbar__item ${
                    open ? `color-black` : `color-white`
                }`}
            >
                <ul className="navbar__ul">
                    {nav_data.map((nav) => (
                        <NavChild
                            setOpen={setOpen}
                            nav={nav}
                            open={open}
                            key={nav.id}
                        />
                    ))}
                </ul>
                <div
                    className="background_blur"
                    style={open ? { height: "100vh" } : { height: "0" }}
                ></div>
                <div
                    className="background_effect"
                    onMouseLeave={() => setOpen(false)}
                    style={open ? { height: "80vh" } : { height: "0" }}
                ></div>
            </div>
            <div className="navbar__item">
                <div
                    className={`navbar__icons ${
                        open ? `color-black` : `color-white`
                    }`}
                >
                    {isWideScreen ? (
                        <>
                            <a
                                className="navbar__menu"
                                onClick={() => setOpenMenu(!openMenu)}
                            >
                                Menu
                            </a>
                            <SideBar
                                openMenu={openMenu}
                                setOpenMenu={setOpenMenu}
                            />
                        </>
                    ) : (
                        <ul>
                            <li>
                                <a href="/">
                                    <CiCircleQuestion />
                                </a>
                            </li>
                            <li>
                                <a href="/">
                                    <TbWorld />
                                </a>
                            </li>
                            <li>
                                <a href="/">
                                    <TbUserCircle />
                                </a>
                            </li>
                        </ul>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Navbar;
