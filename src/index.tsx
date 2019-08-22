import React from "react"
import ReactDOM from "react-dom"
import { Router } from "@reach/router"

import App from "./App"
import Pokemon from "./Pokemon"

ReactDOM.render(
	<Router>
		<App default />
		<Pokemon path="/:number" />
	</Router>,
	document.getElementById("root"),
)
