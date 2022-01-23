import React from "react";
import {Box,Typography,makeStyles} from "@material-ui/core";

const useStyles=makeStyles({
  image:{
    background:`url(${"https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg"}) center/55% repeat-x #000`,
    width:"100%",
    height: "50vh",
    display:"flex",
    flexDirection:"column",
    alignItems:"center",
    justifyContent:"center",
    '& :first-child':{
      fontSize:65,
      color:"#ffffff",
      lineHeight:1,
    },
    '& :last-child':{
      fontSize:20,
      background:"#ffffff"
    }
  }
});


function Banner()
{
  const classes=useStyles();
  return (
    <Box className={classes.image}>
    <Typography className="strokeme">BLOG</Typography>
    <Typography>CEZAIN MAJEED</Typography>
    </Box>
  );
}

export default Banner;
