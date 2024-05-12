

const lis=document.querySelectorAll(".fruit");
for(var i=0;i<lis.length;i++){
    const editbtn = document.createElement("button");
    const editbtntext = document.createTextNode("Edit");

editbtn.appendChild(editbtntext);
editbtn.className="edit-btn";
lis[i].appendChild(editbtn);

}


const form = document.querySelector("form");
const fruits = document.querySelector(".fruits");
form.addEventListener("submit",function(event){
    event.preventDefault();
    const fruittoadd = document.getElementById("fruit-to-add");
    const newli = document.createElement("li");
    const newlitext = document.createTextNode(fruittoadd.value);
    newli.appendChild(newlitext);
    newli.className="fruit";
    const deletebtn = document.createElement("button");
    const deletebtntext = document.createTextNode("x");
    deletebtn.className="delete-btn";
    deletebtn.appendChild(deletebtntext);
    newli.appendChild(deletebtn);

    const editbtn = document.createElement("button");
    const editbtntext = document.createTextNode("Edit");

    editbtn.appendChild(editbtntext);
    editbtn.className="edit-btn";
    newli.appendChild(editbtn);
    fruits.appendChild(newli);

});


fruits.addEventListener("click",function(event){
    if(event.target.classList.contains("delete-btn")){
        const fruitstodelete = event.target.parentElement;
        fruits.removeChild(fruitstodelete);
    
    };
});  







