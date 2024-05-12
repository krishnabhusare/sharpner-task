const form=document.querySelector("form");

form.addEventListener("submit",function(event){
    event.preventDefault();
    const Username=document.getElementById("Username");
    const Email = document.getElementById("Email");
    const Phone = document.getElementById("Phone");
    localStorage.setItem("Name",Username.value);
    localStorage.setItem("Email",Email.value);
    localStorage.setItem("Phone",Phone.value);
    
});