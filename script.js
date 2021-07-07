const dataExample = [
	{
		company: 'Bonjo <b>INC</b>',
		chef: 'Alex Anderson',
		country: 'Czech',
	},
	{
		company: 'Center of Europe',
		chef: 'Arnold Grimm',
		country: 'UK',
	},
	{
		company: 'Full Tower',
		chef: 'Roland McDonald',
		country: 'Austria',
	},
	{
		company: 'Island Security',
		chef: 'Jeff Bezos',
		country: 'USA',
	},
	{
		company: 'Ford Motors',
		chef: 'Henry Ford',
		country: 'USA',
	},
]

let gridView = new GridView()
gridView.header = 'Hello'
gridView.headerClass = ['header', 'Site-header']
gridView.attribute = {
	company: {
		label: 'Company',
		src: 'html',
	},
	chef: {
		label: 'Director',
	},
	country: {
		label: 'Country',
		value: data => {
			if (data['country'] === 'Czech') {
				return data['country'] + ' map'
			}
			return data['country']
		},
	},
}

gridView.data = dataExample
gridView.render()
