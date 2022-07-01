import {
	BrowserRouter as Router,
	Redirect,
	Route,
	Switch,
} from "react-router-dom";
import LandingPage from "./component/Pages/LandingPage";
import Journey from "./component/Pages/Journey";
import LangueContext from "./component/LangueContext";
import Delivary from "./component/Pages/Services/Delivary";
import AfterSell from "./component/Pages/Services/AfterSell";
import Content from "./component/Pages/Services/Content";
import Copy from "./component/Pages/Services/Copywright";
import Marketing from "./component/Pages/Services/Marketing";
import Media from "./component/Pages/Services/Media";
import Packaging from "./component/Pages/Services/Packaging";
import Photo from "./component/Pages/Services/Photography";
import { React, useContext, useEffect, useState } from "react";

function App() {
	const [langue, setlangue] = useState();
  var val = { langue, setlangue };
	return (
		<LangueContext.Provider value={val}>
			<Router>
				<div className="App">
					<div className="principal">
						<Switch>
							<Route path="/Landingpage">{<LandingPage />}</Route>
							<Route path="/Journey">{<Journey />}</Route>
							<Route path="/Delivary">{<Delivary />}</Route>
							<Route path="/AfterSell">{<AfterSell />}</Route>
							<Route path="/Content">{<Content />}</Route>
							<Route path="/Copy">{<Copy />}</Route>
							<Route path="/Marketing">{<Marketing />}</Route>
							<Route path="/Media">{<Media />}</Route>
							<Route path="/Packaging">{<Packaging />}</Route>
							<Route path="/Photo">{<Photo />}</Route>
							<Redirect to="/Landingpage" />
						</Switch>
					</div>
				</div>
			</Router>
		</LangueContext.Provider>
	);
}

export default App;
