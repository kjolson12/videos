import axios from 'axios';

const KEY = 'AIzaSyD4m1KdfsJ4iAi3-LpT8sr5V8k4m8DmBtA';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
});