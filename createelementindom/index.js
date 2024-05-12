/*
const para=document.createElement("p");
const paraText = document.createTextNode("Total Fruit: 4");
para.appendChild(paraText);
console.log(para);

const divs = document.getElementsByTagName("div");
const seconddiv=divs[1];
seconddiv.appendChild(para);

const fruits = document.querySelector(".fruits");
seconddiv.insertBefore(para,fruits);

para.className="fruitCount";
para.id = "fruitstotal";
para.setAttribute("title","fruitstotal");
console.log(para);
const ul = document.querySelector(".fruits");
//ul.style.backgroundColor="pink";

//parents
//ul.parentElement.style.backgroundColor="yellow";
//ul.parentElement.parentElement.style.backgroundColor="gray";

//children
//ul.children[3].style.backgroundColor="blue";
//ul.firstElementChild.style.backgroundColor="green";

//sibling
//ul.nextElementSibling.style.backgroundColor="pink";
ul.previousElementSibling.style.backgroundColor="yellow";
*/


const headi = document.createElement("h3");
const headiText = document.createTextNode("Buy high quality organic fruits online");
headi.appendChild(headiText);

const divs = document.getElementsByTagName("div");
const firstdiv = divs[0];

firstdiv.appendChild(headi);
headi.style.fontStyle="italic";

const para = document.createElement("p");
const paraText = document.createTextNode("Total Fruits: 4");
para.appendChild(paraText);

const seconddiv = divs[1];
seconddiv.appendChild(para);

const fruits = document.querySelector(".fruits");
seconddiv.insertBefore(para,fruits);

para.id = "fruits-total";













