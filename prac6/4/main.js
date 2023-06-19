window.addEventListener("DOMContentLoaded", function() {
    var form = document.getElementById("registrationForm");
    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Зупиняємо стандартну поведінку форми

        var formData = new FormData(form);
        var url = form.getAttribute("action");

        var request = new XMLHttpRequest();
        request.open("GET", url + "?" + new URLSearchParams(formData).toString(), true);
        request.send();

        // Опціонально: обробка відповіді сервера
        request.addEventListener("load", function() {
            if (request.status === 200) {
                console.log("Дані успішно передані до privit.html");
                // Додайте власний код для обробки успішного відгуку сервера
            } else {
                console.log("Помилка при передачі даних до privit.html");
                // Додайте власний код для обробки помилки сервера
            }
        });
    });
});