export class ProductComponent {
	constructor(parent) {
		this.parent = parent
	}

	getHTML(data) {
		return `
            <div class="card mb-3" style="width: 940px;">
            	<img src="${data.src}" class="card-img-top" alt="картинка">
            		<div class="card-body">
                		<h5 class="card-title">${data.title}</h5>
                		<p class="card-text">${data.text}</p>
            		</div>
        	</div>
    	`
	}

	render(data) {
		const html = this.getHTML(data)
		this.parent.insertAdjacentHTML('beforeend', html)
	}
}
