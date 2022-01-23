import React from "react";
import Banner from "./Banner";
import Categories from "./Categories";
import Posts from "./Posts";
import {Grid,Box} from "@material-ui/core"
import NavBar from "../NavBar";

function Home(){
  return (
    <>
    <NavBar/>
    <Box style={{marginTop:64}}>
    <Banner/>
    <Grid container>
      <Grid item lg={2} sm={2} xs={12}>
        <Categories/>
      </Grid>
      <Grid container item lg={10} sm={10} xs={12}>
        <Posts/>
      </Grid>
    </Grid>
    </Box>
    </>
  );
}

export default Home;
