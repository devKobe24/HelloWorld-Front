class Controller {
	constructor(model, view) {
		this.model = model;
		this.view = view;
		this.init();
	}

	init() {
		this.model.fetchData(data => {
			this.view.updateLabel(data);
		});
	}
}