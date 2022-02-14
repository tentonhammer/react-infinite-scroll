export default class ImagesService {
    BASE_URL = 'http://placeimg.com/640/480/animals';

    getImage = async () => {
        const request = await fetch(this.BASE_URL, {
            mode: "no-cors"
        });
        const response = await request.arrayBuffer();
        console.log('getImage response', response);
        return response;
    }
}
