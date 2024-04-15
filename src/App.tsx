import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./page/Home";
import I18nDemo from "./page/I18nDemo";
// import i18n from "./i18n";

function App() {
	const validLng = ["en", "zh-TW"];
	// const [language, setLanguage] = useState("zh-TW");
	const language = "zh-TW";
	return (
		<Routes>
			{validLng.map((lng) => {
				return (
					<Route
						path={`${lng}/*`}
						element={
							<Routes>
								<Route
									path="/"
									element={<Home />}
								/>
								<Route
									path={`/i18n_demo`}
									element={<I18nDemo />}
								/>
							</Routes>
						}
					/>
				);
			})}
			<Route
				path="/*"
				element={
					<Navigate
						replace
						to={`${language}`}
					/>
				}
			/>
		</Routes>
	);
}

export default App;
