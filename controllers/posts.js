import PostMessage from "../models/postMessage.js";

export const getPosts = async (req,res) => {
    try {
        const postMessages = await PostMessage.find();
        console.log(postMessages);
    } catch (err) {
    }
}

export const createPost = (req,res) => {
    res.send("Post Creation");
}