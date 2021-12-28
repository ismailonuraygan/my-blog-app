import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Profile from "./pages/profile/Profile";
import Register from "./pages/register/Register";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { Context } from "./context/Context";
import {useContext} from 'react';

function App() {
  const {user} = useContext(Context);
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/register">
          {user ? <Home /> : <Register />}
        </Route>
        <Route path="/login">
          {user ? <Home /> : <Login />}
        </Route>
        <Route path="/profile">
        {user ? <Profile /> : <Register />}
        </Route>
        <Route path="/write">
        {user ? <Write /> : <Login />}
        </Route>
        <Route path="/post/:postId">
        <Single />
      </Route>
      </Switch>

    </Router>
  );
}

export default App;
