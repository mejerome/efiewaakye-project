import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Waakye() {
	const [waakye, setWaakye] = useState([]);
	const [hasError, setError] = useState(false);
	// function fetchData() {
	// 	const res = menu;
	// 	res.json()
	// 		.then((res) => {
	// 			console.log(menu);
	// 			setWaakye(menu);
	// 		})
	// 		.catch((error) => {
	// 			setError(error);
	// 		});
	// }
	const menu = [
		{
			id: 1,
			header: "BIBIARA WO MU PACKAGE",
			description:
				"waakye, gari, spaghetti, fish, egg, wele, meat, yamuadi3, fried plantains",
			image: "",
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
    

    return ()
}
