import React from "react";
import Helmet from "react-helmet";
import Transition from "../components/Transition";
import Nav from "../components/Nav";

import "./layout.css";

const TemplateWrapper = props => {
  console.log(props);
  return (
    <>
      <Helmet
        title="Gatsby Default Starter"
        meta={[
          { name: `description`, content: `Sample` },
          { name: `keywords`, content: `sample, something` }
        ]}
      />
      <Nav />
      <div
        style={{
          margin: `60px auto 0`,
          maxWidth: 960,
          padding: `0 1em 2em`,
          paddingTop: 0
        }}
      >
        <Transition location={props.location}>{props.children}</Transition>
      </div>
    </>
  );
};

export default TemplateWrapper;
