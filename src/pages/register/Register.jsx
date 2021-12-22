import "./register.css"

function Register() {
    return (
        <div className="register">
            <span className="registerTitle">Register</span>
            <form className="registerForm">
                <label className="name">Username</label>
                <input type="text" className="registerInput" placeholder="Enter your username" />
                <label className="email">Email</label>
                <input type="text" className="registerInput" placeholder="Enter your email" />
                <label className="password" >Password</label>
                <input type="password" className="registerInput" placeholder="Enter your password" />
                <div className="buttons">
                    <button className="registerButton">Register</button>
                    <button className="loginButton">Login</button>
                </div>
            </form>
        </div>
    )
}

export default Register
