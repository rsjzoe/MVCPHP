export function SignUp() {
  return (
    <>
      {" "}
      <div className="form-container sign-up-container">
        <form action="#">
          <h1>Create Account</h1>
          <div className="social-container">
            <a href="#" className="social">
              <img src="facebook-svgrepo-com.svg" />
            </a>
            <a href="#" className="social google">
              <img src="google-svgrepo-com.svg" />
            </a>
            <a href="#" className="social instagram">
              <img src="instagram-svgrepo-com.svg" />
            </a>
          </div>
          <span>or your email for inscription</span>
          <div className="inputs">
            <div className="input-container">
              <img className="icon" src="user.svg" />
              <input type="text" placeholder="Enter Pseudo" className="input" />
            </div>

            <div className="input-container">
              <img className="icon" src="mail.svg" />
              <input
                type="email"
                placeholder="Email"
                name="email"
                className="input"
              />
            </div>
            <div className="input-container">
              <img className="icon" src="lock.svg" />
              <input type="password" placeholder="Password" className="input" />
            </div>
          </div>

          <button>Sign on</button>
        </form>
      </div>
    </>
  );
}
