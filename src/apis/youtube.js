import Axios from 'axios';

const KEY = "AIzaSyC2oyWZG-nbcG9pGPeSkOrV1pidMaaOjug";

export default Axios.create({
	baseURL: "https://www.googleapis.com/youtube/v3",
	params: {
		part: "snippet",
		type: "videos",
		key: KEY,
		maxResults: 5
	}
})