import React from "react";
import Header from "./header";
const Layout = (props) => (
    <div>
        <Header />
        {props.children}
        <footer>the footer</footer>
    </div>
)
export default Layout;