import axios from "axios";

class PhotoService {

    constructor() {
        this.api = axios.create({
            baseURL: `${import.meta.env.VITE_API_URL}/photo`,
        });
        this.api.interceptors.request.use((config) => {

            const storedToken = localStorage.getItem("authToken");

            if (storedToken) {
                config.headers = { Authorization: `Bearer ${storedToken}` };
            }

            return config;
        });
    }

    getPhoto() {
        return this.api.get("/list");
    }

    getPhotoDetails(photo_id) {
        return this.api.get(`/${photo_id}`);
    }

    newPhoto(photoData) {
        return this.api.post('/newPhoto', photoData);
    }

    addPhotoToUser(idUser, idPhoto) {
        return this.api.post('/addPhotoToUser', { idUser, idPhoto });

    }

    deletedPhoto(idUser, idPhoto) {

        return this.api.post('/deletedPhoto', { idUser, idPhoto });
    }

}

const photoService = new PhotoService();

export default photoService;