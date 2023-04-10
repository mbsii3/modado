import sendRequest from "./send-request";
const BASE_URL = "/api/posts";

export async function createPost(postData) {
    return await sendRequest(BASE_URL, 'POST', postData);
}