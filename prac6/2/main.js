var checkBtn = document.getElementById("checkBtn");

checkBtn.addEventListener("click", function() {
  var logicOperator = document.getElementById("logicOperator").value;
  var resultDiv = document.getElementById("result");

  var answer;
  switch (logicOperator) {
    case "andNot":
      answer = true;
      break;
    case "orNot":
      answer = false;
      break;
    case "xorNot":
      answer = false;
      break;
    default:
      answer = false;
  }

  var selectedOptionText = document.getElementById("logicOperator").options[document.getElementById("logicOperator").selectedIndex].text;
  var isCorrect = (logicOperator === "andNot"); // Перевіряємо, чи відповідь правильна
  var correctnessMessage = isCorrect ? "Правильна відповідь!" : "Неправильна відповідь!";

  resultDiv.textContent = "Ви вибрали логічну операцію: " + selectedOptionText + ". " + correctnessMessage;
});
