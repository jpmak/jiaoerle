$(function() {
    //lazzy load
    $("img.lazy").show().lazyload({
        effect: "fadeIn",
        threshold: 300,
        placeholder: "/wp-content/themes/jiaoerle/dist/images/loadbg.jpg",
        skip_invisible: false
    });
    //回到顶部.
    var e = $("#rocket-to-top"),
        t = $(document).scrollTop(),
        n,
        r,
        i = !0;
    $(window).scroll(function() {
            var t = $(document).scrollTop();
            t == 0 ? e.css("background-position") == "0px 0px" ? e.fadeOut("slow") : i && (i = !1, $(".level-2").css("opacity", 1), e.delay(100).animate({
                    marginTop: "-1000px"
                },
                "normal",
                function() {
                    e.css({
                            "margin-top": "-25px",
                            display: "none"
                        }),
                        i = !0
                })) : e.fadeIn("slow")
        }),
        e.hover(function() {
                $(".level-2").stop(!0).animate({
                    opacity: 1
                })
            },
            function() {
                $(".level-2").stop(!0).animate({
                    opacity: 0
                })
            }),
        $(".level-3").click(function() {
            function t() {
                var t = e.css("background-position");
                if (e.css("display") == "none" || i == 0) {
                    clearInterval(n),
                        e.css("background-position", "0px 0px");
                    e.css("height", "200px;");
                    return
                }
                switch (t) {
                    case "0px 0px":
                        e.css("background-position", "-176px 0px");
                        break;
                    case "-176px 0px":
                        e.css("background-position", "-264px 0px");
                        break;
                    case "-264px 0px":
                        e.css("background-position", "-352px 0px");
                        break;
                    case "-352px 0px":
                        e.css("background-position", "-440px 0px");
                        break;
                    case "-440px 0px":
                        e.css("background-position", "-176px 0px");
                }
            }
            if (!i) return;
            n = setInterval(t, 50),
                $("html,body").animate({
                    scrollTop: 0
                }, "slow");
        });

    $(window).scroll(function() {
        // 获得div的高度

        if ($(window).scrollTop() > 200) {
            // 滚动到指定位置
            $("#rocket-lit").fadeIn();
        } else {
            $("#rocket-lit").fadeOut();
        }
    });

    $('#rocket-lit').click(function() {
        $("html,body").animate({
            scrollTop: $("body").offset().top
        }, 500);
    });
    //相关新闻
    var elm = $('.sitebar_list');
    var startPos = $(elm).offset().top;
    $.event.add(window, "scroll", function() {
        var p = $(window).scrollTop();
        $(elm).css('position', ((p) > startPos) ? 'fixed' : 'static');
        $(elm).css('top', ((p) > startPos) ? '0px' : '');
    });
});



//检测移动设备
if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    $('.wp-pagenavi').addClass('web-page');
} else {
    $('.xianguan .pic').removeClass('web-of').addClass('pc-of');
    $('body a').not('a.navbar-brand,.navbar-nav a,.c-self a,.wp-pagenavi a').attr('target', '_blank');
}