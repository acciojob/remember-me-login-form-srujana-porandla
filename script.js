//your JS code here. If required.
/*document.addEventListener("DOMContentLoaded", function() {
const loginForm=document.getElementById('loginForm');
const existingButton=document.getElementById('existing');

	if(localStorage.getItem('username')&&localStorage.getItem('password')){
		existingButton.style.display = 'block';
	}
	loginForm.addEventListener('submit',function(event){
		event.preventDefault();
		const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        const rememberMe = document.getElementById('checkbox').checked;

        if (rememberMe) {
            localStorage.setItem('username', username);
            localStorage.setItem('password', password);
        } else {
            localStorage.removeItem('username');
            localStorage.removeItem('password');
        }

        alert(`Logged in as ${username}`);
    });
    existingButton.addEventListener('click', function() {
        const username = localStorage.getItem('username');
        console.log(alert(`Logged in as ${username}`));
    });
	
});	*/
const form = document.querySelector("form");
const usernameInput = document.querySelector("#username");
const passwordInput = document.querySelector("#password");
const rememberMeCheckbox = document.querySelector("#checkbox");
const existingButton = document.querySelector("#existing");
 
form.addEventListener("submit", (event) => {
  event.preventDefault();
 
  const username = usernameInput.value;
  const password = passwordInput.value;
  const rememberMe = rememberMeCheckbox.checked;
 
  if (rememberMe) {
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);
  } else {
    localStorage.removeItem("username");
    localStorage.removeItem("password");
  }
 
  alert(`Logged in as ${username}`);
  showButton();
  form.reset();
});
 
function loginAsSaved() {
  const username = localStorage.getItem("username");
  alert(`Logged in as ${username}`);
  form.reset();
}
 
function showButton() {
  const username = localStorage.getItem("username");
  const password = localStorage.getItem("password");
 
  if (username && password) {
    existingButton.style.display = "block";
  } else {
    existingButton.style.display = "none";
  }
}
 
existingButton.style.display = "none";
existingButton.addEventListener("click", loginAsSaved);
showButton();