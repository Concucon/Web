// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function() {
    // Check if user is logged in (checking cookie)
    let currentUser = getCookies().currentUser;
    if (currentUser) {
        // Redirect to web1s.com if user is logged in
        redirectToWeb1S();
    }

    // Switch to register form
    document.querySelector("#switchToRegister").addEventListener("click", function(event) {
        event.preventDefault();
        switchForms();
    });

    // Switch to login form
    document.querySelector("#switchToLogin").addEventListener("click", function(event) {
        event.preventDefault();
        switchForms();
    });

    // Handle login form submission
    document.querySelector("#loginForm").addEventListener("submit", function(event) {
        event.preventDefault();
        let username = document.querySelector("#loginUsername").value;
        let password = document.querySelector("#loginPassword").value;

        // Simulate server-side validation
        let user = { username: username, password: password };
        if (validateUser(user)) {
            saveUserCookie(user); // Save user info to cookie
            redirectToWeb1S(); // Redirect to web1s.com after successful login
        } else {
            alert("Invalid username or password.");
        }
    });

    // Handle register form submission
    document.querySelector("#registerForm").addEventListener("submit", function(event) {
        event.preventDefault();
        let username = document.querySelector("#registerUsername").value;
        let password = document.querySelector("#registerPassword").value;

        // Simulate server-side registration
        let newUser = { username: username, password: password };
        saveUserCookie(newUser); // Save new user info to cookie
        redirectToWeb1S(); // Redirect to web1s.com after successful registration
    });

    // Function to validate user (simulated server-side validation)
    function validateUser(user) {
        // In a real scenario, you would check against a database or server
        return user.username === "user" && user.password === "password";
    }

    // Function to save user info to cookie
    function saveUserCookie(user) {
        document.cookie = `currentUser=${JSON.stringify(user)}; expires=Fri, 31 Dec 9999 23:59:59 GMT`;
    }

    // Function to get cookies
    function getCookies() {
        let cookies = {};
        document.cookie.split(";").forEach(function(cookie) {
            let parts = cookie.split("=");
            cookies[parts[0].trim()] = decodeURIComponent(parts[1]);
        });
        return cookies;
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

        if (loginForm.style.display === "none") {
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

