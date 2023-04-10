import { useState, useEffect } from "react";
import * as postsService from "../../utilities/posts-service";
import NewPostsForm from "../NewPostsForm/NewPostsForm";
import { Card } from "@mui/material";

export default function AllPostsFeed() {
    const [posts, setPosts] = useState([]);

    useEffect(function() {
        getAllPosts();
    }, []);

    async function getAllPosts() {
        const allPosts = await postsService.index();
        setPosts(allPosts);
    }

    return (
        <>
            <Card sx={{mt: 2}} >
                <Card sx={{}} >
                    <NewPostsForm setPosts={setPosts} />
                </Card>
                <Card>
                    { posts.map((post) => (
                        <div key={post._id}>
                            <h3>{post.user.firstName} {post.user.lastName}</h3>
                            <div>@{post.user.userName}</div>
                            <div>{post.content}</div>
                        </div>
                    ))}
                </Card>
            </Card>
        </>
    );
}