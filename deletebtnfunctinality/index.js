function handleFormSubmit(event){
    event.preventDefault();
    const username=document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const myobj = {
        username,
        email,
        phone
    }
    
    
    const serilized = JSON.stringify(myobj);
    localStorage.setItem(myobj.email,serilized);
    const parent = document.querySelector("ul");
    const lis=document.createElement("li");
    const listext = document.createTextNode(`${myobj.username}  - ${myobj.email} - ${myobj.phone}`);
    lis.appendChild(listext);
    parent.appendChild(lis);  
    const  deletebtn = document.createElement("button");
    const deletebtntext=document.createTextNode("delete");
    deletebtn.appendChild(deletebtntext);
    deletebtn.setAttribute("type","click");
    lis.appendChild(deletebtn);
    deletebtn.addEventListener("click",function(event){
        localStorage.removeItem(myobj.email);
        parent.removeChild(lis);
    });
}