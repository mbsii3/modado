import { useState, useEffect } from "react";
import * as postsService from "../utilities/posts-service";
import NewPostsForm from "./NewPostsForm";
import EditPopUp from "./EditPopUp";
import { Card, FormGroup, TextField, Typography, Button } from "@mui/material";
import CreateIcon from '@mui/icons-material/Create';


export default function AllPostsFeed() {
    const [posts, setPosts] = useState([]);
    const [btnPopUp, setBtnPopUp] = useState(false)

    useEffect(function() {
        getAllPosts();
    }, []);

    async function getAllPosts() {
        const allPosts = await postsService.index();
        setPosts(allPosts);
    }

    function editPost(id) {
        setBtnPopUp(true);
        console.log(id)
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
                            <EditPopUp trigger={btnPopUp} setTrigger={setBtnPopUp} >
                                <form action="">
                                    <FormGroup>
                                        <TextField />
                                        <Button type="submit">Submit</Button>
                                    </FormGroup>
                                </form>
                            </EditPopUp>
                        </Card>
                        
                    ))}
            </Card>
                   
        </>
    );
}