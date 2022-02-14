import axios from "axios";
import IPost from "../types";

export default class PostsService {
    BASE_URL = 'https://jsonplaceholder.typicode.com/posts';

    getPosts = async (page = 1, limit = 10): Promise<IPost[]> => {
        // TODO: сделать таймаут
        const response = await axios.get<IPost[]>(`${this.BASE_URL}?_page=${page}&_limit=${limit}`);
        console.log('getPosts response', response);
        return response.data;
    }
}
