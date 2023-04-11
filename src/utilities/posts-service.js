import * as postsAPI from "../utilities/posts-api";

export async function index() {
    return await postsAPI.getAllPosts();
}

export async function createPost(postData) {
    return await postsAPI.createPost(postData);
}

export async function getPost(id) {
    return await postsAPI.getPost(id);
}

export async function updatePost(postObj) {
    return await postsAPI.updatePost(postObj);
}