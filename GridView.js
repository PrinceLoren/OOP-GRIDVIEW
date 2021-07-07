class GridView {
	/**
	 *  properties
	 * @param [array] _tableClass - css class...
	 * @param [array] data - entry data
	 * @param [array] attribute (what and where from entry data)
	 * @param [array] _element (where put on page)
	 * @param [array] _header (header table)
	 * @param [array] _headerClass css header class
	 */

	constructor() {
		this._header = ''
		this._headerClass = []
		this._tableClass = []
		this._element = 'body'
		this.attribute = []
	}
	/**
	 * Method set header
	 */

	set header(header) {
		if (typeof header === 'string' && header.trim() !== '') {
			this._header = header.trim()
			return true
		}
		return false
	}

	/**
	 * Method set header
	 */

	set headerClass(headerClass) {
		if (typeof headerClass === 'object') {
			this._headerClass = headerClass
			return true
		}
		return false
	}

	/**
	 * Method set header
	 */

	set element(element) {
		if (document.querySelector(element)) {
			this.element = element
			return true
		}
		return false
	}

	/**
	 * Method for show GridViewTable
	 */

	render() {
		// show header
		if (this._header) {
			const header = document.createElement('h1')
			header.textContent = this._header
			this._headerClass.forEach(cssClass => {
				header.classList.add(cssClass)
			})
			document.querySelector(this._element).append(header)
		}

		// show Table

		const table = document.createElement('table')
		this._tableClass.forEach(cssClass => {
			table.classList.add(cssClass)
		})
		// create table header
		let trHeader = document.createElement('tr')
		for (let key in this.attribute) {
			let th = document.createElement('th')
			if (this.attribute[key].label) {
				th.textContent = this.attribute[key].label
			} else {
				th.textContent = key
			}
			trHeader.append(th)
		}

		table.append(trHeader)
		// draw table
		for (let i = 0; i < this.data.length; i++) {
			let dataArr = this.data[i] // one string data
			let tr = document.createElement('tr')
			for (let key in this.attribute) {
				let td = document.createElement('td')
				let value = dataArr[key]
				// is function in value?
				if (this.attribute[key].value) {
					value = this.attribute[key].value(dataArr)
				}
				// attribute src
				if (this.attribute[key].src) {
					td.innerHTML = value
				} else {
					td.textContent = value
				}
				tr.append(td)
			}
			table.append(tr)
		}

		document.querySelector(this._element).append(table)
	}
}
