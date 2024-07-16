import React, {
  ChangeEvent,
  SelectHTMLAttributes,
  useEffect,
  useState,
} from "react";
import { routerArray } from "../../utils";
import { useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Header() {
  const [selectId, setSelectId] = useState<number>(1);
  const navigate = useNavigate();
  const path = useLocation();
  const { i18n } = useTranslation();

  const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const selectOption = routerArray.find(
      (_, routeIndex) => routeIndex === parseInt(event.target.value)
    );
    const lng = i18n.language;
    const newPath = `/${lng}${selectOption.path}`;
    navigate(newPath);
  };

  useEffect(() => {
    const currentPath = path.pathname.split("/")[2];
    const selectOptionIndex = routerArray.findIndex(
      (route) => `/${currentPath}` === route.path
    );
    if (selectOptionIndex) setSelectId(selectOptionIndex);
  }, [selectId, path]);

  return (
    <div>
      <select onChange={handleSelectChange} value={selectId}>
        {routerArray.map((route, routeIndex) => (
          <option key={routeIndex} value={routeIndex}>
            {route.name}
          </option>
        ))}
      </select>
    </div>
  );
}
