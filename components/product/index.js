export class ProductComponent {
	constructor(parent) {
		this.parent = parent
	}

	getHTML(data) {
		return `
            <div class="product-page">
                <div class="card mb-3" style="max-width: 800px;">
                    <div class="row g-0">
                        <div class="col-md-6">
                            <img src="${data.src}" class="img-fluid rounded-start" alt="${data.title}">
                        </div>
                    <div class="col-md-6">
                        <div class="card-body">
                            <h2 class="card-title">${data.title}</h2>
                            <p class="card-text">${data.text}</p>
                            <p class="text-muted">Акция действует до 31.12.2023</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `
	}

	render(data) {
		const html = this.getHTML(data)
		this.parent.insertAdjacentHTML('beforeend', html)
	}
}
