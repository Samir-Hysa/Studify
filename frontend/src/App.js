import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Landing from "./landing/Landing";
import Navbar from "./navbar/Navbar";
import SignIn from "./auth/SignIn";
import SignUp from "./auth/SignUp";
import { UserRoute } from "./auth/privateRoute";
import react from "react";

function App() {
  return (
    <Router>
      <Navbar />
      <Route path="/signup" exact>
        <SignUp />
      </Route>

      <Route path="/" exact>
        <SignIn />
      </Route>

      <UserRoute path="/Landing">
        <Landing />
      </UserRoute>
    </Router>
  );
}

export default App;
