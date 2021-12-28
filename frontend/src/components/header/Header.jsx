import "./header.css"
function Header() {
    return (
        <div className='header'>
            <div className="headerTitles">
                <span className="headerTitleSmall">My Blog App</span>
                {/* <span className="headerTitleLarge">Blog</span> */}
            </div>
            <img className="headerImage" src={require("../../img/banner.jfif")}
             alt="" />
        </div>
    )
}

export default Header
