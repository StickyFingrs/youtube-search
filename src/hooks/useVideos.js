import {useEffect, useState} from 'react';
import YouTube from '../apis/youtube.js';

const useVideos = (defaultSearchTerm) => {
	const [videos, setVideos] = useState([]);

	const search = async (searchTerm) => {
		const res = await YouTube.get('/search', {
			params: {q: searchTerm}
		})

		// Brings up a list of 5 videos on the right hand side and
		// automatically plays the first video in the left side
		setVideos(res.data.items);
	};

	useEffect(() => {
		search(defaultSearchTerm);
	}, [defaultSearchTerm])

	return [videos, search];
};

export default useVideos;