/**
    1. Mock authentication checking for hardcoded credentials and displaying dashboard upon valid input.
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

/**
    2. Task List Management (CRUD) to manage tasks.
*/

const taskForm = document.querySelector("#task-form");

taskForm.addEventListener("submit", function(event){
    event.preventDefault();
    //! Get task value, and append a button next to it.
    let addedTask = document.querySelector("#task-input").value;
    const li = document.createElement("li");
    li.innerHTML = addedTask + " <button class='delete-task'>Delete</button>";

    //! Appened the task to the task list.
    document.querySelector("#task-list").appendChild(li);
    document.querySelector("#task-input").value = "";
    
    //! Delete added task
    deleteButton = li.querySelector(".delete-task");
    deleteButton.addEventListener("click", function(){
        li.remove();
    })

});

/*
    3. Proper logout and elements manipulation
*/

//! Get logout button
const logoutButton = document.querySelector("#logout-btn");
logoutButton.addEventListener("click", function(){
    localStorage.removeItem("isLoggedIn");
    document.querySelector("#login-container").classList.remove("hidden");
    document.querySelector("#dashboard-container").classList.add("hidden");
})

