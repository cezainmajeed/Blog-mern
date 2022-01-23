import axios from "axios";

const URL = "";

export const sendPost = async(post)=> {
  try {
      return await axios.post(`${URL}/create`,post);
  } catch(error) {
    console.log("Error while calling sendPost API. ",error);
  }
};

export const getAllPosts= async(params)=>{
  try {
    let response=await axios.get(`${URL}/posts${params}`);
    return response.data;
  } catch(error){
    console.log("Error while calling getAllPosts. ",error);
  }
};

export const getPost = async(id)=>{
  try {
    let response=await axios.get(`${URL}/post/${id}`);
    return response.data;
  } catch(error) {
    console.log("Error while calling getPost API",error);
  }
}

export const updatePost = async(post)=>{
  try{
    return await axios.post(`${URL}/update/${post._id}`,post);
  } catch(error) {
    console.log("Error while calling updatePost API",error);
  }
}

export const deletePost = async(id)=>{
  try{
    return await axios.post(`${URL}/delete/${id}`);
  } catch (error) {
    console.log("Error while calling deletePost API",error);
  }
}

export const uploadFile= async(data)=>{
  try{
    return await axios.post(`${URL}/file/upload`,data);
  } catch(error) {
    console.log("Error while calling uploadFile API",error);
  }
}
