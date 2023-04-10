import * as postsAPI from "../utilities/posts-api";

export async function createPost(postData) {
    return await postsAPI.createPost(postData);
}