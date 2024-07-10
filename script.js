document.addEventListener("DOMContentLoaded", function() {
    // Switch to register form
    let switchToRegister = document.querySelector("#switchToRegister");
    if (switchToRegister) {
        switchToRegister.addEventListener("click", function(event) {
            event.preventDefault();
            switchForms();
        });
    } else {
        console.error("Không tìm thấy phần tử #switchToRegister trong DOM.");
    }

    // Switch to login form
    let switchToLogin = document.querySelector("#switchToLogin");
    if (switchToLogin) {
        switchToLogin.addEventListener("click", function(event) {
            event.preventDefault();
            switchForms();
        });
    } else {
        console.error("Không tìm thấy phần tử #switchToLogin trong DOM.");
    }

    // Handle login form submission
    let loginForm = document.querySelector("#loginForm");
    if (loginForm) {
        loginForm.addEventListener("submit", function(event) {
            event.preventDefault();
            let username = document.querySelector("#loginUsername").value;
            let password = document.querySelector("#loginPassword").value;
            let user = { username: username, password: password };
            if (validateUser(user)) {
                saveUserCookie(user);
                redirectToWeb1S();
            } else {
                alert("Invalid username or password.");
            }
        });
    } else {
        console.error("Không tìm thấy phần tử #loginForm trong DOM.");
    }

    // Handle register form submission
    let registerForm = document.querySelector("#registerForm");
    if (registerForm) {
        registerForm.addEventListener("submit", function(event) {
            event.preventDefault();
            let username = document.querySelector("#registerUsername").value;
            let password = document.querySelector("#registerPassword").value;
            let newUser = { username: username, password: password };
            saveUserCookie(newUser);
            redirectToWeb1S();
        });
    } else {
        console.error("Không tìm thấy phần tử #registerForm trong DOM.");
    }

    // Function to validate user (simulated server-side validation)
    function validateUser(user) {
        return user.username === "user" && user.password === "password";
    }

    // Function to save user info to cookie
    function saveUserCookie(user) {
        document.cookie = `currentUser=${JSON.stringify(user)}; expires=Fri, 31 Dec 9999 23:59:59 GMT`;
    }

    // Function to redirect to web1s.com
    function redirectToWeb1S() {
        window.location.href = "https://web1s.com";
    }

    // Function to switch between login and register forms
    function switchForms() {
        let loginForm = document.querySelector("#loginForm");
        let registerForm = document.querySelector("#registerForm");
        let switchMessage = document.querySelector("#switchMessage");

        let loginFormDisplay = getComputedStyle(loginForm).display;

        if (loginFormDisplay === "none") {
            loginForm.style.display = "block";
            registerForm.style.display = "none";
            switchMessage.innerHTML = "Don't have an account? <a href=\"#\" id=\"switchToRegister\">Switch to Register</a>";
        } else {
            loginForm.style.display = "none";
            registerForm.style.display = "block";
            switchMessage.innerHTML = "Already have an account? <a href=\"#\" id=\"switchToLogin\">Switch to Login</a>";
        }
    }
});
