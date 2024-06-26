//your JS code here. If required.
document.addEventListener("DOMContentLoaded", function() {
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
	
});	