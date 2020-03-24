import React from "react";
import App from "next/app";
import "../css/tailwind.css";
import Page from "../components/Page";

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        <Page>
          <Component {...pageProps} />;
        </Page>
      </>
    );
  }
}

export default MyApp;
