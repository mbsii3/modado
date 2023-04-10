import { useState } from "react";
import * as postsService from "../../utilities/posts-service";

export default function NewPostsForm() {
    const [newPost, setNewPost] = useState({
        firstName: '',
        lastName: '',
        userName: '',
        content: '',
    });


    function handleChange(e) {
        setNewPost({ ...newPost, [e.target.name ]: e.target.value });
    }

    async function handleSubmit(e) {
        e.preventDefault();
        await postsService.createPost(newPost);
        setNewPost({
        firstName: '',
        lastName: '',
        userName: '',
        content: '',
        });
    }

    return (
        <>
            <form action="" onSubmit={handleSubmit} >
                <label htmlFor="content">
                    <input type="text" name="content" id="content" value={newPost.content} onChange={handleChange} />
                </label>
                <input type="submit" />
            </form>
        </>
    );
}