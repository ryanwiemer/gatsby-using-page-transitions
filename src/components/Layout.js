import React from "react";
import Nav from "../components/Nav";
import "../styles/style.css";

const Layout = ({ children }) => (
  <>
    <Nav />
    <div
      style={{
        margin: `60px auto 0`,
        maxWidth: 960,
        padding: `0 1em 2em`,
        paddingTop: 0
      }}
    >
      {children}
    </div>
  </>
);

export default Layout;
