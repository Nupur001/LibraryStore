function validateLogin() {
  var x = document.forms["Loginform"]["id"].value;
   var y = document.forms["Loginform"]["pswd"].value;
   console.log("ITs here")
  if (x !== "Ritul") {
    alert("User does not exist");
    return false;
  }
  if (y !== "Ritul123") {
    alert("Wrong Password");
    return false;
  }
}