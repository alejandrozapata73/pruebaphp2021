//funciones Flechas =>

/*

var sumar = function(){ 
 
    console.log('hola a todos')

}


var sumar = (a,b) => 4

*/


//Objetos literales... JSON
/*
var alumno = {

    //key     Valor
    nombre: 'Cristian',
    apellido: 'Moran',
    edad: 38,
    //Metodos...acciones
    loge: function(){
        console.log('hola soy un metodo')
    }


}
console.log(alumno)
console.log(alumno.apellido)
console.log(alumno.loge())

console.log()

alumno.loge()

*/
//Document Objet Model..DOM

/*

body
h1
span
p
div
main
footer
form


*/


//console.log(document)
//console.log(document.head)
//console.log(document.body)
//console.log(document.all)

//console.log(document.all[10])

//document.all[10].textContent='hola probando'
//id... clase..
//console.log(document.getElementById('main-header')) 

//console.log(document.getElementById('header-title')) 

//.textContent ='Hola'

var encabezado = document.getElementById('header-title')

//var Usuario = prompt('ingrese su Usuario')

let usuarioRoot = "juan"

//var passUsuario = prompt('Ingrese pass')

let passRoot = 123456

var  meses = ['enero','febrero','marzo','abril'] 

// ........todo........true
// ..false...&&.....true = false
/*
if(Usuario == usuarioRoot || passUsuario==passRoot ) {

    encabezado.textContent = 'Puede ver el contenido' //imprime todo..<h5> hola pronbando 


}else{

    encabezado.textContent = 'No puede ver .. pague por ver' //imprime todo..<h5> hola pronbando 

}

// comparaciones logicas....Tablas de verdad

//AND ... (si algo es verdadero)..Y (si otra cosa es verdad) = True/false

// true ---- true = true
// true ---- false = false
// false --- true  = false
// false --- false = false
//.... &&...


// OR...o..   ||... 
// true ---- true = true
// true --- false = true
// false --- true = true
// false --- false = false

*/

var items = document.getElementsByClassName('list-group-item')

console.log(items)

console.log(items[2])

items[2].textContent = 'hola yesenia'

items[2].style.fontWeight ='bold'


for(var i=0;i<items.length;i++){

    if(i%2==0){
    items[i].style.backgroundColor = 'green'
    console.log(i)
    }else{
        items[i].style.backgroundColor = 'green'
    }

}


var probandoBoton = document.getElementById('button')

//Agregar una Escucha... listener... escuchador

probandoBoton.addEventListener('click', probandoF)


//creando funcion F
function probandoF() {

    console.log('hola probando escuchador...')
    //alert('hola creanme que estoy haciendo click')
    document.getElementById('header-title').textContent = 'rojo'
    /*

    1... asegurarme de capturar el header...
    2...agregar el evento style.background = 'green'

    */

    var valorBoton = document.getElementById('inputUnico')

    console.log(valorBoton.value)

    var sumar = valorBoton.value * 2

    var valorDiv = document.getElementById('output')

    valorDiv.textContent = sumar

}

//
//valor con value..
// textconten ...= valor.value


