$(document).ready(function() {
    var co = 0

    $("#lolImg").hide();
    $("#lelImg").hide();

    $("#lol").click(function() {
        if (co % 2 == 0) {
            $("#lolImg").hide(1500);
            $("#lelImg").show(1500);
            co = co + 1;
        } else {

            $("#lolImg").show(1500);
            $("#lelImg").hide(1500);
            co = co + 1;
        }
    });

});