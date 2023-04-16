import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import * as postsService from "../utilities/posts-service";
import { Box, FormGroup, TextField, Button, Grid } from "@mui/material";

export default function PostCommentsPage() {
    const [comment, setComment] = useState({ content: '' });
    const [comments, setComments] = useState([]);
    let {postId} = useParams();

    useEffect(function() {
        getComments()
    }, []);

    async function getComments() {
        const comments = await postsService.getComments(postId);
        setComments(comments);
    }

    function handleChange(e) {
        setComment({ ...comment, [e.target.name ]: e.target.value });
    }

    async function handleSubmit(e) {
        e.preventDefault();
        setComment({ content: '' });
        await postsService.createComment(comment, postId);
        const comments = await postsService.getComments(postId);
        setComments(comments);
    }

    return (
        <>

        <Grid container spacing={0} >
        <Grid item xs></Grid>
        <Grid item xs={5}>
            
        <Box sx={{mt: 1, p: 1}}> 
        <form onSubmit={handleSubmit}>
        
        <FormGroup>
            <TextField sx={{fontFamily: 'outfit'}} id="outlined-basic" label="Leave a Comment" variant="outlined" name="content" value={comment.content} onChange={handleChange} />
            <Button type="submit" sx={{fontFamily: 'outfit'}} >Submit</Button>
        </FormGroup>
        
        </form>
        </Box> 

        { comments.map((comment) => (
            <h1 key={comment._id}>{comment.content}</h1>
        )) }

        </Grid>
        <Grid item xs></Grid>
        </Grid>
           

        </>
        
        );
}