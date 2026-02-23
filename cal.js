function calculateAge() {
  var dob = document.getElementById("dob").value;

  if (dob == "") {
    alert("Select your date of birth");
    return;
  }

  var birthYear = new Date(dob).getFullYear();
  var currentYear = new Date().getFullYear();

  var age = currentYear - birthYear;

  document.getElementById("result").innerHTML =
    "Your age is " + age + " years old";
}
