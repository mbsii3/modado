import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import * as postsService from "../utilities/posts-service";
import EditPopUp from "./EditPopUp";
import userImage from "../images/user.jpg";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { Card, FormGroup, TextField, Typography, Button, Box, Paper, InputLabel } from "@mui/material";
import CreateIcon from '@mui/icons-material/Create';
import ClearIcon from '@mui/icons-material/Clear';
import UserNewPostsForm from "./UserNewPostForm";

export default function UserPostsFeed() {
    const [posts, setPosts] = useState([]);
    const [editBtnPopUp, setEditBtnPopUp] = useState(false)
    const [editedPost, setEditedPost] = useState({content: ''});
    let { userId } = useParams();
    dayjs.extend(relativeTime)

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
        
                            <Box sx={{ display: "flex" , justifyContent: "right"}}>
                                <CreateIcon sx={{cursor: "pointer", color: "primary.main", fontSize: "2.5vmin", my: -1}} onClick={() => editPost(post._id)} />
                                <ClearIcon sx={{cursor: "pointer", color: "red", fontSize: "2.6vmin", my: -1, mr: -1}} onClick={() => deletePost(post._id)} />
                            </Box>

                            <img className="comment-user-img" src={userImage} alt="" />
                            <Typography variant="subtitle1" >{post.user.firstName} {post.user.lastName}</Typography>
                            <Typography variant="body2" sx={{mt: -1 }} >@{post.user.userName}</Typography>
                            <Typography variant="body2" sx={{mt: -.4, fontSize: "12px"}} >{post.user.location}</Typography>
                            <Typography variant="body1" sx={{ml: 3, my: 3}} >{post.content}</Typography>

                            <Box sx={{display: "flex", justifyContent: "right", mx: -.9, mb: -1.5}}>
                                <Typography sx={{fontSize: "11px"}}> Posted {dayjs(post.createdAt).fromNow()}</Typography>
                            </Box>
                            
                            <EditPopUp trigger={editBtnPopUp} setTrigger={setEditBtnPopUp} >
                            <Paper sx={{p: 5}}>
                                <form onSubmit={handleSubmit} >
                                    <FormGroup>
                                        <InputLabel sx={{fontFamily: 'outfit'}} >Changed your mind?</InputLabel>
                                        <TextField id="outlined-basic" variant="outlined"  name="content" value={editedPost.content}  onChange={handleChange} />
                                        <Button type="submit" sx={{fontFamily: 'outfit'}}>Edit</Button>
                                    </FormGroup>
                                </form>
                                </Paper>
                            </EditPopUp>
                        </Card>
                        
                    ))}
            </Card>
                   
        </>
    );
}