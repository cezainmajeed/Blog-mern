import React, {Fragment} from "react";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";


import Signup from "./authenticate/Signup";
import Dashboard from "./authenticate/Dashboard";
import Login from "./authenticate/Login";
import ForgotPassword from "./authenticate/ForgotPassword";
import PrivateRoute from "./authenticate/PrivateRoute";
import UpdateProfile from "./authenticate/UpdateProfile";
import VerifyEmail from "./authenticate/VerifyEmail";


import Home from "./home/Home";
import DetailView from "./detail/DetailView";
import CreatePost from "./create/CreatePost";
import Update from "./create/Update";

import About from "./About";

import { AuthProvider } from "../contexts/AuthContext";

function App() {
  return (
    <>
    <Router>
    <Fragment>
       <AuthProvider>
          <Routes>

            <Route exact path="/" element={<PrivateRoute/>}>
              <Route exact path="/" element={<Home/>} />
            </Route>

            <Route exact path="/detail/:id" element={<PrivateRoute/>}>
              <Route exact path="/detail/:id" element={<DetailView/>} />
            </Route>

            <Route exact path="/create" element={<PrivateRoute/>}>
              <Route exact path="/create" element={<CreatePost/>} />
            </Route>

            <Route exact path="/update/:id" element={<PrivateRoute/>}>
              <Route exact path="/update/:id" element={<Update/>} />
            </Route>

            <Route exact path="/profile" element={<PrivateRoute/>}>
              <Route exact path="/profile" element={<Dashboard/>} />
            </Route>

            <Route path="/signup" element={<Signup/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/forgot-password" element={<ForgotPassword/>} />
            <Route path="/update-profile" element={<UpdateProfile/>} />
            <Route path="/verify-email" element={<VerifyEmail/>} />
            <Route path="/about" element={<About/>} />
          </Routes>
       </AuthProvider>
       </Fragment>
    </Router>
    </>
  );
}

export default App;
