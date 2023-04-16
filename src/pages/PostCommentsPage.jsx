import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import * as postsService from "../utilities/posts-service";
import { Box, FormGroup, Card, TextField, Button, Grid, Typography } from "@mui/material";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

export default function PostCommentsPage() {
    const [post, setPost] = useState('');
    const [comment, setComment] = useState({ content: '' });
    const [comments, setComments] = useState([]);
    let {postId} = useParams();
    dayjs.extend(relativeTime)

    useEffect(function() {
        getComments();
        getPost();
    }, []);

    async function getPost() {
        const post = await postsService.getPost(postId);
        setPost(post);
    }

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
        <Card sx={{mt: 2, p: 1}}>
            <Card variant="outlined" sx={{m: 1, p: 1.5}} >
                <Typography variant="h5">{post.content}</Typography>
            </Card>
        </Card>
            
        <Card sx={{ mt: 2 }}>
            <Box sx={{mt: 1, p: 1}}> 
                <form onSubmit={handleSubmit}>
                
                <FormGroup>
                    <TextField id="outlined-basic" label="Leave a Comment" variant="outlined" name="content" value={comment.content} onChange={handleChange} />
                    <Button type="submit" >Submit</Button>
                </FormGroup>
                
                </form>
            </Box> 
        </Card>

        { comments.map((comment) => (
            <Card sx={{mt: 2, p: 1}}>
                <Card variant="outlined" sx={{m: 1, p: 1.5}} key={comment._id} >
                    <Typography>{comment.content}</Typography>
                </Card>
                <Box sx={{display: "flex", justifyContent: "right", mx: -.5, mb: -1}}>
                                <Typography sx={{fontSize: "11px"}}> Commented {dayjs(comment.createdAt).fromNow()}</Typography>
                            </Box>
            </Card>
            
        )) }

        </Grid>
        <Grid item xs></Grid>
        </Grid>
           

        </>
        
        );
}