import "./login.css"

function Login() {
    return (
        <div className="login">
            <span className="loginTitle">Login</span>
            <form className="loginForm">
                <label className="email">Email</label>
                <input type="text" className="loginInput" placeholder="Enter your email" />
                <label className="password" >Password</label>
                <input type="password" className="loginInput" placeholder="Enter your password" />
                <div className="buttons">
                    <button className="loginButton">Login</button>
                    <button className="registerButton">Register</button>
                </div>
            </form>
        </div>
    )
}

export default Login
