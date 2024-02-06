
function sumar(){
    const formu = document.getElementById('formu')

    let A = formu['operadorA']
    let B = formu['operadorB']

    let result = parseInt(A.value) + parseInt(B.value)
    if(isNaN(result)){
        result = "los parametros no son correctos"
    }
    document.getElementById('resultado').innerHTML = `Resultado: ${result}`
    
}