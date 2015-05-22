$(document).ready(function(){
  var movieSearch = $("#search")

  movieSearch.on("submit", function(event){
    event.preventDefault()
    var title = movieSearch.val()
    $.ajax({
      url: "http://www.omdbapi.com/?t=" + title,
      type: "GET",
      dataType: "json",
    }).done(function( response){
      $("#results").append("<ul>" + "<li>" +response.Title + "</li>" + "<li>" + response.Year + "</li>" + "</div>")
      $("#results").append("<li><img src=" + response.Poster + "/></li>>")
    }).fail(function(){
      console.log("AJAX request Failed!")
    })
  });
})
