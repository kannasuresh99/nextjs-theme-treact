import GlobalStyles from '../styles/GlobalStyles.js'
import App from "next/app";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";

export default class MyApp extends App {
  render() {
    const { Component, pageProps, router } = this.props;
    const spring = {
      type: "spring",
      damping: 20,
      stiffness: 100,
      when: "afterChildren"
    };
    return (
      <div>
      <div>
        <GlobalStyles/>
      <Component {...pageProps}/>
      </div>
      <AnimatePresence>
        <div className="page-transition-wrapper">
          <motion.div
            transition={spring}
            key={router.pathname}
            initial={{ x: 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -300, opacity: 0 }}
            id="page-transition-container"
          >
            <Component {...pageProps} key={router.pathname} />
          </motion.div>
        </div>
      </AnimatePresence>
      </div>
    );
  }
}