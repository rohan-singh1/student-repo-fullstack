/** Exercise 03 - Form **/

// Add your code here

let form = document.querySelector("form");

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  console.group("========= FORM SUBMISSION =========");
  console.log("Name: "  + form.elements.nameInput.value);
  console.log("Email: " + form.elements.emailInput.value);

  if(form.elements.messageInput.value == "") {
    console.log("Feedback: No feedback was submitted.")
  } else {
    console.log("Feedback: " + form.elements.messageInput.value);
  }

  if (form.elements.newsletterCheckbox.checked) {
    console.log("Newsletter: Yes, I would like to join the newsletter.")
  } else {
    console.log("Newsletter: No, thank you.")
  }
  console.groupEnd();

}
