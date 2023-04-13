import { useState } from "react";
import { useParams } from "react-router-dom";
import * as postsService from "../utilities/posts-service";
import { TextField, Button, FormGroup, Box } from "@mui/material";


export default function UserNewPostsForm({setPosts}) {
    const [newPost, setNewPost] = useState({
        content: '',
    });
    let { userId } = useParams();
    


    function handleChange(e) {
        setNewPost({ ...newPost, [e.target.name ]: e.target.value });
    }

    async function handleSubmit(e) {
        e.preventDefault();
        await postsService.createPost(newPost);
        
        setNewPost({content: ''});
        const userPosts = await postsService.userIndex(userId);
        setPosts(userPosts);
    }

    return (
        <>
            <Box sx={{mt: 1, p: 1}}>
                <form onSubmit={handleSubmit}>
                    <FormGroup>
                            <TextField sx={{fontFamily: 'outfit'}} id="outlined-basic" label="What's on your mind?" variant="outlined" name="content" value={newPost.content} onChange={handleChange} />
                            <Button type="submit" sx={{fontFamily: 'outfit'}} >Submit</Button>
                    </FormGroup>
                </form>
            </Box>
        </>
    );
}