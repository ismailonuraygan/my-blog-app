import { Link } from "react-router-dom"
import "./login.css"
import {useRef, useContext} from 'react';
import { Context } from "../../context/Context";
import axios from "axios";

function Login() {
    const userRef = useRef();
    const passwordRef = useRef();
    const { user, dispatch, isFetching } = useContext(Context)

    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch({type: "login_start"});
        try{
            const res = await axios.post("/auth/login", {
                username: userRef.current.value,
                password: passwordRef.current.value,
            })
            dispatch({type : "login_success", payload: res.data});
        }catch(err) {
            dispatch({type : "login_failure"});
        }
    };
console.log(user)

    return (
        <div className="login">
            <span className="loginTitle">Login</span>
            <form className="loginForm" onSubmit={handleSubmit}>
                <label className="email">Username</label>
                <input type="text" className="loginInput" ref={userRef} placeholder="Enter your username" />
                <label className="password" >Password</label>
                <input type="password" className="loginInput" ref={passwordRef} placeholder="Enter your password" />
                <div className="buttons">
                    <button className="loginButton" type="submit" disabled={isFetching}>Login</button>
                    <button className="registerButton">
                        <Link to="/register" className="link">Register</Link>
                    </button>
                </div>
            </form>
            
        </div>
    )
}

export default Login
