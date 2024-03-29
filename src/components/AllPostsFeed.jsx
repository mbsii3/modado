import { useState, useEffect } from "react";
import * as postsService from "../utilities/posts-service";
import NewPostsForm from "./NewPostsForm";
import EditPopUp from "./EditPopUp";
import userImage from "../images/user.jpg";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { Card, FormGroup, TextField, Typography, Button, Link, Box, InputLabel, Paper } from "@mui/material";
import CreateIcon from '@mui/icons-material/Create';
import ClearIcon from '@mui/icons-material/Clear';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';


export default function AllPostsFeed({user}) {
    const [posts, setPosts] = useState([]);
    const [editBtnPopUp, setEditBtnPopUp] = useState(false)
    const [editedPost, setEditedPost] = useState({content: ''});
    dayjs.extend(relativeTime)
    

    useEffect(function() {
        getAllPosts();
    }, []);

    async function getAllPosts() {
        const allPosts = await postsService.index();
        setPosts(allPosts);
    }

    async function deletePost(id) {
        let postToDelete = await postsService.getPost(id)
        await postsService.deletePost(postToDelete);
        const allPosts = await postsService.index();
        setPosts(allPosts);
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
        const allPosts = await postsService.index();
        setPosts(allPosts);
        setEditBtnPopUp(false);
    }

    return (
        <>
            <Card sx={{mt: 2}} >
                <Card >
                    <NewPostsForm setPosts={setPosts} />
                </Card>
            </Card>
        
            <Card sx={{mt: 2, p: 1}}>
            
                    { posts.map((post) => (
                        
                        <Card variant="outlined" sx={{m: 1, p: 1.5}} key={post._id} >
                            
                            { user._id === post.user._id ?
                            <Box sx={{ display: "flex", justifyContent: "right"}}>
                                <CreateIcon sx={{cursor: "pointer", color: 'primary.main', fontSize: "2.5vmin", my: -1}} onClick={() => editPost(post._id)} />
                                <ClearIcon sx={{cursor: "pointer", color: "red", fontSize: "2.6vmin", my: -1, mr: -1}} onClick={() => deletePost(post._id)} />
                            </Box>
                            : <Box sx={{mt: 1}}></Box>}
        
                            <img className="comment-user-img" src={userImage} alt="" />
                            <Typography variant="subtitle1"  >{post.user.firstName} {post.user.lastName}</Typography>
                            <Typography variant="body2" sx={{mt: -1}} >@{post.user.userName}</Typography>
                            <Typography variant="body2" sx={{mt: -.4, fontSize: "12px"}} >{post.user.location}</Typography>
                            <Typography variant="body1" sx={{mx: 3, my: 4.5}} >{post.content}</Typography>
                            

                            <Box sx={{display: "flex", justifyContent: "space-between", mx: -.9, mb: -1.5}}>
                                <Link href={`/posts/${post._id}`}><ChatBubbleOutlineIcon sx={{cursor: "pointer", color: 'primary.main', fontSize: "2.5vmin", mt: -.7, mr: .5}}></ChatBubbleOutlineIcon></Link>
                                <Typography sx={{fontSize: "11px"}}> Posted {dayjs(post.createdAt).fromNow()}</Typography>
                            </Box>

                            <EditPopUp trigger={editBtnPopUp} setTrigger={setEditBtnPopUp} >
                                <Paper sx={{p: 5}}>
                                <form onSubmit={handleSubmit} >
                                    <FormGroup>
                                        <InputLabel >Changed your mind?</InputLabel>
                                        <TextField id="outlined-basic" variant="outlined"  name="content" value={editedPost.content}  onChange={handleChange} />
                                        <Button type="submit">Edit</Button>
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