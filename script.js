/**
 Mock authentication checking for hardcoded credentials and displaying dashboard upon valid input.
 */
const form = document.querySelector("#login-form");

//! Check if loggedIn available before showing login form
if (localStorage.getItem("isLoggedIn")) {
    document.querySelector("#login-container").classList.add("hidden");
    document.querySelector("#dashboard-container").classList.remove("hidden");
}

form.addEventListener("submit", function(event){
    event.preventDefault(); //! Stops page from reloading/refreshing..

    let userEmail = document.querySelector("#email").value;
    let userPassword = document.querySelector("#password").value;
    
    //! Checking for valid credentials, bad due to hardcoded check.
    if (userEmail == "admin@test.com" && userPassword == "password123") {
        document.querySelector("#login-container").classList.add("hidden");
        document.querySelector("#dashboard-container").classList.remove("hidden");
        localStorage.setItem("isLoggedIn", true);
    } else {
        //! Display error message due to invalid credentials
        document.querySelector("#error-message").classList.remove("hidden");
    }
});
