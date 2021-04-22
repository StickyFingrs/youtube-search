import Axios from 'axios';

// YouTube key goes here. Removed since the repo's public.
const KEY = "";

export default Axios.create({
	baseURL: "https://www.googleapis.com/youtube/v3",
	params: {
		part: "snippet",
		type: "videos",
		key: KEY,
		maxResults: 5
	}
})
