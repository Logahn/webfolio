import React from "react";
import { NavigationDots, SocialMedia, Overlay } from "../components";

const AppWrap = (Component, idName, classNames) =>
  function HOC() {
    const currentYear = new Date().getFullYear();
    return (
      <div id={idName} className={`app__container ${classNames}`}>
        <div className="overlay">
          <Overlay />
        </div>
        <div className="app__wrapper app__flex">
          <Component />

          <div className="copyright">
            <p className="p-text">Copyright © Adele Chinda {currentYear}</p>
            <p className="p-text">Developed and Maintained by Adele</p>
          </div>
        </div>
        {/* <div className="navDots">
          <NavigationDots active={idName} />
        </div> */}
      </div>
    );
  };

export default AppWrap;
