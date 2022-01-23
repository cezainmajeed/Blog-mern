import React from "react";
import {Box,Typography,makeStyles} from "@material-ui/core";

const useStyles=makeStyles({
  container: {
    height:350,
    margin:20,
    border: "1px solid #d3cede",
    borderRadius: 10,
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    '&>*':{
      padding: "0px 5px 5px 5px"
    }
  },
  image: {
    height:150,
    width:"100%",
    objectFit:"cover",
    borderRadius: "10px 10px 0px 0px"
  },
  category:{
    color:"#909090",
    fontSize:12
  },
  title:{
    fontSize:18,
    fontWeight:600,
    textAlign:"center"
  },
  author:{
    color:"#636363",
    fontSize:13
  },
  desc:{
    fontSize:14,
    wordBreak:"break-word",
  }
})

function Post({post}){
  const classes=useStyles();
  const url= post.image || "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=752&q=80";
  return (
    <Box className={classes.container}>
    <img src={url} alt="wrapper" className={classes.image}/>
    <Typography className={classes.category}>{post.category}</Typography>
    <Typography className={classes.title}>{post.title}</Typography>
    <Typography className={classes.author}>Author : {post.username}</Typography>
    <Typography className={classes.desc}>{(post.description).substring(0,100)} ....</Typography>
    </Box>
  );
}

export default Post;
