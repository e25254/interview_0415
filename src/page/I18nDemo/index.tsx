import React from "react";
import { useTranslation } from "react-i18next";

export default function I18nDemo() {
  const { t } = useTranslation();
  return <div>{t("main.hello")}</div>;
}
