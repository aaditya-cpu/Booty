function trig() {
    for (let e = 0; e < 100; e++) {
        var pa = e;
        var tes = "https://schoolsbookonline.com/wp-json/wc/v3/orders?status=completed&page=" + pa + "&per_page=100";
        var settings = {
            "url": tes,
            "method": "GET",
            "timeout": 0,
            "headers": {
                "Authorization": "Basic Y2tfOWIzYTFiMjUxMTNhNDhhYjc0YmFjOTFmNzlmOGRkNzM4YzQ0OTg4Mzpjc19hM2UxZDExNTNhNWJkMDM2MmNmZDZlMGUzYTQ4MzZkZTNiYzhlNjI0",
                "Cookie": "wfwaf-authcookie-c7d8d8a291508289cb73487818cae234=14%7Cadministrator%7Cmanage_options%2Cunfiltered_html%2Cedit_others_posts%2Cupload_files%2Cpublish_posts%2Cedit_posts%2Cread%2Cmanage_network%7Cd604ff41162ec69faeb37f3350f625284e42c8bdb0f0a0a036b33aed8aacab6a"
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