export const Locale = () => {
  const userLocale = navigator.languages && navigator.languages.length ? navigator.languages[0] : navigator.language;

  return Intl.getCanonicalLocales(userLocale)[0];
};
