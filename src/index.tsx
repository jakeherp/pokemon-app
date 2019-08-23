import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

import App from "./App"
import Pokemon from "./Pokemon"

ReactDOM.render(
	<Router>
		<Switch>
			<Route exact path="/" component={App} />
			<Route path="/:slug" component={Pokemon} />
		</Switch>
	</Router>,
	document.getElementById("root"),
)
