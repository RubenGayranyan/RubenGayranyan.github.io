const translations = {
    am: {
        name_surname: "Ռուբեն Գայրանյան",
        description: "Ուսանող, ծրագրավորող",
        about_title: "Մեր մասին",
        about_text: "Ես Ինֆորմատիկայի և կիրառական մաթեմատիկայի ուսանող եմ։"
    },
    en: {
        name_surname: "Ruben Gayrayan",
        description: "Student, Programmer",
        about_title: "About me",
        about_text: "I am a student of Informatics and Applied Mathematics."
    },
    ru: {
        name_surname: "Рубен Гайранян",
        description: "Студент, программист",
        about_title: "Обо мне",
        about_text: "Я студент факультета информатики и прикладной математики."
    },
    fr: {
        name_surname: "Ruben Gayrayan",
        description: "Étudiant, programmeur",
        about_title: "À propos de moi",
        about_text: "Je suis étudiant en Informatique et Mathématiques Appliquées."
    }
};

const defaultLang = "am";

function loadLanguage(lang) {
    const t = translations[lang] || translations[defaultLang];
    document.querySelectorAll("[data-i18n]").forEach(el => {
        const key = el.getAttribute("data-i18n");
        if (t[key]) el.textContent = t[key];
    });
    document.documentElement.setAttribute("lang", lang);
}

function setLang(lang) {
    loadLanguage(lang);
}

loadLanguage(defaultLang);
