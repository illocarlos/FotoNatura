import axios from "axios";

class CommentService {

    constructor() {
        this.api = axios.create({
            baseURL: `${import.meta.env.VITE_API_URL}/comment`,
        });
        this.api.interceptors.request.use((config) => {

            const storedToken = localStorage.getItem("authToken");

            if (storedToken) {
                config.headers = { Authorization: `Bearer ${storedToken}` };
            }

            return config;
        });

    }
    getComment() {
        return this.api.get("/list");
    }
    getcommentId(comment_id) {
        return this.api.get(`/${comment_id}`);
    }
    newComment(commentData) {
        return this.api.post('/newComment', commentData);
    }
    addCommentToPhoto(idComment, idPhoto) {
        return this.api.post('/addCommentToPhoto', { idComment, idPhoto });

    }
    deleteComment(idComment, idPhoto) {
        return this.api.post('deleteComment', { idComment, idPhoto })
    }


}

const commentService = new CommentService();

export default commentService;