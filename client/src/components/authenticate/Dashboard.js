import React, {useState} from "react";
import { Card,Button,Alert,Container } from "react-bootstrap";
import { Link,useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import NavBar from "../NavBar";
import {Box} from "@material-ui/core"

function Dashboard() {
  const [error,setError]=useState("");
  const { currentUser,logout } = useAuth();
  const navigate=useNavigate();

  async function handleLogout() {
    setError("");
    try {
      await logout();
      navigate("/login");
    } catch {
      setError("Failed to Logout!");
    }
  }

  return (
    <>
    <NavBar/>
    <Box style={{marginTop:64}}>
    <Container className="d-flex align-items-center justify-content-center" style={{minHeight:"100vh"}}>
    <div className="w-100" style={{maxWidth:"350px"}}>
    <Card>
    <Card.Body>
    <h2 className="text-center mb-4">Profile</h2>
    {error && <Alert variant="danger">{error}</Alert>}
    {console.log(currentUser)}
    <strong>Email : </strong>{currentUser.email}
    <br />
    <strong>Name : </strong>{currentUser.displayName}
    <Link to={`/?useremail=${currentUser.email}`} className="btn btn-primary w-100 mt-3 mb-3">Your Post</Link>
    <Link to="/update-profile" className="btn btn-primary w-100 mt-3 mb-3">Update Profile</Link>
    </Card.Body>
    </Card>
    <div className="w-100 text-center mt-2">
      <Button variant="danger" onClick={handleLogout}>Logout</Button>
    </div>
    </div>
    </Container>
    </Box>
    </>
  );
}

export default Dashboard;
