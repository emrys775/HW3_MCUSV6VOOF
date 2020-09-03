import React from "react";
import "../component/global.css";
import "../component/sample-wallpaper.css";

function Wallpaper() {
  return (
    <div>
      <div className="sample-wallpaper">
        {/* <!-- Wallpaper #1 -->*/}
        <article className="wallpaper">
          <img src={require("../assets/venom-1.jpg")} alt="" />
        </article>

        {/* <!-- Wallpaper #2 -->*/}
        <article className="wallpaper">
          <img src={require("../assets/hulk-1.jpg")} alt="" />
        </article>

        {/* <!-- Wallpaper #3 -->*/}
        <article className="wallpaper">
          <img src={require("../assets/venom-2.jpg")} alt="" />
        </article>
      </div>
    </div>
  );
}

export default Wallpaper;
