import React, { useEffect } from "react";
import { Navigate, Route, Routes, useLocation, useNavigate } from "react-router-dom";
import "./App.css";
import Home from "./page/Home";
import I18nDemo from "./page/I18nDemo";
import { isMatchIgnoreCase, languageList } from "./utils";
import ErrorLng from "./page/ErrorLng";
import { useTranslation } from "react-i18next";

function App() {
	const { i18n } = useTranslation();
	const path = useLocation();
	const navigate = useNavigate();

	useEffect(() => {
		const currentLng = path.pathname.split("/")[1];
		if (currentLng === i18n.language) return;
		if (
			Object.keys(languageList)
				.map((string) => string.toLocaleLowerCase())
				.indexOf(currentLng.toLocaleLowerCase()) === -1
		)
			return;
		const lngString = Object.keys(languageList).find((string) => isMatchIgnoreCase(string, currentLng));
		// change localStorage lng
		i18n.changeLanguage(lngString);
	}, [i18n, navigate, path]);

	return (
		<Routes>
			{Object.keys(languageList).map((lng) => {
				return (
					<Route
						key={lng}
						path={`/${lng}/*`}
						caseSensitive
						element={
							<Routes>
								<Route
									path="/home"
									element={<Home />}
								/>
								<Route
									path={"/i18n_demo"}
									element={<I18nDemo />}
								/>
								<Route
									path="/*"
									element={
										<Navigate
											to={`/${lng}/home`}
											replace
										/>
									}
								/>
							</Routes>
						}
					/>
				);
			})}
			<Route
				path="/*"
				element={<ErrorLng />}
			/>
		</Routes>
	);
}

export default App;
