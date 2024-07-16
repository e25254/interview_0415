import { FunctionComponent } from "react";
import Home from "./page/Home";
import I18nDemo from "./page/I18nDemo";
import AsyncAwaitDemo from "./page/AsyncAwaitDemo";
import CustomHookDemo from "./page/CustomHookDemo";
import ContextDemo from "./page/ContextDemo";
import HOCDemo from "./page/HOCDemo";
import TestPage from "./page/TestPage";
import TestPage2 from "./page/TestPage2";

export const languageList: { [key: string]: string } = {
  "zh-TW": "繁體中文",
  en: "English",
  "zh-CN": "简体中文",
};

export const isMatchIgnoreCase = (stringA: string, stringB: string) => {
  return (
    stringA.slice().toLocaleLowerCase() === stringB.slice().toLocaleLowerCase()
  );
};

export const routerArray: {
  id: number;
  path: string;
  name: string;
  element: FunctionComponent;
}[] = [
  {
    id: 1,
    path: "/home",
    name: "i18nDemo",
    element: Home,
  },
  {
    id: 2,
    path: "/i18n_demo",
    name: "i18nDemo1",
    element: I18nDemo,
  },
  {
    id: 3,
    path: "/async_await_demo",
    name: "AsyncAwaitDemo",
    element: AsyncAwaitDemo,
  },
  {
    id: 4,
    path: "/custom_hook_demo",
    name: "CustomHookDemo",
    element: CustomHookDemo,
  },
  {
    id: 5,
    path: "/context_demo",
    name: "ContextDemo",
    element: ContextDemo,
  },
  {
    id: 6,
    path: "/HOC_demo",
    name: "HOCDemo",
    element: HOCDemo,
  },
  {
    id: 7,
    path: "/test_page",
    name: "TestPage",
    element: TestPage,
  },
  {
    id: 8,
    path: "/test_page2",
    name: "TestPage2",
    element: TestPage2,
  },
];
