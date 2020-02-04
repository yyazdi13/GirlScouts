$("#submit-chat").on("click", function(event){
    event.preventDefault();
    var id;
   $.get("/api/members", function(data){
        for (let i = 0; i < data.length; i++){
            if(data[i].first_name === $("#first_name").val() && data[i].last_name === $("#last_name").val()){
               id = parseInt(data[i].id)
            }
        }
        blog(id);
    })
  
 
})

function blog(id){
    $("#MemberId").val(id);
    console.log($("#MemberId").val())
    newChat = {
        chatComments: $("#chatComments").val().trim(),
        MemberId: $("#MemberId").val().trim()
    }
    $.post("/api/blog", newChat)
    .then(function(data){
        console.log(data);
        location.reload();
    });
}

$.get('/api/blog', function(data){
    for (let i = 0; i <data.length; i++){
      $("#posted-blogs").append("<li>" + data[i].chatComments + "</li>")
    }
  })