import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import logo from "./img/efiewaakye.jpg";

const useStyles = makeStyles({
	root: {
		flexGrow: 1,
	},
});

function Navbar() {
	const classes = useStyles();
	const [value, setValue] = React.useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};
	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-info">
			<div className="container">
				<img src={logo} alt="logo" width="200"></img>
				<Paper className={classes.root}>
					<Tabs
						value={value}
						onChange={handleChange}
						indicatorColor="primary"
						textColor="primary"
						centered
					>
						<Tab label="Menu" />
						<Tab label="About" />
						<Tab label="Cart" />{" "}
						<i className="material-icons">shopping_cart</i>
					</Tabs>
				</Paper>
			</div>
		</nav>
	);
}

export default Navbar;
