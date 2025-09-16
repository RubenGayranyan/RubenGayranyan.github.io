const translations = {
    am: {
        name_surname: "Ռուբեն Գայրանյան",
        description: "Ուսանող, ծրագրավորող",
        hi: "👋 Ողջո՜ւյն, ես՝ Ռուբեն եմ։",
        about: "👩‍💻 Տեխնոլոգիաների և ծրագրավորման սիրահար եմ․ զբաղվում եմ վեբ, AI, դեսկթոփ և Android նախագծերով։",
        about2: "🎓 Սովորում եմ Հայաստանի Ֆրանսիական համալսարանում՝ Ինֆորմատիկա և կիրառական մաթեմատիկա ֆակուլտետում։",
        about_last: "🚀 Միշտ բաց եմ նոր մարտահրավերների և նախագծերի, որոնք զարգացնում են իմ հմտությունները։ ✨",
        tg_join: "Միացի՛ր իմ ալիքին",
        visits: "Դիտումներ՝"
    },
    en: {
        name_surname: "Ruben Gayrayan",
        description: "Student, Programmer",
        hi: "👋 Hi, I’m Ruben.",
        about: "👩‍💻 I am passionate about technology and programming, working on Web, AI, Desktop, and Android projects.",
        about2: "🎓 I study at the French University in Armenia, Faculty of Informatics and Applied Mathematics.",
        about_last: "🚀 Always open to new challenges and projects that help me grow my skills. ✨",
        tg_join: "Join my channel",
        visits: "Visits:"
    },
    ru: {
        name_surname: "Рубен Гайранян",
        description: "Студент, программист",
        hi: "👋 Привет, я Рубен.",
        about: "👩‍💻 Увлекаюсь технологиями и программированием, занимаюсь веб, AI, десктоп и Android проектами.",
        about2: "🎓 Учусь во Французском университете в Армении, факультет информатики и прикладной математики.",
        about_last: "🚀 Всегда открыт новым вызовам и проектам, которые развивают мои навыки. ✨",
        tg_join: "Подпишись к моему каналу",
        visits: "Просмотры:"
    },
    fr: {
        name_surname: "Ruben Gayrayan",
        description: "Étudiant, programmeur",
        hi: "👋 Bonjour, je suis Ruben.",
        about: "👩‍💻 Passionné par la technologie et la programmation, je travaille sur des projets Web, AI, Desktop et Android.",
        about2: "🎓 J’étudie à l’Université Française en Arménie, en Informatique et Mathématiques Appliquées.",
        about_last: "🚀 Toujours ouvert aux nouveaux défis et projets qui développent mes compétences. ✨",
        tg_join: "Rejoignez ma chaîne",
        visits: "Vues:"
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
