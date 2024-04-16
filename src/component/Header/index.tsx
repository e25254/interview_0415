import React, { useEffect, useState } from "react";
import { routerArray } from "../../utils";
import { useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Header() {
	const [selectId, setSelectId] = useState<number>(1);
	const navigate = useNavigate();
	const path = useLocation();
	const { i18n } = useTranslation();

	const handleSelectChange = (event) => {
		const selectOption = routerArray.find((route) => route.name === event.target.value);
		const lng = i18n.language;
		const newPath = `/${lng}${selectOption.path}`;
		navigate(newPath);
	};

	useEffect(() => {
		const currentPath = path.pathname.split("/")[2];
		const selectOption = routerArray.find((route) => `/${currentPath}` === route.path);
		if (selectOption) setSelectId(selectOption.id);
	}, [selectId]);

	return (
		<div>
			<select onChange={handleSelectChange}>
				{routerArray.map((route) => (
					<option selected={route.id === selectId}>{route.name}</option>
				))}
			</select>
		</div>
	);
}
