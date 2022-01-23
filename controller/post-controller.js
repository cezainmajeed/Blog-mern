import Post from "../model/post.js";


export const createPost = async(req,res)=>{
  //console.log(req.body);
  try{
    const post=await new Post(req.body);
    post.save();
    res.status(200).json("Blog saved Successfully");
  } catch(error) {
    res.status(500).json(error);
  }
}

export const getAllPosts = async(req,res)=> {
  const useremail=req.query.useremail;
  const category=req.query.category;
  let posts;
  try {
    if(useremail)
    posts=await Post.find({useremail:useremail});
    else if(category)
    posts=await Post.find({category:category});
    else
    posts=await Post.find({});
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json(error);
  }
}

export const getPost = async(req,res)=> {
  try{
    const post = await Post.findById(req.params.id);
    res.status(200).json(post);
  } catch(error) {
    res.status(500).json(error);
  }
}

export const updatePost = async(req,res)=>{
  try {
    const post=await new Post(req.body);
    const updatedPost= await Post.findOneAndUpdate({_id:post._id},{$set:{title:post.title,description:post.description,image:post.image}},{upsert:true});
    res.status(200).json("Blog Updated Successfully");
  } catch(error) {
    res.status(500).json(error);
  }
}

export const deletePost= async(req,res)=>{
  try{
    const id=req.params.id;
    const foundPost=await Post.findById(id);
    await foundPost.remove();
    res.status(200).json("Blog deleted Successfully!");
  } catch(error) {
    res.status(500).json(error);
  }
}
