const display = document.getElementById("res")

function handleClick(value){
    // const display = document.getElementById("res")
    
    if(value === "C"){
        display.textContent = 0
    } else {
        display.textContent += value
    }
}

// buttons 

const zero = document.getElementById("btn0")
zero.addEventListener("click", () => {
    const value = zero.textContent
    handleClick(value)
})

const one = document.getElementById("btn1")
one.addEventListener("click", () => {
    const value = one.textContent
    handleClick(value)
})

const clear = document.getElementById("btnClr")
clear.addEventListener("click", () => {
    const value = clear.textContent
    handleClick(value)
})

const equals = document.getElementById("btnEql")

equals.addEventListener("click", () => {
    
   const displayCont = display.textContent.match(/([01]+)([+\-*\/])([01]+)/)
    
    if(displayCont){
        
        const op1 = displayCont[1]
        const operator = displayCont[2]
        const op2 = displayCont[3]
        
        const resultado = calculator(op1,operator,op2)
        
        display.textContent = resultado
    }
})

const sumOp = document.getElementById("btnSum")
sumOp.addEventListener("click", () => {
    const value = sumOp.textContent
    handleClick(value)
})

const subOp = document.getElementById("btnSub")
subOp.addEventListener("click", () => {
    const value = subOp.textContent
    handleClick(value)
})

const mulOp = document.getElementById("btnMul")
mulOp.addEventListener("click", () => {
    const value = mulOp.textContent
    handleClick(value)
})

const divOp = document.getElementById("btnDiv")
divOp.addEventListener("click", () => {
    const value = divOp.textContent
    handleClick(value)
})


function calculator(num1, operator, num2){
    
    const operandOne = parseInt(num1,2) // toDec
    const operandTwo = parseInt(num2,2)
    
    switch(operator){
            
        case "+":
            return(operandOne + operandTwo).toString(2) //toBin
        case "-":
            return(operandOne - operandTwo).toString(2)
        
        case "*":
            return(operandOne * operandTwo).toString(2)
        
        case "/":
            if(operandTwo !== 0){
                return(operandOne / operandTwo).toString(2)
            } else {
                return "cannot divide by zero"
            }
    }
}