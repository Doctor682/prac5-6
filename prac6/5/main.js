function calculate() {
    var number1 = parseFloat(document.getElementById("number1").value);
    var number2 = parseFloat(document.getElementById("number2").value);

    if (isNaN(number1) || isNaN(number2)) {
        alert("Будь ласка, введіть числа");
        return;
    }

    var sum = number1 + number2;
    alert("Сума чисел: " + sum);
    
}