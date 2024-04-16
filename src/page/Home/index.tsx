import React from "react";
import { languageList } from "../../utils";
import { Trans, useTranslation } from "react-i18next";
import { useLocation, useNavigate } from "react-router-dom";

export default function Home() {
	const { t } = useTranslation();
	const path = useLocation();
	const navigate = useNavigate();
	const handleChangeLngPath = (changeLng: string) => {
		const currentPath = path.pathname;
		const currentLng = currentPath.split("/")[1];
		const result = currentPath.replace(currentLng, changeLng);
		return result;
	};
	return (
		<div style={{ width: "400px" }}>
			<div style={{ display: "flex", width: "100%", justifyContent: "center", border: "1px solid #888", color: "yellow" }}>
				<Trans
					i18nKey={"languageSwitcher"}
					t={t}
				>
					<ul style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
						{Object.values(languageList).map((lng, lngIndex) => (
							<li
								key={lng}
								style={{ cursor: "pointer" }}
								onClick={() => {
									const lngKey = Object.keys(languageList)[lngIndex];
									navigate(handleChangeLngPath(lngKey), { replace: true });
								}}
							>
								{lng}
							</li>
						))}
					</ul>
				</Trans>
			</div>
			<div>
				<h1>{t("main.hello")}</h1>
			</div>
		</div>
	);
}
