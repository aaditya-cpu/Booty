const msgBox = document.querySelector('.tiffin');

var trip = 0;
$(document).ready(function() {
    $("button").click(function(e) {
        console.log(e);
        if (trip === 0) {
            $("h2").addClass('shake');
            trip = 1;
            console.log(trip);

        } else if (trip === 1) {
            console.log(e);
            $("h2").removeClass('shake');
            trip = 0;
            console.log(trip);
        };
    })
});