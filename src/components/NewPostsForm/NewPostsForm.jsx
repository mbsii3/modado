import { useState } from "react";
import * as postsService from "../../utilities/posts-service";


export default function NewPostsForm({posts, setPosts, user}) {
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
            <form action="" onSubmit={handleSubmit} >
                <label htmlFor="content">Content:
                    <input type="text" name="content" id="content" value={newPost.content} onChange={handleChange} />
                </label>
                
                <input type="submit" />
            </form>
        </>
    );
}