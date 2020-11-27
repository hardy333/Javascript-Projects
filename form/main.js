const form = document.getElementById("form");
console.log(form);

const {username, email, password, password2}  = form;

console.log(username);
form.addEventListener("submit", (e) => {
    e.preventDefault();

    checkInputs();

})


function checkInputs(){
    const usernameValue = username.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();
    const emailValue = email.value.trim();

    // Username
    if(usernameValue === ""){
        setErrorFor(username, "Username cannot be blank.");


    } else {
        setSuccessFor(username);
    }


    // Email
    if(emailValue === ""){
        setErrorFor(email, "Email cannot be blank.");

    }else if(!isEmail(emailValue)){
        setErrorFor(email, "Email is not valid");

    }else{
        setSuccessFor(email);

    }

    // Password
    if(passwordValue === ""){
        setErrorFor(password, "Password cannot be blank.");

    }else{
        setSuccessFor(password);

    }

    // Password2
    if(password2Value === ""){
        setErrorFor(password2, "Password cannot be blank.");

    }else if(passwordValue !== password2Value){
        setErrorFor(password2, "Passwords does not match. ")
        setErrorFor(password, "Passwords does not match. ")
    }else{
        setSuccessFor(password2);

    }

}

function setErrorFor(input, message){
    const formControl = input.parentElement;
    const small = formControl.querySelector("small");
    small.innerText = message;

    formControl.classList.remove("success");
    formControl.classList.add("error");


}

function setSuccessFor(input){
    console.log(input.value);
    
    const formControl = input.parentElement;


    formControl.classList.remove("error");
    formControl.classList.add("success");

}


function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

