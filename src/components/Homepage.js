import React, { Component } from "react";
import { connect } from "react-redux";

class Homepage extends Component {
	render() {
		let itemList = this.props.items.map((item) => {
			return (
				<div className="card" key={item.id}>
					<div className="card-image">
						<img
							src={item.img}
							alt={item.title}
							width="250"
							height="250"
						/>
						<span className="card-title">{item.title}</span>
						<span
							to="/"
							className="btn-floating halfway-fab waves-effect waves-light red"
						>
							<i className="material-icons">add</i>
						</span>
					</div>
					<div className="card-content">
						<p>{item.desc}</p>
						<p>
							<b>Price: GHS {item.price}</b>
						</p>
					</div>
				</div>
			);
		});
		return (
			<div className="container">
				{/* <h3 className="center">Our items</h3> */}
				<div className="box">{itemList}</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		items: state.items,
	};
};

export default connect(mapStateToProps)(Homepage);
