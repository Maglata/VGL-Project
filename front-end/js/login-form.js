// The Whole Login Container
const logincontainer = document.querySelector(".login-form-wrapper");
// Exit Icon
const exiticon = logincontainer.querySelector(".login-close");
// Input Form
const inputform = logincontainer.querySelector(".input-form");
// Unselected Form
const unselectedform = logincontainer.querySelector(".unselected-form");
// Unselected button
const changeformbutton = unselectedform.querySelector(".unselected-button");

let loginSelected = true;

changeformbutton.addEventListener("click", () =>{
  loginSelected = !loginSelected;
  changeForm(loginSelected,inputform,unselectedform);
})

// Form Changing
function changeForm(loginselected,inputForm,unselectedForm){
  // Input Form Variables
  const inputname = inputForm.querySelector(".is-hidden");
  const inputformtext = inputForm.querySelector(".input-text");
  const inputtype = inputForm.querySelector(".input-type");
  const inputbutton = inputForm.querySelector(".login-button");
  const forgottext = inputForm.querySelector(".login-forgot");

  // Unselected Form Variables
  const unselectedformtext = unselectedForm.querySelector(".unselected-text");
  const unselectedformdetails = unselectedform.querySelector(".unselected-details");
  const unselectedbutton = unselectedform.querySelector(".unselected-button");

  // If Login is Selected
  if(loginselected){
    inputname.style.display = "none";
    inputformtext.innerHTML = "Or use your account";
    inputtype.innerHTML = "Login"
    inputbutton.textContent = "Login";
    forgottext.style.display = "block";

    unselectedForm.style.background = "linear-gradient(122.34deg, #FF5C00 -16.04%, #FF9838 100%)";
    // unselectedForm.style.background = "linear-gradient(122.47deg, #FF5C00 43.18%, #FF9838 159.23%)";
    unselectedformtext.innerHTML = "Hello!";
    unselectedformdetails.innerHTML = "Are you here for the first time? Start your journey with us.";
    unselectedbutton.textContent = "Sign up";
  } // If Sign up is Selected
  else{
    inputname.style.display = "block";
    inputformtext.innerHTML = "Or use your email for registration";
    inputtype.innerHTML = "Sign up"
    inputbutton.textContent = "Sign up";
    forgottext.style.display = "none";
    
    // unselectedForm.style.background = "linear-gradient(122.34deg, #FF5C00 -16.04%, #FF9838 100%)";
    unselectedForm.style.background = "linear-gradient(122.47deg, #FF5C00 43.18%, #FF9838 159.23%)";
    unselectedformtext.innerHTML = "Welcome back!";
    unselectedformdetails.innerHTML = "To keep connected with us please login with your pesonal info.";
    unselectedbutton.textContent = "Login";
  }
}