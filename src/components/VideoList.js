import React from 'react';
import VideoItem from './VideoItem.js';

const VideoList = (props) => {
	const renderedVideosList = props.videos.map((video) => {
		return (
			<VideoItem
				key={video.id.videoId}
				onVideoSelect={props.onVideoSelect}
				video={video}
			/>
		);
	});

	return (
		<div className="ui relaxed divided list">
			{renderedVideosList}
		</div>
	)
}

export default VideoList;