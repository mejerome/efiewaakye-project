import bibiara from "./../img/bibiara.JPG";
import ehornihor from "./../img/3hornihor.jpg";
import borga from "./../img/borga.jpg";

const initState = {
	items: [
		{
			id: 1,
			title: "Bibiara wo mu",
			desc:
				"waakye, gari, spaghetti, fish, egg, wele, meat, yamuadi3, fried plantains",
			price: 42,
			img: bibiara,
		},
		{
			id: 2,
			title: "Borga package",
			desc:
				"waakye, gari, spaghetti, egg, wele, meat, yamuadi3, fried plantains",
			price: 37,
			img: borga,
		},
		{
			id: 3,
			title: "Ehornihor",
			desc: "waakye, gari, spaghetti, egg, wele, meat, fried plantains",
			price: 35,
			img: ehornihor,
		},
	],
	addedItems: [],
	total: 0,
};

const cartReducer = (state = initState, action) => {
	return state;
};

export default cartReducer;
