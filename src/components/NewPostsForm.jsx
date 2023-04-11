import { useState } from "react";
import * as postsService from "../utilities/posts-service";
import { TextField, Button, FormGroup, Box } from "@mui/material";


export default function NewPostsForm({setPosts}) {
    const [newPost, setNewPost] = useState({
        content: '',
    });
    


    function handleChange(e) {
        setNewPost({ ...newPost, [e.target.name ]: e.target.value });
    }

    async function handleSubmit(e) {
        e.preventDefault();
        await postsService.createPost(newPost);
        
        setNewPost({content: ''});
        const allPosts = await postsService.index();
        setPosts(allPosts);
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

