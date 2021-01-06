import React from "react";
import { CardView } from "react-card-with-image";
import "react-card-with-image/dist/index.css";

const Menu = () => {
	const items = [
		{
			id: 1,
			header: "BIBIARA WO MU PACKAGE",
			description:
				"waakye, gari, spaghetti, fish, egg, wele, meat, yamuadi3, fried plantains",
			image:
				"https://fonibia.com/public/uploads/preview/waakye-rice-41516803542a693iz2s8i.jpg",
		},
		{
			id: 2,
			header: "BORGA PACKAGE",
			description:
				"waakye, gari, spaghetti, egg, wele, meat, yamuadi3, fried plantains",
			image: "./img/borga.jpg",
		},
		{
			id: 3,
			header: "3HORNIHOR PACKAGE",
			description:
				"waakye, gari, spaghetti, egg, wele, meat, fried plantains",
			image: "./img/3hornihor.jpg",
		},
	];
	return (
		<CardView
			items={items}
			activeColor="#000"
			imageHeight="650px"
			imageWidth="800px"
		/>
	);
};

export default Menu;
