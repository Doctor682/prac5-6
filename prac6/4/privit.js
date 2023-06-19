window.addEventListener("DOMContentLoaded", function() {
    var login = getParameterByName("NM");
    if (login) {
        var cornerBox = document.createElement("div");
        cornerBox.className = "corner-box";
        cornerBox.textContent = "Логін: " + login;
        document.body.appendChild(cornerBox);
    }
});

function getParameterByName(name) {
    name = name.replace(/[\[\]]/g, "\\$&");
    var url = window.location.href;
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)");
    var results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return "";
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}