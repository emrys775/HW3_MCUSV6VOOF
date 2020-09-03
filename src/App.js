import React from "react";
import Navigator from "./component/Navigator";
import FirstFile from "./component/FirstFile";
import Wallpaper from "./component/Wallpaper";
import "./component/global.css";
import "./component/layout.css";


function App() {
  return (
    <header className="header">
      <div className="container">
        <Navigator />
        <FirstFile />
        <Wallpaper />
      </div>
    </header>
  );
}
export default App;
