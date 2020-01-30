$(document).ready(function(){
    //References from signup html based on user input
    var signupForm = $(".signup");
    var emailInput = $("#email-input");
    var passwordInput = $("#password-input");

    //Signup button is clicked, validate the email and password are not blank
    signupForm.on("submit", function(event) {
        event.PreventDefault();
        var userData = {
            email:emailInput.val().trim(),
            password:passwordInput.val().trim()
        };
        if (!userData.email || !userData.password) {
            return;
        }
        //If there is an email and password, run the signUpUser function
        signUpUser(userData.email, userData.password);
        emailInput.val("");
        passwordInput.val("");
    });

    //Create a post to the signup route, if successful redirect to the members page. If not log errors
    function signUpUser(email, password) {
        $.post("api/signup", {
            email: email,
            password: password
        })
        .then(function(data) {
            window.location.replace("/members");
        })
        console.log("login error");
        alert("Your email and password are no good!");
    }
});
