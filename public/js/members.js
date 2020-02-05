$(document).ready(function() {

  //Grabbing the user's email from the signup along with the user id
  $.get("/api/user_data").then(function(data) {
    $(".member-name").text(data.email);
  
//Get member data to insert into the members table
 var memberForm = $(".newMember");
 var firstName = $("#fName");
 var lastName = $("#lName");
 var mRole = $("#catRole");
 var child = $("#cName");
 var user = ("");

 memberForm.on("click", function(event) {
   event.preventDefault();
   var memberData = {
     fName: firstName.val().trim(),
     lName: lastName.val().trim(),
     role: mRole.val().trim(),
     childName: child.val().trim(),
     UserId: user
  //  }]
   };
   if (!memberData.UserId || !userData.userId) {
     return;
   }

   registerMember(memberData.fName, memberData.lName, memberData.role, memberData.childName, memberData.UserId);
   firstName.val("");
   lastName.val("");
   mRole.val("");
   childName.val("");
   Userid.val("")

 });

 function registerMember(fName, lName, role, childName, UserId) {
   $.post("api/members", {
     fName: fName,
     lName: lName,
     role: role,
     childName: childName,
     UserId: UserId
   })
   .then(function(data) {
     window.location.replace("/main");

  // If there's an error, handle it by throwing up a bootstrap alert
})
.catch(handleLoginErr);
}

function handleLoginErr(err) {
$("#alert .msg").text(err.responseJSON);

$("#alert").fadeIn(500);
}
})
});
