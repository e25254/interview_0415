import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import "./i18n";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<BrowserRouter basename="/interview_0415">
		<App />
	</BrowserRouter>
);
