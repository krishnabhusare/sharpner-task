function handleFormSubmit(event) {
  event.preventDefault();
  const userDetails = {
    username: event.target.username.value,
    email: event.target.email.value,
    phone: event.target.phone.value,
  };
  axios
    .post(
      "https://crudcrud.com/api/345438ad4e0a4bb191950645bec5cf94/appontmentdata",
      userDetails
    )
    .then((response) => displayUserOnScreen(response.data))
    .catch((error) => console.log(error));

  // Clearing the input fields
  document.getElementById("username").value = "";
  document.getElementById("email").value = "";
  document.getElementById("phone").value = "";
}
window.addEventListener("DOMContentLoaded", () => {
  const data = axios.get("https://crudcrud.com/api/345438ad4e0a4bb191950645bec5cf94/appontmentdata")
    .then((res) => {

      for (var i = 0; i < res.data.length; i++) {
        displayUserOnScreen(res.data[i]);
      }
    })
    .catch((err) => {
      console.log(err);
    })
  console.log(data);
})


function displayUserOnScreen(userDetails) {

  const userItem = document.createElement("li");
  userItem.appendChild(
    document.createTextNode(
      `${userDetails.username} - ${userDetails.email} - ${userDetails.phone}`
    )
  );

  const deleteBtn = document.createElement("button");
  deleteBtn.appendChild(document.createTextNode("Delete"));
  userItem.appendChild(deleteBtn);

  const editBtn = document.createElement("button");
  editBtn.appendChild(document.createTextNode("Edit"));
  userItem.appendChild(editBtn);

  const userList = document.querySelector("ul");
  userList.appendChild(userItem);

  deleteBtn.addEventListener("click", function (event) {
    axios.delete(`https://crudcrud.com/api/345438ad4e0a4bb191950645bec5cf94/appontmentdata/${userDetails._id}`)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      })
    userList.removeChild(event.target.parentElement);
    // localStorage.removeItem(userDetails.email);
  });
}