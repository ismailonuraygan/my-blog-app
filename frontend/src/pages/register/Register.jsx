import "./register.css"
import {Link} from "react-router-dom";
import {useState, useEffect} from 'react';
import axios from 'axios';

function Register() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);
    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
        const res = await axios.post("/auth/register",{
            username,
            email,
            password
        })
            res.data && window.location.replace('/login');
        }catch(err){
            setError(true)
        }
    }
    
    return (
        <div className="register">
            <span className="registerTitle">Register</span>
            <form className="registerForm" onSubmit={handleSubmit}>
                <label className="name">Username</label>
                <input type="text" onChange={(e)=> {setUsername(e.target.value)}} className="registerInput" placeholder="Enter your username" />
                <label className="email">Email</label>
                <input type="text" onChange={(e)=> {setEmail(e.target.value)}} className="registerInput" placeholder="Enter your email" />
                <label className="password" >Password</label>
                <input type="password" onChange={(e)=> {setPassword(e.target.value)}} className="registerInput" placeholder="Enter your password" />
                <div className="buttons">
                    <button className="registerButton" type="submit">Sign up</button>
                    <button className="loginButton">
                    <Link to="/login" className="link">Login</Link>
                    </button>
                </div>
                {error && <span>You already singed-up!</span>}
            </form>
        </div>
    )
}

export default Register
