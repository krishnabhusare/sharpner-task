function handleFormSubmit(event){
    event.preventDefault();
    const username=document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;

    myobj = {
        "Username":username,
        "Email":email,
        "Phone":phone

    }
    localStorage.setItem("user details",JSON.stringify(myobj));


}


module.exports=handleFormSubmit;