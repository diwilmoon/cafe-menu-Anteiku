const translations = {
    en: {
        home: "Home",
        about: "About",
        menu: "Menu",
        delivery: "Delivery",
        contacts: "Contacts",
        register: "Register",
        reserve: "Reserve a table",
        tagline: "kawaii food, happy moments",
        introduction: "Welcome to kawaii food and sweet moments~",
        description: "A cosy cafe serving delicious Asian cuisine and desserts. Enjoy our signature curry, fluffy pancakes, and specialty drinks!",
        view: "View the menu →",
        order: "Order delivery →"
    },

    ru: {
        home: "Главная",
        about: "О нас",
        menu: "Меню",
        delivery: "Доставка",
        contacts: "Контакты",
        register: "Регистрация",
        reserve: "Забронировать столик",
        tagline: "милые блюда, счастливые моменты",
        introduction: "Добро пожаловать в мир милой еды и сладких моментов~",
        description: "Уютное кафе с вкусной азиатской кухней и десертами. Попробуйте наше фирменное карри, пышные панкейки и особенные напитки!",
        view: "Посмотреть меню →",
        order: "Заказать доставку →"
    }
};

const languageButtons = document.querySelectorAll(".lang-btn");

languageButtons.forEach(button => {
    button.addEventListener("click", () => {
        const language = button.dataset.lang;

        document.querySelectorAll("[data-i18n]").forEach(element => {
            const key = element.dataset.i18n;
            element.textContent = translations[language][key];
        });

        languageButtons.forEach(btn => {
            btn.classList.remove("active-lang");
        });

        button.classList.add("active-lang");
    });
});

// Open registration window

const registerModal = document.getElementById("register-modal");
const openRegister = document.getElementById("open-register");
const closeRegister = document.getElementById("close-register");

openRegister.addEventListener("click", () => {
    registerModal.style.display = "flex";
});

// Close registration window

closeRegister.addEventListener("click", () => {
    registerModal.style.display = "none";
});

// Close when clicking outside the window

registerModal.addEventListener("click", (event) => {
    if (event.target === registerModal) {
        registerModal.style.display = "none";
    }
});

// Registration form

const registerForm = document.getElementById("register-form");

registerForm.addEventListener("submit", (event) => {
    event.preventDefault();

    alert("Thank you for registering!");

    registerForm.reset();
    registerModal.style.display = "none";
});