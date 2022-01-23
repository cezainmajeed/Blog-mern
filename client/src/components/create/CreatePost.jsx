import {React, useState,useEffect} from "react";
import {Box,makeStyles,FormControl,InputBase,Button,TextareaAutosize,FormLabel,RadioGroup,FormControlLabel,Radio} from "@material-ui/core";
import {AddCircle} from "@material-ui/icons";
import {sendPost,uploadFile} from "../../service/api";
import { useNavigate } from 'react-router-dom';

import NavBar from "../NavBar";

import { useAuth } from "../../contexts/AuthContext";

const useStyles=makeStyles((theme)=>({
  container:{
    padding:"0px 100px",
    [theme.breakpoints.down('md')]: {
      padding:0
    }
  },
  image:{
    width:"100%",
    height:"50vh",
    objectFit:"cover"
  },
  form:{
    display:"flex",
    flexDirection:"row",
    marginTop:10
  },
  textField:{
    flex:1,
    margin: "0px 30px",
    fontSize:25
  },
  textarea:{
    marginTop:50,
    width:"100%",
    border:"none",
    fontSize:18,
    '&:focus-visible':{
      outline:"none"
    }
  }
}));

const initialValue ={
  title:"",
  description:"",
  image:"",
  username:"",
  useremail:"",
  category:"All",
  createDate:new Date()
}

function CreatePost(){

  const { currentUser } = useAuth();

  const [post,setPost]=useState(initialValue);
  const [file,setFile]=useState('');
  const [imageURL,setImageURL]=useState('');

  const classes=useStyles();
  const url=post.image ? post.image : "https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80";
  const navigate=useNavigate();


  useEffect(()=>{


    const getImage=async()=>{
      if(file){
        const data=new FormData();
        data.append("name",file.name);
        data.append("file",file);

        const image=await uploadFile(data);
        post.image=image.data;
        setImageURL(image.data);
      }
    }
    getImage();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[file])

  const handleChange=(e)=>{
    post.username = currentUser.displayName;
    post.useremail = currentUser.email;
    setPost({...post, [e.target.name]: e.target.value });
  }

  const savePost = async()=>{
    await sendPost(post);
    navigate("/");
  }

  const onChangeValue = (e)=> {
    post.category = e.target.value;
  }
  return (
    <>
    <NavBar/>
    <Box style={{marginTop:64}}>
    <Box className={classes.container}>
    <img className={classes.image} src={url} alt="banner" />

    <FormControl className={classes.form}>
    <label htmlFor="fileInput">
    <AddCircle color="action" fontSize="large"/> Add Image
    </label>
    <input
        type="file"
        id="fileInput"
        style={{display:"none"}}
        onChange={(e)=>setFile(e.target.files[0])}
    />
    <InputBase
         onChange={(e)=>handleChange(e)}
         className={classes.textField}
         placeholder="title"
         name="title"
    />


    <Button onClick={()=>savePost()} variant="contained" color="primary">Publish</Button>


    </FormControl>
    <TextareaAutosize
         onChange={(e)=>handleChange(e)}
         rowsMin={5}
         placeholder="Write Your Blog here..."
         className={classes.textarea}
         name="description"
    />

    <FormLabel component="legend">Select Category</FormLabel>
    <RadioGroup aria-label="Category" name="category" defaultValue="All" onChange={onChangeValue}>
    <FormControlLabel value="Web Development" control={<Radio />} label="Web Development" />
    <FormControlLabel value="Data Structures & Algorithms" control={<Radio />} label="Data Structures & Algorithms" />
    <FormControlLabel value="Machine Learning" control={<Radio />} label="Machine Learning" />
    <FormControlLabel value="Blockchain" control={<Radio />} label="Blockchain" />
    <FormControlLabel value="Others" control={<Radio />} label="Others" />
    </RadioGroup>
    </Box>

    </Box>
    </>
  );
}

export default CreatePost;
