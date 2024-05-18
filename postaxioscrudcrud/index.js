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
    axios.post("https://crudcrud.com/api/6d229cfc230647e39027c6e9c82b9206/appontmentdata",myobj)
    .then((res)=>{
       DisplayUserOnScreen(res.data)
        console.log(res);
    })
    .catch((err)=>{
        document.body.innerHTML=document.body.innerHTML+"<h1>kahitri chukiche zale</h1>";
        console.log(err);
    })
    
     function DisplayUserOnScreen(){
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
    const editbtn = document.createElement("button");
    const editbtntext = document.createTextNode("edit");
    editbtn.appendChild(editbtntext);
    lis.appendChild(editbtn);
  
    deletebtn.addEventListener("click",function(event){
        localStorage.removeItem(myobj.email);
        parent.removeChild(lis);
    });
    editbtn.addEventListener("click",function(event){
        localStorage.removeItem(myobj.email);
        parent.removeChild(lis);
        document.getElementById("username").value=username;
        document.getElementById("email").value=email;
        document.getElementById("phone").value=phone;

    })

     
    
}
}

