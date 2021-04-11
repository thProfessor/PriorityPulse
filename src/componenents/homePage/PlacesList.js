import React, { useEffect, useState } from "react";

import { data } from "../../assets/files/data";

import { motion } from "framer-motion";

import { NavList } from "../../styles/navigationStyles";
import { Link, Route, Switch } from "react-router-dom";
import MapPage from "../../pages/MapPage";

function PlacesList() {
  const [locate, setLocate] = useState({ x: 25, y: 81 });
  const handleClick = (x, y) => {
    setLocate({
      x: x,
      y: y,
    });
    console.log(locate.x);
  };

  return (
    <div>
      <NavList>
        <ul>
          {data.map((place) => (
            <motion.li
              key={place.id}
              initial={{ x: -108 }}
              whileHover={{
                x: -40,
                transition: {
                  duration: 0.4,
                  ease: [0.6, 0.05, -0.01, 0.9],
                },
              }}
            >
              <Link
                to="/map"
                onClick={() =>
                  handleClick(place.coordinatex, place.coordinatey)
                }
              >
                {place.place}
              </Link>
            </motion.li>
          ))}
        </ul>
      </NavList>
      <Switch>
        <Route exact path="/map">
          <MapPage officex={locate.x} officey={locate.y} />
        </Route>
      </Switch>
    </div>
  );
}

export default PlacesList;
