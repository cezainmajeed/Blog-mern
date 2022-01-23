import React from "react";
import {Typography,Box,makeStyles} from "@material-ui/core";
import NavBar from "./NavBar";
import {Link} from "react-router-dom";

const useStyles=makeStyles((theme)=>({
  container:{
    padding:"0px 100px",
    [theme.breakpoints.down('md')]: {
      padding:0
    }
  },
  link:{
    textDecoration:"none",
    color:"inherit"
  }
}))

function About(){
  const classes=useStyles();
  return (
    <>
    <NavBar/>
    <Box style={{marginTop:64}}>
    <Box className={classes.container}>
    <br/>
    <br/>
    <Typography>Hi, I am Cezain Majeed, a pre-final year student pursuing B.Tech in Electrical Engineering from National Institute of Technology, Jamshedpur.</Typography>
    <Typography>This website is designed and developed by me!</Typography>
    <Typography>I am a Web developer and a Programmer.</Typography>
    <Typography>I am currently learning the MERN Stack, Data Structures, Algorithms as well as working to sharpen my problem solving skills.</Typography>
    <Typography>I love to code, learn and explore new things - tech related or otherwise, and it brings me immense pleasure to build something from scratch.</Typography>
    <Typography>In my leisure time I like to play volleyball. </Typography>

    <br/>
    <br/>
    <a className={classes.link} href="https://www.linkedin.com/in/cezain-majeed-56a64a1a5/" target="blank"><Typography>Connect with me on LinkedIn!</Typography></a>
    <br/>
    <a className={classes.link} href="https://github.com/cezainmajeed" target="blank"><Typography>Connect with me on Github!</Typography></a>
    </Box>
    </Box>
    </>
  );
}

export default About;
