export function Overlay({ iscreate, onclick }) {
  return (
    <>
      <div
        className={`overlay-container ${iscreate ? "active-creat-compte" : ""}`}
        id="overlayCon"
      >
        <div className="overlay">
          <div className="overlay-panel overlay-left">
            {/* <img src="/image/phone.png" alt="" className="mario" /> */}
          </div>

          <div className="overlay-panel overlay-right">
            {/* <img src="/image/mario.gif" alt="" className="mario" /> */}
          </div>
          <div className="name-app">
            Nom App
          </div>
        </div>

        <button
          id="overlayBtn"
          onClick={() => {
            onclick();
          }}
        >
          {iscreate ? "Sign In" : "Sign Up"}
        </button>
      </div>
    </>
  );
}
