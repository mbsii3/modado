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
            <NewPostsForm posts={posts} setPosts={setPosts} user={user} />
            <div>
                { posts.map((post) => (
                    <div key={post._id}>
                        <h1>{post.user.firstName}</h1>
                        <div>{post.content}</div>
                    </div>
                ))}
            </div>
        </>
    );
}