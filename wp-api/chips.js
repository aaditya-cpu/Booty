function trig() {
    for (let e = 0; e < 100; e++) {
        var pa = e;
        var tes = "https://schoolsbookonline.com/wp-json/wc/v3/orders?status=completed&page=" + pa + "&per_page=100";
        var settings = {
            "url": tes,
            "method": "GET",
            "timeout": 0,
            "headers": {
                "Authorization": "",
                "Cookie": ""
            },
        };

        $.ajax(settings).done(function(response) {
            if (response !== "" || response !== " ") {
                console.log("Sucess on :" + pa);
                console.log(response);
            } else if (response === "[]") {
                console.log('Failed Page NO. : ' + pa);
            }
        });
    }

}