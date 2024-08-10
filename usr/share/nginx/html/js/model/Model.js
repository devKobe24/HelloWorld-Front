class Model {
	constructor() {
		this.data = '';
	}

	fetchData(callback) {
		fetch('https://api.devkobe-test.com/api/data')
			.then(response => response.text())
			.then(data => {
				this.data = data;
				callback(data);
			})
			.catch(error => console.error('ERROR FETCHING DATA =======>>>>>>> ', error));
	}
}