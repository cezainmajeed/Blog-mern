import React, {useRef,useState} from "react";
import { Form,Button,Card,Alert,Container } from "react-bootstrap";
import { Link,useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

export default function UpdateProfile() {
  const { currentUser,verifyEmail } = useAuth();
  const [error,setError]=useState("");
  const [loading,setLoading]=useState(false);
  const [message,setMessage]=useState("");
  const navigate=useNavigate();

  async function handleSubmit(e) {
    try{
      e.preventDefault();
      setMessage("");
      setError("");
      setLoading(true);
      await verifyEmail();
      setMessage("Check your inbox for further instructions.");
    } catch {
      setMessage("Failed to verify email");
    }
    setLoading(false);
  }


  return (
    <Container className="d-flex align-items-center justify-content-center" style={{minHeight:"100vh"}}>
    <div className="w-100" style={{maxWidth:"350px"}}>
    <Card>
    <Card.Body>
    <h2 className="text-center mb-4">Verify Email</h2>
    {error && <Alert variant="danger">{error}</Alert>}
    {message && <Alert variant="success">{message}</Alert>}
    <Form onSubmit={handleSubmit}>

    <Button disabled={loading} className="w-100 mt-2" type="submit">Click here to verify email</Button>

    </Form>
    </Card.Body>
    </Card>
    <div className="w-100 text-center mt-2">
      <Link to="/login">login</Link>
    </div>
    </div>
    </Container>
  );
}
