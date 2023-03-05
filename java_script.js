function validateForm() {
  const inputs = document.getElementsByTagName("input");

  for (let i = 0; i < inputs.length; i++) {
    if (inputs[i].hasAttribute("required") && inputs[i].value === "") {
      alert(inputs[i].name + " is a required field");
      return false;
    }
  }

  return true;
}
<form action="/submit" method="post">
  <input type="text" name="name" required>
  <input type="email" name="email" required>
  <button type="submit" onclick="submitForm()">Submit</button>
</form>
