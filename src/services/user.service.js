import axios from 'axios'

class UsersService {

    constructor() {
        this.api = axios.create({
            baseURL: `${import.meta.env.VITE_API_URL}/user`
        })
        this.api.interceptors.request.use((config) => {

            const storedToken = localStorage.getItem("authToken");

            if (storedToken) {
                config.headers = { Authorization: `Bearer ${storedToken}` }
            }

            return config
        })

    }
    getUsers() {
        return this.api.get('/list')
    }

    getUserDetails(user_id) {
        return this.api.get(`/${user_id}`);
    }

    editUser(user_id, userData) {
        return this.api.post(`/edit/${user_id}`, { userData })
    }

    deleteUser(user_id) {
        return this.api.delete(`/delete/${user_id}`)
    }

    addCommentOfUser(idUser, idComment) {
        return this.api.post('/addCommentUser', { idUser, idComment })
    }

    removeCommentToUser(idUser, idComment) {
        return this.api.post('/deleteCommentUser', { idUser, idComment })
    }
}

const usersService = new UsersService()

export default usersService