import React from "react";
import "./auth.css";

import { Overlay } from "./components/Overlay";
import { useState } from "react";
import { Login } from "./login/login";
import { SignUp } from "./signUp/signUp";

export function Auth() {
  const [isCreate, setCreate] = useState(false);

  return (
    <div className="Auth">
      <div
        className={`container ${isCreate ? "right-panel-active" : ""}`}
        id="container"
      >
        <Login />
        <SignUp />
        <Overlay
          iscreate={isCreate}
          onclick={() => {
            setCreate(!isCreate);
          }}
        />
      </div>

      <div className="hero">
        <div className="bubbles">
          <img src="images/bubble.png" className="imagb1" />
          <img src="images/bubble.png" className="imagb2" />
          <img src="images/bubble.png" className="imagb3" />
          <img src="images/bubble.png" className="imagb4" />
          <img src="images/bubble.png" className="imagb5" />
          <img src="images/bubble.png" className="imagb6" />
          <img src="images/bubble.png" className="imagb7" />
        </div>
      </div>
    </div>
  );
}
