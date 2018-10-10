import React from "react";
import Helmet from "react-helmet";
import Nav from "../components/Nav";
import "./layout.css";

const Layout = ({ children }) => (
  <>
    <Helmet />
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
