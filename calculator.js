var output = document.getElementById("output");

var resultDisplayed = false;


document.querySelector(".buttons").addEventListener("click", function(event){

    if(event.target.innerHTML === "C"){

        output.innerHTML = "";

    } else if (event.target.classList.contains("number")){

        if(resultDisplayed) {
            output.innerHTML = "";
            resultDisplayed = false;
        }

        console.log("number clicked");
        output.innerHTML += event.target.innerHTML;

    } else if (event.target.classList.contains("operator")){

        console.log("operator clicked");
        output.innerHTML += event.target.innerHTML;

    }

});

document.querySelector(".equate").addEventListener("click", function(){

    var expression = output.innerHTML,
        operatorPosition;

    if (expression.indexOf("+") != -1) {

        result = 0;

        operands = expression.split("+");

        operands.forEach(function(operand){
            result += operand*1;
        });

    } else if (expression.indexOf("-") != -1) {

        operands = expression.split("-");

        result = operands.shift(0)*1;

        operands.forEach(function(operand){
            result -= operand*1;
        });

    } else if (expression.indexOf("*") != -1) {

        result = 1;

        operands = expression.split("*");

        operands.forEach(function(operand){
            result *= operand*1;
        });

    } else if (expression.indexOf("/") != -1) {

        operands = expression.split("/");

        result = operands.shift(0)*1;

        operands.forEach(function(operand){
            result /= operand*1;
        });
    }

    output.innerHTML = result.toFixed(2).toString();

    resultDisplayed = true;
});
