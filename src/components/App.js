import React, {useEffect, useState} from 'react';
import SearchBar from './SearchBar.js';
import VideoList from './VideoList.js'
import VideoDetail from './VideoDetail.js'
import './App.css';
import useVideos from '../hooks/useVideos.js';

const App = () => {
	const [selectedVideo, setSelectedVideo] = useState(null);
	const [videos, search] = useVideos("hololive");

	useEffect(() => {
		setSelectedVideo(videos[0]);
	}, [videos])
	
	const onVideoSelect = (video) => {
		console.log("From the App", video);
		setSelectedVideo(video);
	}
	
	return(
		<div className="ui container">
			<SearchBar onFormSubmit={search}/>
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