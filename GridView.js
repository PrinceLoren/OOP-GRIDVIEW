class GridView {
	/**
	 *  properties
	 * @param [array] _tableClass - css class...
	 * @param [array] data - entry data
	 * @param [array] _attribute (what and where from entry data)
	 * @param [array] _element (where put on page)
	 * @param [array] _header (header table)
	 * @param [array] _headerClass css header class
	 */

	constructor() {
		this._header = ''
		this._headerClass = []
		this._tableClass = []
		this._element = 'body'
		this._attribute = []
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
			this.headerClass = headerClass
			return true
		}
		return false
	}

	/**
	 * Method set header
	 */

	set element(element) {
		if (document.querySelector(element)) {
			this.element = document.querySelector(element)
			return true
		}
		return false
	}

	/**
	 * Method for show GridViewTable
	 */

	render() {}
}
