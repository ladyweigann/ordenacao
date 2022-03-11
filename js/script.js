var numeros = []
        
function adicionarNumeros(){

    let entradaNumeros = document.getElementById("idNumero").value
    if(entradaNumeros != ""){
        numeros.push(Number(entradaNumeros))
        console.log(numeros)
    }else{
        alert("Número inválido, insira novamente")
    }

}

function ordemCrescenteSort(){
    numeros.sort(ordenar)

        function ordenar(a, b) {    
            if (a > b){
                return 1
            }
            if (b > a){
                return -1
            } 
            return 0
        }
    console.log(numeros)
    document.getElementById("idOut").value = numeros
}

function ordemDecrescenteSort(){
    numeros.sort(ordenar)

        function ordenar(a, b) {    
            if (a > b){
                return -1
            }
            if (b > a){
                return 1
            } 
            return 0
        }
    console.log(numeros)
    document.getElementById("idOut").value = numeros
}

function ordemDecrescenteBubble(){
    var entrou = true
    while(entrou){
        entrou = false
        for (let i = 0; i < (numeros.length - 1); i++) {
            var temporaria = numeros[i+1]
            if(numeros[i] < numeros[i+1]) {
                numeros[i+1] = numeros[i]
                numeros[i] = temporaria
                entrou = true
            }
        }

    }
        console.log(numeros)
        document.getElementById("idOut").value = numeros
    }

    function ordemCrescenteBubble(){
    var entrou = true
    while(entrou){
        entrou = false
        for (let i = 0; i < (numeros.length - 1); i++) {
            var temporaria = numeros[i]
            if(numeros[i] > numeros[i+1]) {
                numeros[i] = numeros[i+1]
                numeros[i+1] = temporaria
                entrou = true
            }
        }

    }
        console.log(numeros)
        document.getElementById("idOut").value = numeros
    }