import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Homepage from "./components/Homepage";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Navbar />
				<Switch>
					<Route exact path="/" component={Homepage} />
					{/* <Route path="/about" component={About} />
					<Route path="/cart" component={Cart} /> */}
				</Switch>
			</BrowserRouter>
		</div>
	);
}

export default App;
