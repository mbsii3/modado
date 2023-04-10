import { useState, useEffect } from "react";
import * as postsService from "../../utilities/posts-service";
import NewPostsForm from "../NewPostsForm/NewPostsForm";

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
            <NewPostsForm posts={posts} setPosts={setPosts} />
            <div>
                { posts.map(post => <div>{ post.content }</div> ) }
            </div>
        </>
    );
}