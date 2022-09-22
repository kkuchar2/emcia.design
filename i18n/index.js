const en = require("./translations.en.json");
const pl = require("./translations.pl.json");

const i18n = {
    translations: {
        en: en.i18n,
        pl: pl.i18n,
    },
    defaultLang: "en",
    useBrowserDefault: false,
};

module.exports = i18n;
