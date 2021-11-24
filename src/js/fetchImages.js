import axios from 'axios';
export default class ImagesApiService {
    constructor() {
        this.searchQuery = '';
        this.page = 1;
    }

async fetchImages() {
    const BASE_URL = 'https://pixabay.com/api/';
    try {
        const images = await axios.get(`${BASE_URL}?key=24478789-76d6e60c0790e252f4c605529&q=${this.searchQuery}&image_type=photo&orientation=horizontal&safesearch=true&per_page=40&page=${this.page}`)
        this.incrementPage();
        return images;
    } catch (error) {
        console.log(error);
    }
}
resetPage() {
        this.page = 1;
    }

    incrementPage() {
        this.page += 1;
    }

    decrementPage() {
        this.page -= 1;
}
}