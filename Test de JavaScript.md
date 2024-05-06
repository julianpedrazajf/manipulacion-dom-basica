/* Variables y Operaciones
1️⃣ Responde las siguientes preguntas en la sección de comentarios:


¿Qué es una variable y para qué sirve?
-Es un espacio que reserva memoria para declarar un valor dentro de la variable, normalmente declaramos los valores de las variables con var nombre = "julian";

¿Cuál es la diferencia entre declarar e inicializar una variable?
-cuando declaramos la variable solo estamos nombrando la variable, en este caso sería: var nombre; pero cuando inicializamos la variable le estamos el dato que almacenará esta declaración de la variable como el siguiente ejemplo var nombre = "julian";

¿Cuál es la diferencia entre sumar números y concatenar strings?
-Cuando sumamos números estamos realizando una operación matemática: 2 + 2 = 4. Pero cuando realizamos una concatenación de dos strings o más, unimos las cadenas de texto: "2" + "2" = "22"

¿Cuál operador me permite sumar o concatenar?
-Como mostré en el ejemplo anterior será +

2️⃣ Determina el nombre y tipo de dato para almacenar en variables la siguiente información:
-
Nombre "string"
Apellido "string"
Nombre de usuario en Platzi "string"
Edad "number"
Correo electrónico "string"
Mayor de edad "boolean"
Dinero ahorrado "number"
Deudas "number" "boolean"

3️⃣ Traduce a código JavaScript las variables del ejemplo anterior y deja tu código en los comentarios. */

var nombre = "julian";
var apellido = "avila";
var usename = "julianpedrazajf";
var edad = 50;
var mail = "julianpedr...";
var isMayorDeEdad= true;
var dineroAhorrado = 10000000000;
var deudas =   100000000;

/* 4️⃣ Calcula e imprime las siguientes variables a partir de las variables del ejemplo anterior:
Nombre completo (nombre y apellido)
Dinero real (dinero ahorrado menos deudas) */
```js
var nombre = "julian";
var apellido = "avila";
console.log(`Mi nombre completo es ${nombre} ' ' ${apellido}`);
var ahorros = 1000;
var deudas = 500;
var dineroReal = ahorros - deudas;
console.log(`el dinero real es: $${dineroReal}`);
```
/* Funciones
1️⃣ Responde las siguientes preguntas en la sección de comentarios:
-
¿Qué es una función? 
- Son acciones que declaramos como variables y les damos unos valores que podremos utilizar más adelante en nuestro código. 

¿Cuándo me sirve usar una función en mi código?
- cuando queremos realizar operaciones que declaramos con anterioridad, solo dandole los valores que necesitamos y así recibir el resultado de la función.

¿Cuál es la diferencia entre parámetros y argumentos de una función? 
- los parámetros son las variables declaradas dentro de nuestras funciones, cuando solicitamos estos parámetros vamos a dar nuestros argumentos para ejecutar la función. */


/* 2️⃣ Convierte el siguiente código en una función, pero, cambiando cuando sea necesario las variables constantes por parámetros y argumentos en una función: */
```js
function presentation(name, lastname, nickname){
    return console.log(`Mi nombre es ${name} ${lastname} pero prefiero que me digan ${nickname}`);
    };
    presentation("julian", "avila", "juliancho");
```

/* Condicionales
1️⃣ Responde las siguientes preguntas en la sección de comentarios:

¿Qué es un condicional? 
es una expresión que nos ayuda a definir si un valor es true or false.

¿Qué tipos de condicionales existen en JavaScript y cuáles son sus diferencias?
if else:
podemos generar los if o else que sean necesarios para encontrar el resultado en diferentes opciones dentro de las expresiones
switch: nos ayuda dentro de una sola expresión como entrada de forma ordenada buscar el resultado verdadero o falso pero de igual manera diferentes casos de forma ordenada.

¿Puedo combinar funciones y condicionales?
Podemos incluir respuestas de las funciones dentro de las condicionales pero dentro de las condicionales no podemos modificar las funciones, y dependiendo del resultado de las condicionales podemos generar acciones dentro de funciones.


2️⃣ Replica el comportamiento del siguiente código que usa la sentencia switch utilizando if, else y else if: */
```js
const tipoDeSuscripcion = "basic";
        if (tipoDeSuscripcion == "free") {
        console.log("solo puedes tomar los cursos gratis");
    }   else if (tipoDeSuscripcion == "basic"){
        console.log("puedes tomar casi todos los cursos de platzi durante un mes"); 
    }   else if (tipoDeSuscripcion == "expert"){
        console.log("puedes tomar casi todos los cursos de platzi durante un anio");
    }   else if (tipoDeSuscripcion == "expertplus") {
        console.log("tu y alguien mas pueden tomar todos los cursos de platzi durante un anio");
    }   else {
        console.log("No tienes ninguna suscripcion");
    }
```
/* 3️⃣ Replica el comportamiento de tu condicional anterior con if, else y else if, pero ahora solo con if (sin else ni else if).
```js
function conseguirTipoSuscripcion(suscripcion){ 
    if (suscripcion == "free") {
        console.log("solo puedes tomar los cursos gratis");
        return;
    }   
    if (suscripcion == "basic"){
        console.log("puedes tomar casi todos los cursos de platzi durante un mes"); 
        return;
    }   
    if (suscripcion == "expert"){
        console.log("puedes tomar casi todos los cursos de platzi durante un anio");
        return;
    }   
    if (suscripcion == "expertplus") {
        console.log("tu y alguien mas pueden tomar todos los cursos de platzi durante un anio");
        return;
    }
    else {
        console.warn('Ese Tipo de suscripcion no existe')
    }
}
```

💡 Bonus: si ya eres una experta o experto en el lenguaje, te desafío a comentar cómo replicar este comportamiento con arrays u objetos y un solo condicional. 😏
```js
const tiposDeSuscripciones = {
    free: 'solo puedes tomar los cursos gratis',
    basic: 'puedes tomar casi todos los cursos de platzi durante un mes',
    expert: 'puedes tomar casi todos los cursos de platzi durante un anio',
    expertplus: 'tu y alguien mas pueden tomar todos los cursos de platzi durante un anio',
};
function conseguirTipoSuscripcion(suscripcion){ 
    if (tiposDeSuscripciones[suscripcion]) {
        console.log(tiposDeSuscripciones[suscripcion])
        return;
    }
        console.warn('Ese Tipo de suscripcion no existe')
}
conseguirTipoSuscripcion('free')


var typeSuscription = ["free", "basic", "expert", "expertplus"];
var infoSuscription = ["solo puedes tomar los cursos gratis", "puedes tomar casi todos los cursos de platzi durante un mes", "puedes tomar casi todos los cursos de platzi durante un anio", "tu y alguien mas puede tomar todos los cursos de platzi durante un anio"];
var userSuscription = "expert ";
for (var i=0; i < typeSuscription.length; i++) {
if (userSuscription == typeSuscription[i]) {
console.log ('Si estas suscrito al plan ${typeSuscription[i]} en el cual ${infoSsuscription[i]}')
}
}
```
/* Ciclos
1️⃣ Responde las siguientes preguntas en la sección de comentarios:
¿Qué es un ciclo?
es un ciclo que se repite hasta completar la condición que declaramos

¿Qué tipos de ciclos existen en JavaScript?
for, while, do while.

¿Qué es un ciclo infinito y por qué es un problema?
Un ciclo infinito es una condición dentro de un ciclo que se repite tantas veces que puede consumir tanta memoria que podría bloquear el sistema.

¿Puedo mezclar ciclos y condicionales? 
si podemos condicionar un ciclo que se repita hasta que se cumpla la condición


2️⃣ Replica el comportamiento de los siguientes ciclos for utilizando ciclos while: */
```js
let i = 0;
while (i < 5) {
  i++;
  console.log(`El valor de i es: ${i}`)
}
let i = 10;
while (i >= 2) {
  i--;
  console.log(`El valor de i es: ${i}`)
}
```
/* 3️⃣ Escribe un código en JavaScript que le pregunte a los usuarios cuánto es 2 + 2. Si responden bien, mostramos un mensaje de felicitaciones, pero si responden mal, volvemos a empezar.
💡 Pista: puedes usar la función prompt de JavaScript. */
```js
let num = 2;
let num2 = 2;
const result = num + num2;
let questions = {
    q1: `cuanto es ${num} + ${num2}`
}
function Quizzer() {
    let userInput = prompt(questions.q1);
    if (userInput == result) {
        alert("Felicitaciones, repondiste la respuesta correcta")
    } else {
        alert("Respuesta incorrecta")
    }
}
Quizzer();
```
```js
let respuesta;
while (respuesta != '4') {
    let pregunta = prompt('¿Cuánto es 2 + 2?')
    respuesta = pregunta;
}
```


/* Listas
1️⃣ Responde las siguientes preguntas en la sección de comentarios:
¿Qué es un array?
Es una lista de elementos que forman parte de una sola variable que se escriben dentro de [,,,] y se separan por coma.

¿Qué es un objeto?
Es una colección de objetos como su nombre lo indica, donde cada objeto tiene una propiedad o valor asociado a diferentes variables o una sola con la propiedad object.
```js
const obj = {
    name: ''fulanito,
    edad: 3,
};
```
¿Cuándo es mejor usar objetos o arrays?
Cuando tenemos muchos elementos con diferentes valores, es mejor usar objetos, pero cuando tenemos solo elementos sin objetos que los represente, los arrays son convenientes.

¿Puedo mezclar arrays con objetos o incluso objetos con arrays?
Puedes mezclar arrays con objetos y objetos con arrays de varias formas. Esto te permite crear estructuras de datos complejas y muy flexibles.

2️⃣ Crea una función que pueda recibir cualquier array como parámetro e imprima su primer elemento. */
```js
function imprimirPrimerElementoArray(arr){
    console.log(arr[0])
}
imprimirPrimerElementoArray['Juanita','Rigoberto','Natalia']
```
/* 3️⃣ Crea una función que pueda recibir cualquier array como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el array completo). */
```js
let array = ['car', 'motorcycle', 'bike', 'scooter'];

function readArray(array){
    for (let i = 0; i < array.length; i++){
        console.log (array[i])
    }
}  
readArray(array);
```
/* 4️⃣ Crea una función que pueda recibir cualquier objeto como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el objeto completo). */
```js
let myCar = {
    brand: "Tesla",
    model: "E",
    year: 2024
};

function readObject(object) {
    for (let key in object) {
        console.log(object[key]);
    }
}
readObject(myCar);
```

