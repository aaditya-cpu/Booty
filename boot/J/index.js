$(document).ready(function() {
    var co = 0


    $("#lol").click(function() {
        if (co % 2 == 0) {
            $("#lolImg").hide();
            $("#lelImg").show();
            co = co + 1;
        } else {

            $("#lolImg").show();
            $("#lelImg").hide();
            co = co + 1;
        }
    });

});