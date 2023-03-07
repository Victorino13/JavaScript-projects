function validateForm() {
    let x = document.forms["myForm"]["fname"].value;
    let y = document.forms["myForm"]["lname"].value;
    if (x == "") {
      alert("First and Last Name must be filled out");
      return false;
    }
}

