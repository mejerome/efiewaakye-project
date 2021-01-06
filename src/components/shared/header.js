import React from "react";
import { Link, BrowserRouter } from "react-router-dom";
import styles from "./header.scss";

const Header = () => {
	return (
		<header className={styles.header}>
			<BrowserRouter>
				<Link to="/">Menu</Link>
				<Link to="/about">About</Link>
				<Link to="/cart">Cart</Link>
			</BrowserRouter>
		</header>
	);
};

export default Header;
