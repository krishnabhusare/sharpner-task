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
    const parent = document.getElementById("parent");
    const lis=document.createElement("li");
    const listext = document.createTextNode(`${myobj.username}  - ${myobj.email} - ${myobj.phone}`);
    lis.appendChild(listext);
    parent.appendChild(lis);    
     
    
}
module.exports=handleFormSubmit;