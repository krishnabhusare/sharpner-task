const form = document.querySelector("form");
const button=document.querySelector("button");
const inputs=document.createElement("input");
form.insertBefore(inputs,button);
inputs.setAttribute("placeholder","Fruits description...");

inputs.setAttribute("style","font-style:italic");


const lis = document.getElementsByTagName("li");
const para1= document.createElement("p");
const paratext1 = document.createTextNode("is yellow");
para1.appendChild(paratext1);
const italic = document.createElement("i");
italic.appendChild(para1);
lis[0].appendChild(italic);


const filter= document.getElementById("filter");
filter.addEventListener("keyup",function(event){
    const keyentered=filter.value.toLowerCase();
    const fruit = document.getElementsByClassName("fruit");
    for(var i=0;i<fruit.length;i++){
        const currentfruit=fruit[i].firstChild.textContent.toLowerCase();
        if(currentfruit.indexOf(keyentered)===-1){
            fruit[i].style.display="none";

        }
        else{
            fruit[i].style.display="flex";
        }

    }
})