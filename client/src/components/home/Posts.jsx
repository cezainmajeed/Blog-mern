import {React,useState,useEffect} from "react";
import Post from "./Post";
import {Grid} from "@material-ui/core";
import {Link,useLocation} from "react-router-dom";

import {getAllPosts} from "../../service/api";

function Posts(){
  let [posts,setPosts]=useState([]);
  const { search }=useLocation();

  useEffect(()=>{
    const fetchdata= async()=>{
      let data=await getAllPosts(search);
      //console.log(data);
      setPosts(data);
    }
    fetchdata();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[posts]);


  return (
    posts.map(post=>(
      <Grid item lg={3} sm={6} xs={12}>
      <Link to={`/detail/${post._id}`} style={{textDecoration:"none",color:"inherit"}}>
      <Post post={post}/>
      </Link>
      </Grid>
    ))
  );
}

export default Posts;
