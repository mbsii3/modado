import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import * as postsService from "../utilities/posts-service";
import NewPostsForm from "./NewPostsForm";
import EditPopUp from "./EditPopUp";
import userImage from "../images/user.jpg";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { Card, FormGroup, TextField, Typography, Button, Box, InputLabel } from "@mui/material";
import CreateIcon from '@mui/icons-material/Create';
import ClearIcon from '@mui/icons-material/Clear';


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
                                <CreateIcon sx={{cursor: "pointer", color: "blue", fontSize: "2.5vmin", my: -1}} onClick={() => editPost(post._id)} />
                                <ClearIcon sx={{cursor: "pointer", color: "red", fontSize: "2.5vmin", my: -1, mr: -1}} onClick={() => deletePost(post._id)} />
                            </Box>
                            : <Box sx={{mt: 1}}></Box>}
        
                            <img className="comment-user-img" src={userImage} alt="" />
                            <Typography variant="subtitle1" sx={{mt: .7, fontFamily: 'outfit'}} >{post.user.firstName} {post.user.lastName}</Typography>
                            <Typography variant="body2" sx={{mt: -1, fontFamily: 'outfit'}} >@{post.user.userName}</Typography>
                            <Typography variant="body1" sx={{mx: 3, my: 4.5, fontFamily: 'outfit'}} >{post.content}</Typography>
                            
                            

                            <Box sx={{display: "flex", justifyContent: "space-between", mx: -.9, mb: -1.5}}>
                                <Typography sx={{fontSize: "11px"}}><Link to={`/posts/${post._id}`} >Leave a Comment</Link></Typography>
                                <Typography sx={{fontSize: "11px"}}> Posted {dayjs(post.createdAt).fromNow()}</Typography>
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