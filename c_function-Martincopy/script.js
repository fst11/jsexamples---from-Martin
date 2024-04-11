
/* 
  ftnSalutation is a conventional JS function
  it returns an array of strings where each
  element (or index) of the array consists
  of the salutations to pupulate inputSelect
  found in index.html
*/

/* 
  ftnSalutation written as an ARROW function
  it uses the passed-in parameters to form
  a greeting to be returned to the function that
  calls it
*/
function ftnSalutation() {
  //  implement your statement(s) here
  return new Array("Mr.", "Mrs.", "Ms.", "Dr.");
}

const ftnGreeting = (saluation, user) => {
  // write msg here
  const msg = "Hi " + saluation + " " + user + "," + "we have received your selection.";
  return msg;
}

/*
Complete the challenge statement below
Create the function validateInputs below
Hint: 
- validateInputs accepts two arguments (choice, name)
- name should include a default value name=""
- validateInputs returns false if either choice or name is incorrectly filled
- validateInputs returns true if both choice and name are correctly filled
*/

function validateInputs(choice, name = "") {

  // if choice is empty OR name is empty; return to the caller (Method 1)
  if (choice == "" || name == "")
    return;

  return true;

  // if choice is empty OR name is empty; return to the caller (Method 2)
  // if (choice == "")
  //   return;
  // if (name == "")
  //   return;
  // return true;

}
// Refactor the function to use a switch statement
// None:    "Thank you. No preference selected."
// Chicken: "The main course served is Chicken Cordon Bleu."
// Beef:    "The main course served is Beef Wellington."
// Others:  "We will contact you separately to arrange."

function ftnRadioMeal(meal) {
  // document.getElementById("displayPreference").textContent = meal;

  // using switch state to provide the approp feedback to user

  switch (meal) { //key = meal selected
    case "None":
      document.getElementById("displayPreference").textContent = "No Preference Selected";
      break;
    case "Beef":
      document.getElementById("displayPreference").textContent = "The main course served is Beef Wellington";
      break;
    case "Chicken":
      document.getElementById("displayPreference").textContent = "The main course served is Chicken Cordon Bleu";
      break;
    default:
      document.getElementById("displayPreference").textContent = "We will contact you separately.";
      break;

    // default:
    //   break;
  }
}