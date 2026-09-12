const translations = {
    am: {
        prompt_user: "root@ruben-gayranyan",
        name_surname: "Ռուբեն Գայրանյան",
        location_label: "Գտնվելու վայրը:",
        location_value: "Երևան, Հայաստան",
        age_label: "Տարիքը:",
        open_collab: "Բաց եմ նոր առաջարկների և համագործակցության համար",
        tg_join: "միացի՛ր → t.me/rgayranyan",
        lang_armenian: "Հայերեն",
        lang_english: "Անգլերեն",
        lang_russian: "Ռուսերեն",
        lang_french: "Ֆրանսերեն",
        lang_native: "NATIVE",
        lang_professional: "PROFESSIONAL_WORKING",
        lang_professional2: "PROFESSIONAL_WORKING",
        lang_limited: "LIMITED_WORKING"
    },
    en: {
        prompt_user: "root@ruben-gayranyan",
        name_surname: "Ruben Gayranyan",
        location_label: "Location:",
        location_value: "Yerevan, Armenia",
        age_label: "Age:",
        open_collab: "Open to new opportunities & collaborations",
        tg_join: "join channel → t.me/rgayranyan",
        lang_armenian: "Armenian",
        lang_english: "English",
        lang_russian: "Russian",
        lang_french: "French",
        lang_native: "NATIVE",
        lang_professional: "PROFESSIONAL_WORKING",
        lang_professional2: "PROFESSIONAL_WORKING",
        lang_limited: "LIMITED_WORKING"
    },
    ru: {
        prompt_user: "root@ruben-gayranyan",
        name_surname: "Рубен Гайранян",
        location_label: "Местоположение:",
        location_value: "Ереван, Армения",
        age_label: "Возраст:",
        open_collab: "Открыт для новых предложений и сотрудничества",
        tg_join: "подписаться → t.me/rgayranyan",
        lang_armenian: "Армянский",
        lang_english: "Английский",
        lang_russian: "Русский",
        lang_french: "Французский",
        lang_native: "NATIVE",
        lang_professional: "PROFESSIONAL_WORKING",
        lang_professional2: "PROFESSIONAL_WORKING",
        lang_limited: "LIMITED_WORKING"
    },
    fr: {
        prompt_user: "root@ruben-gayranyan",
        name_surname: "Ruben Gayranyan",
        location_label: "Localisation:",
        location_value: "Erevan, Arménie",
        age_label: "Âge :",
        open_collab: "Ouvert aux nouvelles opportunités & collaborations",
        tg_join: "rejoindre le chaîne → t.me/rgayranyan",
        lang_armenian: "Arménien",
        lang_english: "Anglais",
        lang_russian: "Russe",
        lang_french: "Français",
        lang_native: "NATIVE",
        lang_professional: "PROFESSIONAL_WORKING",
        lang_professional2: "PROFESSIONAL_WORKING",
        lang_limited: "LIMITED_WORKING"
    }
};

const defaultLang = "en";

function loadLanguage(lang) {
    const t = translations[lang] || translations[defaultLang];
    document.querySelectorAll("[data-i18n]").forEach(el => {
        const key = el.getAttribute("data-i18n");
        if (t[key] !== undefined) el.textContent = t[key];
    });
    document.documentElement.setAttribute("lang", lang);
    document.querySelectorAll(".lang-btn").forEach(btn => {
        btn.classList.remove("active");
        if (btn.getAttribute("onclick") === `setLang('${lang}')`) {
            btn.classList.add("active");
        }
    });
}

function setLang(lang) {
    loadLanguage(lang);
}

loadLanguage(defaultLang);
