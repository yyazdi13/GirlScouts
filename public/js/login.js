$(document).ready(function () {
    var loginForm = $(".login");
    var emailInput = $("#email-input");
    var pswdInput = $("#password-input");

    loginForm.on("submit", function (event) {
        event.preventDefault();
        var userData = {
            email: emailInput.val().trim(),
            password: pswdInput.val().trim()
        };
        if (!userData.email || !userData.password) {
            return;
        }
        //If user has email and password run the loginUser function and clear the form
        loginUser(userData.email, userData.password);
        emailInput.val("");
        pswdInput.val("");
    });

    //login user does a post to the api/login route and if successful, redirects us to the members page
    function loginUser(email, password) {
        $.post("/api/login", {
            email: email,
            password: password
        })
            .then(function () {
                window.location.replace("members");

                //If an error
            })
            .catch(function(err) {
                console.log(err);
            });
    }
});