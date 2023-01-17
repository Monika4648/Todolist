import './App.css';
function Login() {
  return (
    <div className="main">
      <div className="sub-main">
        <div>
          <div className="imgs">
            <div className="container-image">
              <img src="https://www.bing.com/th?id=OIP._VoTfUzENldEmDbFEcQi4QHaHa&pid=3.1&cb=&w=300&h=300&p=0" alt="profile" className="profile" />
            </div>
          </div>
          <div>
            <h1>Login Page</h1>
            <div>
              <img src="https://www.bing.com/th?id=OIP.PMTXHvDUmx3pdx09IVmlfQHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=2&pid=3.1&rm=2" alt="email" className="email" />
              <input type="text" placeholder="user name" className="name" />
            </div>
            <div className="second-input">
              <img src="https://www.bing.com/th?id=OIP.6xhaMB-G6aJlUTpaEoy1TQHaJA&w=226&h=275&c=8&rs=1&qlt=90&o=6&dpr=2&pid=3.1&rm=2" alt="pass" className="email" />
              <input type="password" placeholder="password" className="name" />
            </div>
            <div className="login-button">
              <button onClick={()=>{
                alert("work in progress")
              }}>Login</button>
            </div>
            <p className="link">
              <a href="#">Forgot password ?</a> Or<a href="#">Sign Up</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;