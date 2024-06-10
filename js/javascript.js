document.addEventListener("DOMContentLoaded", function() {
    var form = document.getElementById("form");

    form.addEventListener("submit", function(event) {
        var requiredFields = form.querySelectorAll("._req");
        var agreementCheckbox = form.querySelector("._req[type='checkbox']");
        var isValid = true;

        requiredFields.forEach(function(field) {
            if (field.value.trim() === "") {
                isValid = false;
                field.classList.add("error");
            } else {
                field.classList.remove("error");
            }

            // Проверка на корректность электронной почты
            if (field.classList.contains("_email")) {
                if (!isValidEmail(field.value)) {
                    isValid = false;
                    field.classList.add("error");
                } else {
                    field.classList.remove("error");
                }
            }
        });

        if (!agreementCheckbox.checked) {
            isValid = false;
            agreementCheckbox.parentElement.classList.add("error");
        } else {
            agreementCheckbox.parentElement.classList.remove("error");
        }

        // Применяем стили к полям с ошибками
        if (!isValid) {
            event.preventDefault(); // Предотвращаем отправку формы, если есть незаполненные обязательные поля, некорректная почта или неотмеченный флажок согласия
            alert("Пожалуйста, заполните все обязательные поля правильно и отметьте согласие с обработкой данных.");

            // Добавляем класс _error к полям с ошибками
            var errorFields = form.querySelectorAll(".error");
            errorFields.forEach(function(field) {
                field.classList.add("_error");
            });
        }
    });

    // Функция для проверки корректности электронной почты
    function isValidEmail(email) {
        return /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,8}$/.test(email);
    }
});
