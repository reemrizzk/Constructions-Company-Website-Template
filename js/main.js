$(function () {
    var animating = false;
    var animatedheading = false;
    var animatenum = true;
    var dir = "down";
    var lastscroll = 0;

    $(document).scroll(function () {
        var currentscroll = $(this).scrollTop();
        if (currentscroll > lastscroll) {
            dir = "down";
        } else {
            dir = "up";
        }
        lastscroll = currentscroll;

        if ($(this).scrollTop() > 100) {
            $("nav").css({ background: "rgba(30,30,30,1)" });
        } else {
            animatedheading = false;
            animatenum = true;
            $("#hide-sm").css({ opacity: "0" });
            $(".animate1").css({ opacity: "0" });
            $("#anim-number").html("");
            $("#anim-title").css({ opacity: "0" });
            $("nav").css({ background: "transparent" });
        }
        var scrollmin = Math.floor($("#team-list").offset().top - 200);
        var scrollmax = Math.floor($("#team-list").offset().top - 110);
        if (!animatedheading && dir == "down" && currentscroll > scrollmin && currentscroll < scrollmax) {
            $("#hide-sm").css({ opacity: "0" });
            $(".animate1").css({ opacity: "0", top: "30px" });

            $("#hide-sm").animate({ top: "-20px", opacity: "1" }, 700, function () {
                $(".animate1").animate({ top: "-20px", opacity: "1" }, 700, function () {
                    $("#anim-title").css({ opacity: "1" });
                    animatenumber(0, animatenum);
                    animatenum = false;
                    animatedheading = true;
                });
            });
            var num = 0;
        }
    });

    $("#logo").click(function () {
        if (!animating) {
            animating = true;
            $("html, body").animate({ scrollTop: 0 }, 500, function () {
                animating = false;
            });
        }
    });
    $("#menu-about").click(function () {
        if (!animating) {
            animating = true;
            $("html, body").animate({ scrollTop: $("#about").offset().top - 70 }, 500, function () {
                animating = false;
            });
        }
    });
    $("#menu-team").click(function () {
        if (!animating) {
            animating = true;
            $("html, body").animate({ scrollTop: $("#team-list").offset().top - 70 }, 500, function () {
                animating = false;
            });
        }
    });
    alternateHeading(1, false);
});
function alternateHeading(num, alternate) {
    var animating = false;
    var num2;
    if (num == 1) num2 = 2;
    else num2 = 1;
    if (alternate == true) {
        $(".text" + num2).fadeOut(100, function () {
            $(".text" + num).css({ top: "15px" });
            $(".text" + num2).css({ top: "15px" });
            if (!animating) {
                animating = true;
                $(".text" + num).css({ opacity: "0" });
                $(".text" + num).show();
                $(".text" + num).animate({ top: "-5px", opacity: "1" }, 700, function () {
                    animating = false;
                });
            }
        });
    }
    setTimeout(function () {
        alternateHeading(num2, true);
    }, 5000);
}
function animatenumber(currentnum, proceed) {
    if (currentnum < 450 && proceed) {
        $("#anim-number").html(currentnum.toString());
        currentnum += 30;

        setTimeout(function () {
            animatenumber(currentnum, true);
        }, 100);
    }
}
