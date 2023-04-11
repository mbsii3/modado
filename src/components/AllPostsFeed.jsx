import { useState, useEffect } from "react";
import * as postsService from "../utilities/posts-service";
import NewPostsForm from "./NewPostsForm";
import EditPopUp from "./EditPopUp";
import { Card, FormGroup, TextField, Typography, Button } from "@mui/material";
import CreateIcon from '@mui/icons-material/Create';
import DeleteIcon from '@mui/icons-material/Delete';


export default function AllPostsFeed() {
    const [posts, setPosts] = useState([]);
    const [btnPopUp, setBtnPopUp] = useState(false)
    const [editedPost, setEditedPost] = useState({content: ''});

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
        setBtnPopUp(true);
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
        setBtnPopUp(false);
    }

    return (
        <>
            <Card sx={{mt: 2}} >
                <Card >
                    <NewPostsForm setPosts={setPosts} />
                </Card>
            </Card>
            <Card sx={{mt: 2}}>
            
                    { posts.map((post) => (
                        
                        <Card variant="outlined" sx={{m: 1, p: 1.5}} key={post._id} >
                            <Typography variant="h6" >{post.user.firstName} {post.user.lastName}</Typography>
                            <Typography variant="body2" sx={{mt: -1}} >@{post.user.userName}</Typography>
                            <Typography variant="body1" sx={{mt: 1}} >{post.content}</Typography>
                            <CreateIcon onClick={() => editPost(post._id)} />
                            <DeleteIcon onClick={() => deletePost(post._id)} />
                            <EditPopUp trigger={btnPopUp} setTrigger={setBtnPopUp} >
                                <form onSubmit={handleSubmit} >
                                    <FormGroup>
                                        <TextField id="outlined-basic" variant="outlined"  name="content" value={editedPost.content}  onChange={handleChange} />
                                        <Button type="submit">Edit</Button>
                                    </FormGroup>
                                </form>
                            </EditPopUp>
                        </Card>
                        
                    ))}
            </Card>
                   
        </>
    );
}