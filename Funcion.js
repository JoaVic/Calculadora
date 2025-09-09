function sumar(a , b){
    return a + b;
}

function restar(a , b){
    return a - b;
}

function multiplicar(a , b){
    return a * b;
}

function dividir(a , b){
    if (b === 0){
        return "No se puede dividir por cero";
    }
    return a / b;
}

//Funcion principal
function calcular(){
    let operacion = document.getElementById("operacion").value;
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let resultado;

    switch(operacion){
        case "sumar":
            resultado = sumar(num1, num2);
            break;
        case "restar":
            resultado = restar(num1, num2);
            break;
        case "multiplicar":
            resultado = multiplicar(num1, num2);
            break;
        case "dividir":
            resultado = dividir(num1, num2);
            break;
            default:
                resultado = "Operación no válida";
    }
    document.getElementById("resultado").innerText = "Resultado: " + resultado;
}

//Reiniciar valores
function reiniciar(){
    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
    document.getElementById("resultado").innerText = "";
    document.getElementById("operacion").value = "1";
}