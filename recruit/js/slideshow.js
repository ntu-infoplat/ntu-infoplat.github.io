// Author: LeoMao

'use strict';

$(function() {
    // element need to be changed background
    var banner = document.querySelector("#banner");
    var cta = document.querySelector("#cta");

    // time step
    var tstep = 4000;
    
    // count and max
    var MAX = 2;
    var nowIndex = 0;

    // images url
    var images = [
        "images/banner.jpg",
        "images/banner0.jpg"
    ];

    var imgpreload = new Array(images.length);
    for (var i = 0; i < images.length; i++) {
        imgpreload[i] = new Image();
        imgpreload[i].src = images[i];
    }

    var nextbg = function(element) {
        var front = element.querySelector(".site-bg.front");
        var back = element.querySelector(".site-bg.back");
        back.style.backgroundImage = "url('css/images/light-bl.svg'), url('css/images/light-br.svg'), url('css/images/overlay.png'), url('" + images[nowIndex] + "')";
        front.classList.toggle('front');
        front.classList.toggle('back');
        back.classList.toggle('back');
        back.classList.toggle('front');
    }

    setInterval(function() {
        nowIndex = (nowIndex + 1) % MAX;
        nextbg(banner);
        nextbg(cta);
    }, tstep);
});
