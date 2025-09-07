const translations = {
    am: {
        name_surname: "Ռուբեն Գայրանյան",
        description: "Ուսանող, ծրագրավորող",
        about: "👋 Ողջո՜ւյն, ես՝ Ռուբեն եմ։\n\n\
👩‍💻 Ծրագրավորմամբ հետաքրքրված եմ 13 տարեկանից։ Տիրապետում եմ մի քանի շարք ծրագրավորման լեզուների՝ կիրառելով հմտություններս վեբ ծրագրավորման, արհեստական բանականության, դեսկթոփ և անդրոիդ հավելվածների մշակման վրա։\n\
🎓 Ներկայումս սովորում եմ Հայաստանի Ֆրանսիական համալսարանում՝ Ինֆորմատիկա և կիրառական մաթեմատիկա ֆակուլտետում, և մշտապես աշխատում եմ նոր նախագծերի վրա, որոնց մարտահրավերները զարգացնում են իմ կարողությունները։"
    },
    en: {
        name_surname: "Ruben Gayrayan",
        description: "Student, Programmer",
        about: "👋 Hi there! I’m Ruben.\n\
👩‍💻 I started learning programming at the age of 13, and since then, it has grown into a true passion. I'm proficient in multiple programming languages and have applied my skills in Web Development, Artificial Intelligence, and Desktop Applications.\n\
🎓 I’m currently a student at the French University in Armenia, studying Informatics and Applied Mathematics, and constantly working on projects that challenge and grow my abilities.I am a student of Informatics and Applied Mathematics."
    },
    ru: {
        name_surname: "Рубен Гайранян",
        description: "Студент, программист",
        about: "👋 Привет, меня зовут Рубен.\n\
Я начал изучать программирование в 13 лет, и с тех пор это стало моей настоящей страстью. Я владею несколькими языками программирования и применял свои навыки в веб-разработке, искусственном интеллекте и настольных приложениях.\n\
🎓 В настоящее время я студент Факультета информатики и прикладной математики Французского университета в Армении и постоянно работаю над проектами, которые бросают мне вызов и развивают мои способности."
    },
    fr: {
        name_surname: "Ruben Gayrayan",
        description: "Étudiant, programmeur",
        about: "👋 Bonjour, je suis Ruben.\n\
J’ai commencé à apprendre la programmation à l’âge de 13 ans, et depuis, c’est devenu une véritable passion. Je maîtrise plusieurs langages de programmation et j’ai appliqué mes compétences en développement web, intelligence artificielle et applications de bureau.\n\
🎓 Je suis actuellement étudiant à l’Université Française en Arménie, en Informatique et Mathématiques Appliquées, et je travaille constamment sur des projets qui défient et développent mes compétences."
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
