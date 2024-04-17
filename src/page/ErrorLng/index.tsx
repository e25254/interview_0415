import React from "react";
import { Navigate, useLocation } from "react-router-dom";

import { useTranslation } from "react-i18next";
import { languageList } from "../../utils";

export default function ErrorLng() {
  console.log("ErrorLng");
  const { i18n } = useTranslation();

  const path = useLocation();

  const handleErrorLng = () => {
    const currentLng = i18n.language;
    const splitPathArray = path.pathname.split("/");
    const nowLng = splitPathArray[1];
    const currentCaseLng =
      Object.keys(languageList).find(
        (string) => string.toLocaleLowerCase() === nowLng.toLocaleLowerCase()
      ) || currentLng;
    const fixPath = path.pathname.replace(nowLng, currentCaseLng);
    return fixPath;
  };

  return <Navigate to={handleErrorLng()} replace />;
}
