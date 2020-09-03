import React from "react";
import "../component/global.css";
import "../component/layout.css";
import "../component/search.css";


function FirstFile() {
  
    return (
      <header>
        <div>
          <h1 className="title">Mavel's Fearless</h1>
          <p className="subtitle">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. beatae
            molestias earum eveniet.
          </p>

          <div className="search-bar">
            <input type="search" placeholder="Search" />
          </div>
          </div>
      </header>
    );
}

export default FirstFile;
