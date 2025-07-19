operators = []
operand = "" 
tally = 0
blocked = ""

function operation(){
    if (operators.length == 2){
        if (operand == "+"){
            result = round(operators[0]+operators[1])
            operators.length = 0
            operators[0] = result
            operand = ""
            tally = 0
        }
        else if (operand == "-"){
            let result = round(operators[0]-operators[1])
            operators.length = 0
            operators[0] = result
            operand = ""
            tally = 0
        }
        else if (operand == "*"){
            let result = round(operators[0]*operators[1])
            operators.length = 0
            operators[0] = result
            operand = ""
            tally = 0
        }
        else if (operand == "/"){
            let result = round(operators[0]/operators[1])
            operators.length = 0
            operators[0] = result
            operand = ""
            tally = 0
        }
        screen.textContent = operators[tally]
    }
}

operands = [
    document.querySelector(".plus"),
    document.querySelector(".minus"),
    document.querySelector(".multiply"),
    document.querySelector(".divide")
]
screen = document.querySelector(".screen")
operatorsGUI = document.querySelectorAll(".numbers")
operatorsGUI.forEach(operator => {
    operator.addEventListener("click", function(){
        if (!operators[tally]){
                operators[tally] = 0
            }
        if (!blocked){
            operators[tally] =  parseFloat(operators[tally] + operator.textContent)
        }
        else {
            operators[tally] = parseFloat(operators[tally] + "." + operator.textContent)
            blocked = ""
        } 
        screen.textContent = operators[tally]
    })
})

operands.forEach(operandGUI => {
    operandGUI.addEventListener("click",function(){
    operation()
    if (!operand){
        operand = operandGUI.textContent
        tally = 1
    }
})
})

document.querySelector(".equal").addEventListener("click", function(){
    if (!operand){
        screen.textContent = operators[tally]
    }
    else {
        operation()        
    }
})

document.querySelector(".clear").addEventListener("click",function(){
    operand = ""
    operators.length = 0
    screen.textContent = ""
    tally = 0
})

function round(result){
    return Math.round(result*100)/100
}

document.querySelector(".period").addEventListener("click",function(){
    if (!blocked && operators[tally] && Number.isInteger(operators[tally])){

        screen.textContent += "."
        blocked = "."
    }
})