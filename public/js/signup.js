$(document).ready(function() {
    //References from signup html based on user input
    var signupForm = $(".signup");
    var emailInput = $("#email");
    var userNameInput = $("#username");
    var passwordInput = $("#password");
    //debugger;

    //Signup button is clicked, validate the email and password are not blank
    signupForm.on("submit", function(event) {
        //alert("user data");
        event.preventDefault();
        var userData = {
            email: emailInput.val().trim(),
            username: userNameInput.val().trim(),
            password: passwordInput.val().trim()
        };
       // console.log(roles);

       // $('input[name="roles"]:checked').val();

         if (!userData.email || !userData.password) {
             return;
        }
          // var val = getRadioVal(document.getElementById("#member-role"), "roles");
        //  alert(val);

        // function getRadioVal(form, name) {
        //    var val;
        //   //get list of radio buttons with specified name
        // var radios = form.elements[name];

        // for (var i = 0, len = radios.length; i < len; i++) {
        //     if (radios[i].checked) {
        //       val = radios[i].value;
        //      break;
        // }

        // }
        //  return val;
        // }
        //If there is an email and password, run the signUpUser function
        signUpUser(userData.email, userData.username, userData.password);
        emailInput.val("");
        userNameInput.val("");
        passwordInput.val("");
             console.log(userData)
    });

    //Create a post to the signup route, if successful redirect to the members page. If not log errors
    function signUpUser(email, username, password) {
        $.post("/api/signup", {
            email: email,
            username: username,
            password: password
        })
            .then(function(data) {
                window.location.replace("/members");
            })
           .catch(logErr);
            }
            function logErr(err) {
                $("#alert.msg").text(err.responseJSON);
                console.log("hey")
            }
});
