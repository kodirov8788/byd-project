import React, { useState } from "react";

function NavChild({ setOpen, nav, open }) {
    const [visable, setVisable] = useState(false);
    return (
        <li className="wrapper" onMouseEnter={() => setOpen(true)}>
            <a href="/">{nav.nav_name}</a>
            <div
                className="content"
                style={visable ? { opacity: 1 } : { opacity: 0 }}
            ></div>
        </li>
    );
}

export default NavChild;
