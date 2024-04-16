export const languageList = ["zh-TW", "en", "zh-CN"];

export const isMatchIgnoreCase = (stringA: string, stringB: string) => {
	return stringA.slice().toLocaleLowerCase() === stringB.slice().toLocaleLowerCase();
};
