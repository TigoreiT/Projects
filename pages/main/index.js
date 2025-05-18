import { ProductCardComponent } from '../../components/product-card/index.js'
import { ProductPage } from '../product/index.js'
import { productsData } from '../../data.js' // Добавить импорт

export class MainPage {
	constructor(parent) {
		this.parent = parent
	}

	get pageRoot() {
		return document.getElementById('main-page')
	}

	getHTML() {
		return `
                <div id="main-page" class="d-flex flex-wrap"><div/>
            `
	}

	getData() {
		return productsData // Замена статичные данные на импортированные
	}

	render() {
		this.parent.innerHTML = ''
		const html = this.getHTML()
		this.parent.insertAdjacentHTML('beforeend', html)

		const data = this.getData()
		data.forEach(item => {
			const productCard = new ProductCardComponent(this.pageRoot)
			productCard.render(item, this.clickCard.bind(this))
		})
	}

	clickCard(e) {
		const cardId = Number(e.target.dataset.id) // Преобразовать ID в число

		const productPage = new ProductPage(this.parent, cardId)
		productPage.render()
	}
}
