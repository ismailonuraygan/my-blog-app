import "./home.css";
import Header from "../../header/Header";
import Posts from "../../posts/Posts";
import Sidebar from "../../sidebar/Sidebar";

function Home() {
    return (
        <>
            <Header/>
            <div className="home">
                <Sidebar />
            </div>
        </>
    )
}

export default Home
