function BMI(weight,height){
    var t = height/100 ;
    var bmi = weight / (t*t);
    return bmi ;
}   

var calculateBtn = document.querySelector("#result");
var resultElement = document.querySelector("#resultt");

calculateBtn.addEventListener("click", function () {
  var weightInput = document.querySelector("#weight");
  var heightInput = document.querySelector("#height");

  var weight = parseFloat(weightInput.value);
  var height = parseFloat(heightInput.value);

  if (!isNaN(weight) && !isNaN(height)) {
    var bmi = BMI(weight, height);
    resultElement.textContent = "您的BMI是：" + bmi;
  } else {
    resultElement.textContent = "請輸入有效的數值。";
  }
});