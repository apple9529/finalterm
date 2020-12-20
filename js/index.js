$(document).ready(function () {
    var button_status = 1;
    $(".클릭").on("click", function () {
        if (button_status == 0) {
            $(".클릭").css("top", "42%")
            $(".클릭").css("top", "42%")
            $(".전선").css("top", "-32%")
            $(".background").css("background-color", "#fce9ea")
            $(".circle").css("opacity", "100%")
            $(".circle2").css("animation-duration", "4s")
            $(".circle2").css("width", "10px")
            $(".circle3").css("opacity", "0%")
            $(".circle4").css("animation-duration", "unset")
            button_status = 1;

        } else if (button_status == 1) {
            $(".클릭").css("top", "59%")
            $(".전선").css("top", "-15%")
            $(".background").css("background-color", "black")
            $(".circle").css("opacity", "0%")
            $(".circle2").css("animation-duration", "unset")
            $(".circle2").css("width", "0px")
            $(".circle3").css("opacity", "100%")
            $(".circle4").css("animation-duration", "4s")
            button_status = 0;

        }
    })
})

$(document).ready(function () {
    //Apend

    for (var i = 0; i < 40; i++) {
        var windowWidth = $(window).width() * Math.random()
        var windowHeight = $(window).height() * Math.random()
        $(".background").append("<div class='circle' style='left:" + windowWidth + "px; top:" + windowHeight + "px;'></div>")
    }
    for (var i = 0; i < 40; i++) {
        var windowWidth = $(window).width() * Math.random()
        var windowHeight = $(window).height() * Math.random()
        $(".background").append("<div class='circle2' style='left:" + windowWidth + "px; top:" + windowHeight + "px;'></div>")
    }

})

$(document).ready(function () {
    //Apend

    for (var i = 0; i < 40; i++) {
        var windowWidth = $(window).width() * Math.random()
        var windowHeight = $(window).height() * Math.random()
        $(".background").append("<div class='circle3' style='left:" + windowWidth + "px; top:" + windowHeight + "px;'></div>")
    }
    for (var i = 0; i < 40; i++) {
        var windowWidth = $(window).width() * Math.random()
        var windowHeight = $(window).height() * Math.random()
        $(".background").append("<div class='circle4' style='left:" + windowWidth + "px; top:" + windowHeight + "px;'></div>")
    }

})

$(document).ready(function () {
    $(".클릭").on("click", function () {
        var val = $(this).attr("sound-val");
        $("." + val)[0].play();
    })

})
