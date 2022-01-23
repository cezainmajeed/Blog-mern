import React, {useState} from "react";
import {AppBar,Toolbar,Typography,makeStyles} from "@material-ui/core";
import {Link,useNavigate} from "react-router-dom";

import { useAuth } from "../contexts/AuthContext";

const useStyles=makeStyles({
  component:{
    background:"#ffffff",
    color:"black"
  },
  container:{
    justifyContent:"center",
    '&>*':{
      padding:20
    }
  },
  link:{
    textDecoration:"none",
    color:"inherit"
  },
  logout:{
    cursor:"pointer"
  }
})

function NavBar(){
  const [error,setError]=useState("");
  const { currentUser,logout } = useAuth();
  const navigate=useNavigate();
  const classes=useStyles();

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
    <AppBar className={classes.component}>
    <Toolbar className={classes.container}>
    <Link className={classes.link} to={"/"}><Typography>HOME</Typography></Link>
    <Link className={classes.link} to={"/about"}><Typography>ABOUT</Typography></Link>
    <Link className={classes.link} to={"/profile"}><Typography>PROFILE</Typography></Link>
    <Typography className={classes.logout}  onClick={handleLogout}>LOGOUT</Typography>
    </Toolbar>
    </AppBar>
  );
}

export default NavBar;
