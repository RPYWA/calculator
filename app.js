const operator = prompt("enter in operator")

const num1 = parseFloat(prompt("enter first number"))
const num2 = parseFloat(prompt("enter second number"))

let result

if(operator == "+"){
   result = num1 + num2
}

else if(operator == "-"){
    result = num1 - num2
}

else if(operator == "*"){
    result = num1 * num2
}

else if(operator == "/"){
    result = num1 / num2
}

console.log(`${num1} ${operator} ${num2} = ${result}`)