import React from 'react';
import SearchBar from './SearchBar.js';
import VideoList from './VideoList.js'
import VideoDetail from './VideoDetail.js'
import './App.css';
import YouTube from '../apis/youtube.js';


class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = { videos: [], selectedVideo: null };
	}
	
	componentDidMount() {
		// Default search term when page is first loadedasdasd
		this.onTermSubmit("cats");
	}

	onTermSubmit = async (searchTerm) => {
		const res = await YouTube.get('/search', {
			params: {q: searchTerm}
		})

		// Brings up a list of 5 videos on the right hand side and
		// automatically plays the first video in the left side
		this.setState({ 
			videos: res.data.items,
			selectedVideo: res.data.items[0]
		});
	};
	
	onVideoSelect = (video) => {
		console.log("From the App", video);
		this.setState({selectedVideo: video});
	}

	render() {
		return(
			<div className="ui container">
				<SearchBar onTermSubmit={this.onTermSubmit}/>
				<div className="ui grid">
					<div className="ui row">
						<div className="eleven wide column">
							<VideoDetail selectedVideo={this.state.selectedVideo}/>
						</div>
						<div className="five wide column">
							<VideoList
								onVideoSelect={this.onVideoSelect}
								videos={this.state.videos}
							/>
						</div>
					</div>
				</div>
			</div>
		);
	};
};

export default App;