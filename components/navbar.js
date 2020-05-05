import Link from 'next/link';
import React from "react";

const NavBar = () => (
    <>
        {<ul>
            <li>
                <Link href="/">
                    <a>Home</a>
                </Link>
            </li>
            <li>
                <Link href="/about">
                    <a>About Us</a>
                </Link>
            </li>
        </ul>}
    </>
);


export default NavBar;