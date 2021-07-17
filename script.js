$(document).ready(function () {
    console.log("JQ is ready")
});

$("button").click(function(){
    var randomValue = Math.floor(Math.random() * 86)
    $.get(`https://akabab.github.io/starwars-api/api/id/${randomValue}.json`, function(data){
      $("h1").text(data['name']);
       $("img").attr("src", data['image']);
    })
})
