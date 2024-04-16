import React, { useEffect } from "react";
import { Navigate, Route, Routes, useLocation, useNavigate } from "react-router-dom";
import "./App.css";
import Home from "./page/Home";
import I18nDemo from "./page/I18nDemo";
import { useTranslation } from "react-i18next";
import { isMatchIgnoreCase, languageList } from "./utils";
// import i18n from "./i18n";

function App() {
	const { i18n } = useTranslation();
	const path = useLocation();
	const navigate = useNavigate();

	const handleErrorLng = () => {
		const currentLng = i18n.language;
		const splitPathArray = path.pathname.split("/");
		const nowLng = splitPathArray[1];
		const fixPath = path.pathname.replace(nowLng, currentLng);
		return nowLng ? fixPath : fixPath.replace(/\/$/, "");
	};

	useEffect(() => {
		const currentLng = path.pathname.split("/")[1];

		if (languageList.map((string) => string.toLocaleLowerCase()).indexOf(currentLng) === -1) return;
		const lngString = languageList.find((string) => isMatchIgnoreCase(string, currentLng));

		// change url lng
		const fixPath = path.pathname.replace(currentLng, lngString);
		navigate(fixPath, { replace: true });

		// change localStorage lng
		i18n.changeLanguage(lngString);
	}, [path, i18n, navigate]);

	return (
		<Routes>
			{languageList.map((lng) => {
				return (
					<Route
						key={lng}
						path={`${lng}/*`}
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
						to={handleErrorLng()}
					/>
				}
			/>
		</Routes>
	);
}

export default App;
