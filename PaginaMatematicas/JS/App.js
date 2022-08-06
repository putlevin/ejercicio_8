const boton1= document.getElementById("btnsumar");
boton1.addEventListener("click", sumar);
function sumar(){
    const varnumero1 = Number (document.getElementById("num1").value);
    const varnumero2 = Number (document.getElementById("num2").value);
    const imprimirdivresultado = document.getElementById("resultado")
    const varresultado = varnumero1 + varnumero2;
     alert ("El resultado es:"+ varresultado);
    imprimirdivresultado.innerText = varresultado;
}

const boton2= document.getElementById("btnrestar");
boton2.addEventListener("click", restar);
function restar(){
    const varnumero3 = Number (document.getElementById("num3").value);
    const varnumero4 = Number (document.getElementById("num4").value);
    const imprimirdivresultado = document.getElementById("resultado1");
    const varresultado = varnumero3 - varnumero4;
     alert ("El resultado es:"+ varresultado);
    imprimirdivresultado.innerText = varresultado;
}

const boton3= document.getElementById("btnmultiplicar");
boton3.addEventListener("click", multiplicar);
function multiplicar(){
    const varnumero5 = Number (document.getElementById("num5").value);
    const varnumero6 = Number (document.getElementById("num6").value);
    const imprimirdivresultado = document.getElementById("resultado2");
    const varresultado = varnumero5 * varnumero6;
     alert ("El resultado es:"+ varresultado);
    imprimirdivresultado.innerText = varresultado;
}

const boton4= document.getElementById("btndividir");
boton4.addEventListener("click", dividir);
function dividir(){
    const varnumero7 = Number (document.getElementById("num7").value);
    const varnumero8 = Number (document.getElementById("num8").value);
    const imprimirdivresultado = document.getElementById("resultado3");
    const varresultado = varnumero7 / varnumero8;
     alert ("El resultado es:"+ varresultado);
    imprimirdivresultado.innerText = varresultado;
}

const boton5 = document.getElementById("btnmostrar");
boton5.addEventListener("click", mostrar);
function mostrar(){
    const listas = document.getElementById("listado");
    //Cuando vuelvo a presionar el boton imprime vacio
    //La informacion o que limpie la informacion
    //O que solo lo muestre una sola vez el resultado
    listas.innerText = "";
    for(var x=0; x<=100; x=x+1){
        //alert("Numero" + x);
        //Comando para ver que esta mal
        //console.log(x);
        const li = document.createElement("li");
        li.setAttribute("class", "list-group-item mt-1");
        li.innerText = x;
        listas.appendChild(li);
    }
}

const boton6 = document.getElementById("boton verificacion");
boton6.addEventListener("click", compararcalificaciones);
function compararcalificaciones(){
    const calificacion = Number(document.getElementById("numcalificacion").value);
    const resultado = document.getElementById("divimprimircal");
    if(calificacion >= 8){
        resultado.innerText = "Aprobado";
    }
    else{
        resultado.innerText = "Reprobado";
        const audio = document.getElementById("audiorep");
        audio.play();
    }
}