import React from "react";
import { NavLink, Link } from "react-router-dom";

const NavigationDots = ({ active }) => {
  return (
    <div className="app__navigation">
      {["home", "experience", "projects", "contact", "portfolio"].map(
        (item, index) => (
          <a
            href={`#${item}`}
            key={item + index}
            className="app__navigation-dot"
            style={active === item ? { backgroundColor: "#ffa903" } : {}}
          ></a>
        )
      )}

      {/* {["portfolio", "publications", "resume"].map((item, index) => (
        <Link
          to={`${item}`}
          key={item + index}
          className="app__navigation-dot"
          style={active === item ? { backgroundColor: "#ffa903" } : {}}
        ></Link>
      ))} */}
    </div>
  );
};

export default NavigationDots;
