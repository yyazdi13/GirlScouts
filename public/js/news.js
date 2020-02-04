$("#submit-chat").on("click", function(){
    var newNews = {
        newsDate: $("#newsDate").val(),
        newsDetail: $("#newsDetail").val().trim(),
        title: $("#title").val().trim(),
        author: $("#first_name").val().trim()
    }
    $.post("/api/news", newNews).then(function(data){
        console.log(data);
    })
})