import {React,useEffect,useState} from "react";
import {Box,makeStyles,FormControl,InputBase,Button,TextareaAutosize} from "@material-ui/core";
import {AddCircle} from "@material-ui/icons";
import {useParams,useNavigate} from "react-router-dom";

import {getPost,updatePost,uploadFile} from "../../service/api";

import NavBar from "../NavBar";

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

function Update(){
  const [post,setPost]=useState({});
  const [file,setFile]=useState('');
  const [imageURL,setImageURL]=useState('');
  const {id} = useParams();
  const classes=useStyles();


  const navigate=useNavigate();

  const url=post.image?post.image:"https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80";


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

  useEffect(()=>{
    const fetchData= async()=>{
      let data=await getPost(id);
      console.log(data);
      setPost(data);
    }
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

  const handleChange=(e)=>{
    setPost({...post,[e.target.name]:e.target.value});
  }

  const savePost= async()=>{
    await updatePost(post);
    navigate(`/detail/${post._id}`);
  }

  return (
    <>
    <NavBar/>
    <Box style={{marginTop:64}}>
    <Box className={classes.container}>
    <img className={classes.image} src={url} alt="banner" />

    <FormControl className={classes.form}>
    <label htmlFor="fileInput">
    <AddCircle color="action" fontSize="large"/>
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
         value={post.title}
         name="title"
    />
    <Button variant="contained" color="primary" onClick={()=>savePost()}>Update</Button>
    </FormControl>
    <TextareaAutosize
         onChange={(e)=>handleChange(e)}
         rowsMin={5}
         placeholder="Write Your Blog here..."
         value={post.description}
         className={classes.textarea}
         name="description"
    />
    </Box>
    </Box>
    </>
  );
}

export default Update;
