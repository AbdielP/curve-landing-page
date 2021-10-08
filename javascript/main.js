(() => {
    const App = {
        htmlElements: {
            form: document.getElementById('form'),
            input: document.getElementById('input-email'),
            error: document.getElementById('error-message')
        },
        init: () => {
            App.bindEvents();
        },
        bindEvents: () => {
            App.htmlElements.form.addEventListener('submit', App.events.subscribe)
        },
        events: {
            subscribe: (event) => {
                event.preventDefault();
                App.utils.validateForm(App.htmlElements.input.value);
            }
        },
        utils: {
            validateForm: (value) => {
                const regex = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/
                const validate = regex.test(value);
                if (!validate) {
                    App.htmlElements.error.style.display = 'block';
                    App.htmlElements.input.classList.add('footer__newsletter__input--error');
                } else {
                    App.htmlElements.error.style.display = 'none';
                    App.htmlElements.input.classList.remove('footer__newsletter__input--error');
                }
            }
        },
    }
    App.init();
})();