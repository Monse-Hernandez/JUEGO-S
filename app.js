//let titulo = document.querySelector ('h1');
//titulo.innerHTML='Juego del numero secreto';

//let parrafo = document.querySelector('p');
//parrafo.innerHTML='Indica un numero del 1 al 10';

let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;


function asignarTextoElemento (elemento, texto)
{
    let elementoHTML =document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
     
    //alert('Clic desde el boton');
    let numeroDeUsuario =parseInt(document.getElementById('valorDeUsuario').value);//parseint es para convertirel valor a numero
    //console.log(typeof(numeroDeUsuario));//para verificar de que tipo es si string o number
    //console.log(numeroSecreto);
    //console.log(typeof(numeroSecreto));
    //console.log(numeroDeUsuario);
    //console.log(numeroDeUsuario === numeroSecreto); //indica que tiene que ser del mismo tipo y arroja si es false o true
    if(numeroDeUsuario === numeroSecreto){

        asignarTextoElemento('p',`Acertaste el numero en ${intentos} ${(intentos==1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');//para habilitar el boton de nuevo juevouna vez que se acierte el numero
    }
    else {

        if(numeroDeUsuario>numeroSecreto)
        {
            asignarTextoElemento('p','El numero secreto es menor');  
        }
        else{ 
            asignarTextoElemento('p','El numero secreto es mayor');

        }
        intentos ++;
        limpiarCaja();
    }

    return;
}

function condicionesIniciales(){
    asignarTextoElemento('h1','Juego del numero secreto');
    asignarTextoElemento('p',`Indica un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos= 1;
    console.log(numeroSecreto);
}

function reiniciarJuego(){
//Limpiar la caja
limpiarCaja();
//Indicar mensaje de intervalo
//Generar el numero aleatorio
//Inicializar l numero de intentos
condicionesIniciales();
//Deshabilitar el boton de nuevo juego
document.querySelector('#reiniciar').setAttribute('disabled','true');
}

condicionesIniciales();

//La siguiente funcion funcionamediante arreglos para mostrar un numero secreto que no se repita
function generarNumeroSecreto(){
   let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
   
   console.log(numeroGenerado);
   console.log(listaNumerosSorteados);

   //si ya sorteamos todos los numeros
   if(listaNumerosSorteados.length == numeroMaximo)
   {
   asignarTextoElemento('p','Ya se sortearon todos los numeros posibles');
   }

   else{
//si el numero generado esta incluido en la lista
    if(listaNumerosSorteados.includes(numeroGenerado)){ //includes barre la lista para ver si el numero generado ya se encuentra en el arreglo
        return generarNumeroSecreto();// si si se encuetra ya se genera un nuevo numero diferente
    }

    else{// sino se encuentra el numero generado se agrega a la lista

        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;
    }
}
}

function limpiarCaja(){
document.querySelector('#valorDeUsuario').value ='';
}