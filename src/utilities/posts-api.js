import sendRequest from "./send-request";
const BASE_URL = "/api/posts";

export async function getAllPosts() {
    return await sendRequest(BASE_URL);
}

export async function getUserPosts(userId) {
    return await sendRequest(`${BASE_URL}/${userId}/posts`);
}

export async function getPost(id) {
    return await sendRequest(`${BASE_URL}/${id}`);
}

export async function updatePost(postObj) {
    return await sendRequest(`${BASE_URL}/update`, 'PUT', postObj);
}

export async function createPost(postData) {
    return await sendRequest(BASE_URL, 'POST', postData);
}

export async function deletePost(postObj) {
    return await sendRequest(`${BASE_URL}/delete`, 'DELETE', postObj);
}

export async function createComment(commentData, postId) {
    return await sendRequest(`${BASE_URL}/${postId}/comment`, 'POST', commentData);
}

export async function getComments(postId) {
    return await sendRequest(`${BASE_URL}/${postId}/comment/all`)
}