import React, {useEffect, useState} from 'react';
import SearchBar from './SearchBar.js';
import VideoList from './VideoList.js'
import VideoDetail from './VideoDetail.js'
import './App.css';
import YouTube from '../apis/youtube.js';

const App = () => {
	const [videos, setVideos] = useState([]);
	const [selectedVideo, setSelectedVideo] = useState(null);

	const onTermSubmit = async (searchTerm) => {
		const res = await YouTube.get('/search', {
			params: {q: searchTerm}
		})

		// Brings up a list of 5 videos on the right hand side and
		// automatically plays the first video in the left side
		setVideos(res.data.items);
		setSelectedVideo(res.data.items[0])
	};
	
	const onVideoSelect = (video) => {
		console.log("From the App", video);
		setSelectedVideo(video);
	}

	useEffect(() => {
		onTermSubmit("hololive");
	}, [])
	
	return(
		<div className="ui container">
			<SearchBar onTermSubmit={onTermSubmit}/>
			<div className="ui grid">
				<div className="ui row">
					<div className="eleven wide column">
						<VideoDetail selectedVideo={selectedVideo}/>
					</div>
					<div className="five wide column">
						<VideoList
							onVideoSelect={onVideoSelect}
							videos={videos}
						/>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;