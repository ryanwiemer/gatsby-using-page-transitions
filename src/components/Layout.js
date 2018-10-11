import React from "react";
import posed, { PoseGroup } from "react-pose";
import Nav from "../components/Nav";
import "../styles/style.css";

const transitionDuration = 300;
const transitionDelay = 350;

const Transition = posed.div({
  enter: {
    opacity: 1,
    transition: { duration: transitionDuration },
    delay: transitionDelay,
    beforeChildren: true
  },
  exit: { opacity: 0, transition: { duration: transitionDuration } }
});

const Layout = ({ children, ...props }) => (
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
      <PoseGroup>
        <Transition
          style={{ background: "papayawhip" }}
          key={props.location.pathname}
        >
          {children}
        </Transition>
      </PoseGroup>
    </div>
  </>
);

export default Layout;
