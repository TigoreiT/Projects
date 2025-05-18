import { ProductComponent } from '../../components/product/index.js'
import { BackButtonComponent } from '../../components/back-button/index.js'
import { MainPage } from '../main/index.js'

export class ProductPage {
	constructor(parent, id) {
		this.parent = parent
		this.id = id
	}

	getData() {
		return {
			id: 1,
			src: 'https://cdn.shazoo.ru/c440x240/796178_2itKgg3_330421186c2aca9d947c93649d5ad1e604042543.jpg',
			title: `Акция ${this.id}`,
			text: `Такой акции вы еще не видели ${this.id}`,
		}
	}

	get pageRoot() {
		return document.getElementById('product-page')
	}

	getHTML() {
		return `
                <div id="product-page"></div>
            `
	}

	clickBack() {
		const mainPage = new MainPage(this.parent)
		mainPage.render()
	}

	render() {
		this.parent.innerHTML = ''
		const html = this.getHTML()
		this.parent.insertAdjacentHTML('beforeend', html)

		const backButton = new BackButtonComponent(this.pageRoot)
		backButton.render(this.clickBack.bind(this))

		const data = this.getData()
		const stock = new ProductComponent(this.pageRoot)
		stock.render(data)
	}
}
