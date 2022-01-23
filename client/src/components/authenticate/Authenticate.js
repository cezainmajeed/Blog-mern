import React, {Fragment} from "react";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";


import Signup from "./Signup";
import Dashboard from "./Dashboard";
import Login from "./Login";
import ForgotPassword from "./ForgotPassword";
import PrivateRoute from "./PrivateRoute";
import UpdateProfile from "./UpdateProfile";
import VerifyEmail from "./VerifyEmail";


import { AuthProvider } from "../../contexts/AuthContext";

function Authenticate() {
  return (
    <Container className="d-flex align-items-center justify-content-center" style={{minHeight:"100vh"}}>
    <div className="w-100" style={{maxWidth:"350px"}}>
    <Router>
    <Fragment>
       <AuthProvider>
          <Routes>
            <Route exact path="/profile" element={<PrivateRoute/>}>
              <Route exact path="/profile" element={<Dashboard/>} />
            </Route>
            <Route path="/signup" element={<Signup/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/forgot-password" element={<ForgotPassword/>} />
            <Route path="/update-profile" element={<UpdateProfile/>} />
            <Route path="/verify-email" element={<VerifyEmail/>} />
          </Routes>
       </AuthProvider>
       </Fragment>
    </Router>
    </div>
    </Container>
  );
}

export default Authenticate;
