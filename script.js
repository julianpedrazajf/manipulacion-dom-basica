/* MANIPULACION DEL DOM */


/* const h1 = document.querySelector('h1')
const p = document.querySelector('p') */
/* const parrafito = document.getElementsByClassName('.parrafito')
const pid = document.getElementsById('#pid') */
/* const parrafito = document.getElementsByClassName('parrafito')
const pid = document.getElementById('pid')
const input = document.querySelector('input') */

/* console.log (input.value);

console.log (h1);

console.log ({
    h1,
    p,
    parrafito,
    pid,
    input
}); */

/* h1.innerHTML = 'Patito <br> feo';
h1.innerText = 'Patito <br> feo';
console.log(h1.getAttribute('class'));  */
/* console.log(h1.getAttribute('pantalla')); */
/* h1.setAttribute('class', 'rojo'); */

/* h1.classList.add('rojo')
h1.classList.remove('verde'); */
/* h1.classList.toggle('verde'); */
/* h1.classList.contains('verde'); */

/* input.value = "456"

const img = document.createElement('img')
img.setAttribute('src', 'https://images.unsplash.com/photo-1612537784542-0c2e0512f393?q=80&w=1674&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
console.log(img);

pid.innerHTML = "";
pid.appendChild(img); */
/* pid.innerHTML = img; */


/* console.log(document.createElement('img')); */
/* console.log(document.createElement('span')); */

/* const h1 = document.querySelector('h1');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const pResult = document.querySelector('#result');

btn.addEventListener('click', btnOnClick );

function btnOnClick (){
    const sumaImputs = input1.value + input2.value;
    pResult.innerText = "resultado " + sumaImputs;
} */
/* const h1 = document.querySelector('h1');
const form = document.querySelector('#form');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const pResult = document.querySelector('#result');

//form.addEventListener('submit', sumaImputValues );
btn.addEventListener('mouseover', sumaImputValues);
//btn.addEventListener('click', sumaImputValues);

function sumaImputValues (event){
    /* console.log({event}); */
/*     event.preventDefault();
    const sumaImputs = input1.value + input2.value;
    pResult.innerText = "resultado " + sumaImputs;
    h1.setAttribute('style', 'color: red')
} */

/* javascript addEventListener */
/* javascript Events
javascript eventos */

const h1 = document.querySelector('h1');
const form = document.querySelector('#form');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const pResult = document.querySelector('#result');

btn.addEventListener('mouseover', sumaImputValues);

function sumaImputValues (event){
    event.preventDefault();
    const sumaImputs = input1.value + input2.value;
    pResult.innerText = "resultado " + sumaImputs;
    h1.setAttribute('style', 'color: red')
}