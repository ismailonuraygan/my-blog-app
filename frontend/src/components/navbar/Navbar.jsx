import { Link } from "react-router-dom";
import "./navbar.css";
import {useContext} from 'react';
import {Context} from '../../context/Context'

function Navbar() {
  const {user, dispatch} = useContext(Context);
  const handleLogout = () => {
    dispatch({type: "logout"})
  }

  return (
    <div className="navbar">
      <div className="navLeft">
        <i className="navIcon fab fa-facebook-square"></i>
        <i className="navIcon fab fa-twitter-square"></i>
        <i className="navIcon fab fa-pinterest-square"></i>
        <i className="navIcon fab fa-instagram-square"></i>
      </div>
      <div className="navCenter">
        <ul className="navList">
          <li className="navListItem">
            <Link to="/" className="link">
              HOME
            </Link>
          </li>
          <li className="navListItem">
            <Link to="/about" className="link">
              ABOUT
            </Link>
          </li>
          <li className="navListItem">
            <Link to="/contact" className="link">
              CONTACT
            </Link>
          </li>
          <li className="navListItem">
            <Link to="/write" className="link">
              WRITE
            </Link>
          </li>
          <li className="navListItem" onClick={handleLogout}>{user && "LOGOUT"}</li>
        </ul>
      </div>
      <div className="navRight">
        {user ? (
          <img
            className="navImg"
            src={user.profilePicture}
            alt=""
          />
        ) : (
          <ul className="navList">
            <li className="navListItem">
              <Link to="/login" className="link">
                LOGIN
              </Link>
            </li>
            <li className="navListItem">
              <Link to="/register" className="link">
                REGISTER
              </Link>
            </li>
          </ul>
        )}

        <i class="navSearchIcon fas fa-search"></i>
      </div>
    </div>
  );
}

export default Navbar;
