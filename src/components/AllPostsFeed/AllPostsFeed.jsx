import { useState, useEffect } from "react";
import * as postsService from "../../utilities/posts-service";
import NewPostsForm from "../NewPostsForm/NewPostsForm";

export default function AllPostsFeed({user}) {
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
            <div>
                <NewPostsForm posts={posts} setPosts={setPosts} user={user} />
            
                { posts.map((post) => (
                    <div key={post._id}>
                        <h3>{post.user.firstName} {post.user.lastName}</h3>
                        <div>@{post.user.userName}</div>
                        <div>{post.content}</div>
                    </div>
                ))}
            </div>
        </>
    );
}