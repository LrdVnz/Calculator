let x; 
let y;
let operator;

let styleOperators = document.getElementById("operators").children;
for ( f = 0; f < styleOperators.length; f++){
styleOperators[f].style.cssText = "background-color: #e3a452;"
}

function add(){
    return Math.round((x + y) * 100)/100;
}

function subtract(){
    return Math.round((x - y) *100)/100;
}

function multiply(){
    return Math.round((x * y) *100)/100;
}

function divide(){
    return Math.round((x / y) *100)/100 ;
}

function remainder(){
    return Math.round((x % y) *100)/100 ; 
}

function potential(){
    return Math.round((x**y) *100)/100;
}

function operate(){
    if(operator == "+"){
       return add()
    } else if(operator == "-"){
       return subtract()
    } else if(operator == "x"){
       return multiply()
    } else if(operator == "/"){
        if(y == 0){
            alert("Error!")
        } else{  
            return divide()
        }
    } else if(operator == "%"){
       return remainder()
    } else if(operator == "**"){
       return potential()
    } else {
       return alert("Choose an operator")
    }
}

let buttons = document.querySelectorAll("button");
let result = document.querySelector("#result");
let i = -1 ; 
let storeArray = [];
let showArray = [];
let regex = /[^0-9, .]/;
let newReg = /[0-9]/;

function doEqual(){
          let equalValue = operate();
          result.textContent  = equalValue;
          x = undefined;
          y = undefined; 
          showArray = [];
          storeArray = [equalValue]
}

let setValue; 
let j = -1 ; 
let decimalReg = /[^\d*\.?\d+$]/

buttons.forEach((elem) => {
    elem.addEventListener("click", (e) => {
      storeValue = elem.textContent;
      storeArray.push(storeValue);
      showArray.push(storeValue)
     if(elem.textContent === "clear"){
         result.textContent = "";
         showArray = [];
         storeArray = [];
         storeValue = undefined ; 
         y = undefined;
         x = undefined; 
         i = -1;
     }else if(storeValue.match(regex)){
        let valueFinal; 
        function sequence() {
           valueFinal = operate();
           result.textContent = valueFinal;
           showArray = [];
           storeArray = [];
           x = valueFinal;
           y = undefined; 
        }   
        if(storeValue.match(decimalReg))
           if(x != undefined){
                storeArray.pop();
                numY = storeArray.join("");
                y = parseFloat(numY);
         return (storeValue == "=")? doEqual() : sequence();
               } else {
                 storeArray.pop();
                 numX = storeArray.join("");
                 x = parseFloat(numX);
                 storeArray = [];
               }
              operator = storeValue; 
          }
     if(i >= 0) {
         result.textContent = showArray.join("")
     } else {
        result.textContent = elem.textContent; 
     }
     i++;
    })
});