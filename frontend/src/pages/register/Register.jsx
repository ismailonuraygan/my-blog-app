import "./register.css"
import {Link} from "react-router-dom";
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
                    <button className="loginButton">
                    <Link to="/login" className="link">Login</Link>

                    </button>
                </div>
            </form>
        </div>
    )
}

export default Register
