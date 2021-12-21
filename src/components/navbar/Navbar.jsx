import "./navbar.css"

function Navbar() {
    return (
        <div className='navbar'>
            <div className="navLeft">
                <i className="navIcon fab fa-facebook-square"></i>
                <i className="navIcon fab fa-twitter-square"></i>
                <i className="navIcon fab fa-pinterest-square"></i>
                <i className="navIcon fab fa-instagram-square"></i>
                </div>
            <div className="navCenter">
                <ul className="navList">
                    <li className="navListItem">HOME</li>
                    <li className="navListItem">ABOUT</li>
                    <li className="navListItem">CONTACT</li>
                    <li className="navListItem">WRITE</li>
                    <li className="navListItem">LOGOUT</li>
                </ul>
            </div>
            <div className="navRight">
                <img 
                 className="navImg"
                 src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                 alt="" />
                 <i class="navSearchIcon fas fa-search"></i>
            </div>
        </div>
    )
}

export default Navbar
