let x; 
let y;
let operator;

function add(){
    return x + y;
}

function subtract(){
    return x - y;
}

function multiply(){
    return x * y;
}

function divide(){
    return x / y ;
}

function remainder(){
    return x % y ; 
}

function potential(){
    return x**y;
}

function operate(){
    if(operator == "+"){
       return add()
    } else if(operator == "-"){
       return subtract()
    } else if(operator == "*"){
       return multiply()
    } else if(operator == "/"){
       return divide()
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
let regex = /[^0-9]/;

function doEqual(){
          console.log(operate());
          let valueFinal = operate();
          result.textContent = valueFinal;
          showArray = [];
          storeArray = [];
          x = undefined; 
          y = undefined;
}

buttons.forEach((elem) => {
    elem.addEventListener("click", (e) => {
      storeValue = elem.textContent;
      storeArray.push(storeValue);
      showArray.push(storeValue)
     if(elem.textContent === "clear"){
         result.textContent = "";
         i = 0;
     } else if(storeValue.match(regex)){
         storeArray.pop();
          if( y != undefined && x != undefined) {
              doEqual();
          } else if(x != undefined){
            numY = storeArray.join("");
            y = parseInt(numY)
            storeArray = [];
          } else {
              numX = storeArray.join("");
              x = parseInt(numX);
              storeArray = [];
          }
       if(storeValue == "="){
          doEqual(); 
       } else {
           operator = storeValue; 
       }
    } else if(i >= 0) {
         result.textContent = showArray.join("")
     } else {
        result.textContent = elem.textContent; 
     }
     i++;
    })
});