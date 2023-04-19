import axios from 'axios';

const BASE_URL = 'http://jsonplaceholder.typicode.com';

export const api = {
    getPosts: () => {
        return axios(BASE_URL + "/posts");
    },
    getPost: (id) => {
        return axios(BASE_URL + `/posts/${id}`);
    }
}