import * as postsAPI from "../utilities/posts-api";

export async function index() {
    return await postsAPI.getAllPosts();
}

export async function userIndex(userId) {
    return await postsAPI.getUserPosts(userId);
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

export async function deletePost(postObj) {
    return await postsAPI.deletePost(postObj);
}

export async function createComment(commentData, postId) {
    return await postsAPI.createComment(commentData, postId);
}

export async function getComments(postId) {
    return await postsAPI.getComments(postId);
}