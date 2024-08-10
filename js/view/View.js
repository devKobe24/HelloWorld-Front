class View {
	constructor() {
		this.label = document.getElementById('dataLabel');
	}

	updateLabel(data) {
		this.label.textContent = data;
	}
}