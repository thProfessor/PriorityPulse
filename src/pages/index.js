import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import { Route, Switch, useLocation } from "react-router";
import HomeBanner from "../componenents/homePage/Banner";
import PlacesList from "../componenents/homePage/PlacesList";
import {
  useGlobalStateContext,
  useGlobalDispatchContext,
} from "../context/globalContext";
import MapPage from "./MapPage";

function IndexPage() {
  const location = useLocation();
  const dispatch = useGlobalDispatchContext();
  const { cursorStyles } = useGlobalStateContext();
  const onCursor = (cursorType) => {
    cursorType = (cursorStyles.includes(cursorType) && cursorType) || false;
    dispatch({ type: "CURSOR_TYPE", cursorType: cursorType });
  };
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { delay: 1.5, duration: 1.5 } },
    exit: {
      x: "-100vw",
      transition: { ease: "easeInOut" },
    },
  };
  return (
    <div>
      <AnimatePresence>
        <Switch location={location} key={location.key}>
          <Route exact path="/">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <HomeBanner onCursor={onCursor} />
              <PlacesList />
            </motion.div>
          </Route>
          <Route exact path="/map">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <MapPage />
            </motion.div>
          </Route>
        </Switch>
      </AnimatePresence>
    </div>
  );
}

export default IndexPage;
