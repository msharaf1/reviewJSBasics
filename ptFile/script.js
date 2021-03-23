$(document).ready(function(){
    $("button").click(function(){
        $("p").toggle();
    });
    $("h2").click(function() {
        let h2Tag = $("h2");
        h2Tag.css("backgroundColor", "green");
        h2Tag.css("color", "white");
    })
});//document