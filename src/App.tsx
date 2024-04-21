import React, { useEffect } from "react";
import {
  Navigate,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";
import "./App.css";
import { isMatchIgnoreCase, languageList, routerArray } from "./utils";
import ErrorLng from "./page/ErrorLng";
import { useTranslation } from "react-i18next";
import Header from "./component/Header";

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
    const lngString = Object.keys(languageList).find((string) =>
      isMatchIgnoreCase(string, currentLng)
    );
    // change localStorage lng
    i18n.changeLanguage(lngString);
  }, [i18n, navigate, path]);

  return (
    <div
      style={{
        display: "flex",
        gap: "40px",
        flexDirection: "column",
        alignItems: "center",
        width: "70vw",
        height: "100%",
      }}
    >
      <Header />
      <Routes>
        {Object.keys(languageList).map((lng) => {
          return (
            <Route
              key={lng}
              path={`/${lng}/*`}
              caseSensitive
              element={
                <Routes>
                  {routerArray.map((route) => {
                    const RouteComponent = route.element;
                    return (
                      <Route
                        key={route.id}
                        path={route.path}
                        element={<RouteComponent />}
                      />
                    );
                  })}
                  <Route
                    path="/*"
                    element={<Navigate to={`/${lng}/home`} replace />}
                  />
                </Routes>
              }
            />
          );
        })}
        <Route path="/*" element={<ErrorLng />} />
      </Routes>
    </div>
  );
}

export default App;
