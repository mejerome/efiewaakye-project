import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ListSubheader from "@material-ui/core/ListSubheader";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import DraftsIcon from "@material-ui/icons/Drafts";
import SendIcon from "@material-ui/icons/Send";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles((theme) => ({
	root: {
		width: "100%",
		maxWidth: 400,
		backgroundColor: theme.palette.background.paper,
	},
	nested: {
		paddingLeft: theme.spacing(4),
	},
}));

export default function NestedList() {
	const classes = useStyles();
	const [open, setOpen] = React.useState(true);

	const handleClick = () => {
		setOpen(!open);
	};

	return (
		<List
			component="nav"
			aria-labelledby="nested-list-subheader"
			subheader={
				<ListSubheader component="div" id="nested-list-subheader">
					EFIE WAAKYE MENU
				</ListSubheader>
			}
			className={classes.root}
		>
			<ListItem button>
				<ListItemIcon>
					<SendIcon />
				</ListItemIcon>
				<ListItemText primary="BIBIARA WOMU PACKAGE" />
				{open ? <ExpandLess /> : <ExpandMore />}
			</ListItem>
			<ListItem button>
				<ListItemIcon>
					<DraftsIcon />
				</ListItemIcon>
				<ListItemText primary="BORGA PACKAGE" />
			</ListItem>
			<ListItem button onClick={handleClick}>
				<ListItemIcon>
					<InboxIcon />
				</ListItemIcon>
				<ListItemText primary="EHORNIHOR PACKAGE" />
				{open ? <ExpandLess /> : <ExpandMore />}
			</ListItem>
		</List>
	);
}
