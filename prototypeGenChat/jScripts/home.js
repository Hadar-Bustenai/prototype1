$(document).ready(function () {
    $('#modalVideo').on('hidden.bs.modal', function (e) {
        $("#video-popup-iframe").attr("src", "");
    });

    $("#carousel1").click(function () {
        console.log("carousel-back-1");
        $("#topSection").css("background-image", "url(/images/shuka_banner.png");
    })

    $("#carousel2").click(function () {
        console.log("carousel-back-2");
        $("#topSection").css("background-image", "url(/images/batya_banner.png");
    })

    $("#carousel3").click(function () {
        console.log("carousel-back-3");
        $("#topSection").css("background-image", "url(/images/eazy_banner.png");
    })

    $(".play-video").click(function (e) {
        //console.log(e.currentTarget.getAttribute("buttonname"))
        var buttonClicked = e.currentTarget.getAttribute("buttonname");
        console.log(buttonClicked);
        if (buttonClicked == "shuka") {
            console.log("yay");
        $("#video-popup-iframe").attr("src", "https://player.vimeo.com/video/322019687");
        }
        if (buttonClicked == "batya") {
            $("#video-popup-iframe").attr("src", "https://player.vimeo.com/video/332616223"); //להחליף את הקישורים לסרטונים המתאימים
        }
        if (buttonClicked == "eazy") {
            $("#video-popup-iframe").attr("src", "https://player.vimeo.com/video/332615983"); //להחליף את הקישורים לסרטונים המתאימים
        }
    })

    $('.carouselSlick').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        centerMode: true
    });

})