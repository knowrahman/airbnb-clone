import React from "react";
import "tailwindcss/tailwind.css";
import "../styles/global.css";
import ProgressBar from "@badrap/bar-of-progress";
import Router from "next/router";

const progress = new ProgressBar({
  size: 4,
  color: "rgb(248, 113, 113)",
  className: "z-50",
  delay: 100,
});

Router.events.on("routeChangeStart", progress.start);
Router.events.on("routeChangeComplete", progress.finish);
Router.events.on("routeChangeError", progress.finish);
function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
