$(document).ready(function () {
    // login animate
    var pathname = window.location.pathname;
    //    $('.logo').click(function () {
    //        setTimeout(function () {
    //            $('#login').fadeTo('slow', 1.0);
    //        }, 2000);
    //        $('#login').stop(false, false);
    //        setTimeout(function () {
    //            $('#login').fadeTo('slow', 0.0);
    //        }, 15000);
    $('.close').click(function () {
        $('#login').fadeTo('slow', 0.0);
        $("#login").css("z-index", "-2");
    });
    // pages buttons animate
    //    $('#menu-jquery li .button').hover(
    //		function () {
    //		    $(this).css('padding', '5px 15px')
    //					 .stop()
    //					 .animate({ 'paddingLeft': '25px', 'paddingRight': '25px', 'backgroundColor': 'rgba(0,0,0,0.5)' }, 'fast');
    //		},
    //		function () {
    //		    $(this).css('padding', '5px 25px').stop().animate({ 'paddingLeft': '15px', 'paddingRight': '15px', 'backgroundColor': 'rgba(0,0,0,0.2)' }, 'fast');
    //		}).mousedown(function () {
    //		    $(this).stop().animate({ 'backgroundColor': 'rgba(0,0,0,0.1)' }, 'fast');
    //		}).mouseup(function () {
    //		    $(this).stop().animate({ 'backgroundColor': 'rgba(0,0,0,0.5)' }, 'fast');
    //		});
    // font resizer
    $(".topMenuAction").click(function () {
        if ($("#openCloseIdentifier").is(":hidden")) {
            $("#slider").animate({ marginTop: "0px" }, 500);
            $("#topMenuImage").html('<img src="../images/close.png" alt="open" />');
            $("#openCloseIdentifier").show();
            setTimeout(function () {
                $("#slider").animate({ marginTop: "-40px" }, 500);
                $("#topMenuImage").html('<img src="../images/open.png" alt="close" />');
                $("#openCloseIdentifier").hide();
            }, 10000);
        } else {
            $("#slider").animate({ marginTop: "-40px" }, 500);
            $("#topMenuImage").html('<img src="../images/open.png" alt="close" />');
            $("#openCloseIdentifier").hide();
        }
    });
    // reset font size
    var originalFontSize = $('#main #slideshow #slidesContainer .slide').css('font-size');
    $(".resetFont").click(function () {
        $('#main #slideshow #slidesContainer .slide').css('font-size', originalFontSize);
    });
    // increase font size
    $(".increaseFont").click(function () {
        var currentFontSize = $('#main #slideshow #slidesContainer .slide').css('font-size');
        var currentFontSizeNum = parseFloat(currentFontSize, 10);
        var newFontSize = currentFontSizeNum * 1.2;
        $('#main #slideshow #slidesContainer .slide').css('font-size', newFontSize);
        return false;
    });
    // decrease font size
    $(".decreaseFont").click(function () {
        var currentFontSize = $('#main #slideshow #slidesContainer .slide').css('font-size');
        var currentFontSizeNum = parseFloat(currentFontSize, 10);
        var newFontSize = currentFontSizeNum * 0.8;
        $('#main #slideshow #slidesContainer .slide').css('font-size', newFontSize);
        return false;
    });
    // hover kontakt maps
    $("#main #kontakt-info p a").hover(function () {
        var id = $(this).attr('id');
        if (id == "p1") {
            $("#map2").hide("slow");
            $("#map3").hide("slow");
        }
        if (id == "p2") {
            $("#map1").hide("slow");
            $("#map3").hide("slow");
        }
        if (id == "p3") {
            $("#map1").hide("slow");
            $("#map2").hide("slow");
        }
        $("#ma" + id).show("slow");
    });
    $(".close-map1").click(function () {
        $("#map1").hide("slow");
    });
    $(".close-map2").click(function () {
        $("#map2").hide("slow");
    });
    $(".close-map3").click(function () {
        $("#map3").hide("slow");
    });
    // Keyboard shortcuts
    $(function () {
        $(document).keyup(function (e) {
            var key = (e.keyCode ? e.keyCode : e.charCode);
            switch (key) {
                case 76:
                    if (e.altKey && e.ctrlKey) {
                        if ($("#login").is(":visible")) {
                            $('#login').fadeTo('slow', 1.0);
                            $("#login").css("z-index", "100");
                            $('#submit').focus();
                        }
                        else {
                            $('#login').fadeTo('slow', 0.0);
                            $("#login").css("z-index", "-2");
                        }
                    }
                    break;
                case 81:
                    if (e.altKey && e.ctrlKey) {
                        if ($("#barContainer").is(':visible'))
                            $("#barContainer").hide("slow");
                        else
                            $("#barContainer").show("slow");
                    }
                    break;
                case 49:
                    if (e.altKey && e.ctrlKey)
                        navigateUrl($('a[id$=pocetna]'));
                    break;
                case 50:
                    if (e.altKey && e.ctrlKey)
                        navigateUrl($('a[id$=usluge]'));
                    break;
                case 51:
                    if (e.altKey && e.ctrlKey)
                        navigateUrl($('a[id$=onama]'));
                    break;
                case 52:
                    if (e.altKey && e.ctrlKey)
                        navigateUrl($('a[id$=novosti]'));
                    break;
                case 53:
                    if (e.altKey && e.ctrlKey)
                        navigateUrl($('a[id$=kontakt]'));
                    break;
                case 54:
                    if (e.altKey && e.ctrlKey)
                        if ($('#admin1').is(':visible'))
                            navigateUrl($('a[id$=admin1]'));
                    break;
                case 55:
                    if (e.altKey && e.ctrlKey)
                        if ($('#admin2').is(':visible'))
                            navigateUrl($('a[id$=admin2]'));
                    break;
                default: ;
            }
        });
        function navigateUrl(jObj) {
            window.location.href = $(jObj).attr("href");
        }

    });
    //change background color
    $("#changeColor1").click(function () {
        $("#mainbackground").animate({ backgroundColor: "#e2e2e2" }, "slow");
    });
    $("#changeColor2").click(function () {
        $("#mainbackground").animate({ backgroundColor: "#bcbcbc" }, "slow");
    });
    $("#changeColor3").click(function () {
        $("#mainbackground").animate({ backgroundColor: "#a8a8a8" }, "slow");
    });
});