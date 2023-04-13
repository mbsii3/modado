import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import * as postsService from "../utilities/posts-service";
import EditPopUp from "./EditPopUp";
import userImage from "../images/user.jpg";
import { Card, FormGroup, TextField, Typography, Button, Box, InputLabel } from "@mui/material";
import CreateIcon from '@mui/icons-material/Create';
import DeleteIcon from '@mui/icons-material/Delete';
import UserNewPostsForm from "./UserNewPostForm";

export default function UserPostsFeed({user}) {
    const [posts, setPosts] = useState([]);
    const [editBtnPopUp, setEditBtnPopUp] = useState(false)
    const [editedPost, setEditedPost] = useState({content: ''});
    let { userId } = useParams();

    useEffect(function() {
        getUserPosts();
    }, []);

    async function getUserPosts() {
        const userPosts = await postsService.userIndex(userId);
        setPosts(userPosts);
    }

    async function deletePost(id) {
        let postToDelete = await postsService.getPost(id)
        await postsService.deletePost(postToDelete);
        const userPosts = await postsService.userIndex(userId);
        setPosts(userPosts);
    }


    async function editPost(id) {
        setEditBtnPopUp(true);
        let postToEdit = await postsService.getPost(id)
        setEditedPost(postToEdit);
    }

    function handleChange(e) {
        setEditedPost({ ...editedPost, [e.target.name ]: e.target.value });
    }

    async function handleSubmit(e) {
        e.preventDefault();
        await postsService.updatePost(editedPost)
        setEditedPost({content: ''});
        const userPosts = await postsService.userIndex(userId);
        setPosts(userPosts);
        setEditBtnPopUp(false);
    }
    return (
        <>
            <Card sx={{mt: 2}} >
                <Card >
                    <UserNewPostsForm setPosts={setPosts} />
                </Card>
            </Card>
            <Card sx={{mt: 2}}>
            
                    { posts.map((post) => (
                        
                        <Card variant="outlined" sx={{m: 1, p: 1.5}} key={post._id} >
        
                            <img className="comment-user-img" src={userImage} alt="" />
                            <Typography variant="subtitle1" sx={{mt: .7, fontFamily: 'outfit'}} >{post.user.firstName} {post.user.lastName}</Typography>
                            <Typography variant="body2" sx={{mt: -1, fontFamily: 'outfit'}} >@{post.user.userName}</Typography>
                            <Typography variant="body1" sx={{ml: 3, mt: 3, fontFamily: 'outfit'}} >{post.content}</Typography>

                
                            <Box sx={{ display: "flex" , justifyContent: "right"}}>
                                <CreateIcon sx={{cursor: "pointer", color: "blue", fontSize: "2.5vmin", my: -1}} onClick={() => editPost(post._id)} />
                                <DeleteIcon sx={{cursor: "pointer", color: "red", fontSize: "2.5vmin", my: -1, mr: -1}} onClick={() => deletePost(post._id)} />
                            </Box>
                            
                            <EditPopUp trigger={editBtnPopUp} setTrigger={setEditBtnPopUp} >
                                <form onSubmit={handleSubmit} >
                                    <FormGroup>
                                        <InputLabel sx={{fontFamily: 'outfit'}} >Changed your mind?</InputLabel>
                                        <TextField id="outlined-basic" variant="outlined"  name="content" value={editedPost.content}  onChange={handleChange} />
                                        <Button type="submit" sx={{fontFamily: 'outfit'}}>Edit</Button>
                                    </FormGroup>
                                </form>
                            </EditPopUp>
                        </Card>
                        
                    ))}
            </Card>
                   
        </>
    );
}