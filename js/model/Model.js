class Model {
	constructor() {
		this.data = '';
	}

	fetchData(callback) {
		fetch('https://api.devkobe-example.com/api/contents')
			.then(response => response.text())
			.then(data => {
				this.data = data;
				callback(data);
			})
			.catch(error => console.error('ERROR FETCHING DATA =======>>>>>>> ', error));
	}
}