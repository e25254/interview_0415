export const languageList = { "zh-TW": "繁體中文", en: "English", "zh-CN": "简体中文" };

export const isMatchIgnoreCase = (stringA: string, stringB: string) => {
	return stringA.slice().toLocaleLowerCase() === stringB.slice().toLocaleLowerCase();
};
