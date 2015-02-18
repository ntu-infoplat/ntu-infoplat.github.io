// Author: LeoMao

'use strict';

$(function() {
    // element need to be changed background
    var body = document.querySelector("body");

    // time step
    var tstep = 6000;
    
    // images url
    var images = [
        "images/bg1.png",
        "images/bg2.png",
        "images/bg3.png",
        "images/bg4.png",
    ];

    // count and max
    var MAX = images.length;
    var nowIndex = 0;

    var imgpreload = new Array(images.length);
    for (var i = 0; i < images.length; i++) {
        imgpreload[i] = new Image();
        imgpreload[i].src = images[i];
    }

    var nextbg = function(element) {
        var front = element.querySelector(".site-bg.front");
        var back = element.querySelector(".site-bg.back");
        back.style.backgroundImage = "url('" + images[nowIndex] + "')";
        front.classList.toggle('front');
        front.classList.toggle('back');
        back.classList.toggle('back');
        back.classList.toggle('front');
    }

    setInterval(function() {
        nowIndex = (nowIndex + 1) % MAX;
        nextbg(body);
    }, tstep);
});
