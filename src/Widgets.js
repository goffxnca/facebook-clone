import React from "react";
import "./Widgets.css";

function Widgets() {
  return (
    <div className="widgets">
      <iframe
        src="https://www.facebook.com/v8.0/plugins/page.php?adapt_container_width=true&app_id=&channel=https%3A%2F%2Fstaticxx.facebook.com%2Fx%2Fconnect%2Fxd_arbiter%2F%3Fversion%3D46%23cb%3Df19b491651a5684%26domain%3Dlocalhost%26origin%3Dhttp%253A%252F%252Flocalhost%253A3000%252Ff149e60857b251c%26relation%3Dparent.parent&container_width=400&height=1500&hide_cover=false&href=https%3A%2F%2Fwww.facebook.com%2Fcnn%2F&locale=en_US&sdk=joey&show_facepile=true&small_header=false&tabs=timeline&width=500"
        width="400px"
        height="100%"
        style={{ border: "none", overflow: "hidden" }}
        scrolling="no"
        frameBorder="0"
        allowTransparency="true"
        allow="encryped-media"
      ></iframe>
    </div>
  );
}

export default Widgets;
