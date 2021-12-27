
import { Component } from 'react';
import { gifService } from '../services/gif.service.js';
import { GifsList } from '../cmps/GifList.jsx';

import loading from '../assets/imgs/loading.gif';
import Select from 'react-select';

export class GiphyApp extends Component {
	state = {
		gifs: null,
		searchString: '',
		timeOut: 0,
		prevSearch: [],

	};

	componentDidMount() {
		this.searchGifs()


	}

	addSearch = () => {
		if (this.state.timeOut) {
			clearTimeout(this.state.timeOut);
		}
		this.setState({
			timeOut: setTimeout(() => {
				var prevSearch = gifService.addSearch(this.state.searchString);
				this.setState({ prevSearch })

			}, 2000)
		});
	}

	searchGifs(searchString) {
		gifService.search(searchString).then(res => {
			const gifs = res.data
			this.setState({ gifs, searchString })
		})
	}

	render() {
		const { gifs ,prevSearch,searchString} = this.state;
		if (!gifs) return <div className="app-container"><img className='loading' src={loading} alt="loading" /></div>;

		return (
			<div >

				<div className='search-input'>
					<Select
						options={prevSearch}
						defaultValue={searchString}
						onInputChange={(searchString) => {
							if (searchString === '') return
							this.addSearch();
							this.searchGifs(searchString);
						}}
						onChange={(searchString) => {
							this.searchGifs(searchString.value);
						}}
					/>
				</div>
				<GifsList gifs={gifs} />

			</div>
		);
	}
}
