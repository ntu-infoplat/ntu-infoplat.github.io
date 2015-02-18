// Author: LeoMao

'use strict';

var check;

$(function() {
    var setup = function() {

        t = document.getElementById('bigproblem');
        var conv = [
            t.getElementById('conv1'),
            t.getElementById('conv2'),
            t.getElementById('conv3'),
        ]

        var aniIn = 'flipInY';
        var aniOut = 'flipOutY';

        conv.forEach(function(x) {
            x.classList.add('animated');
            x.classList.add(aniOut);
        });

        //reference position
        var getpos = function() {
            return document.getElementById('bigproblem').getBoundingClientRect().top;
        }
        var b = [
            100,
            0,
            -100,
        ]
        var progress = 0;

        check = function(index, flag) {
            if ((progress > index) ^ flag) {
                if (flag) {
                    conv[index].classList.remove(aniOut);
                    conv[index].classList.add(aniIn);
                }
                else {
                    conv[index].classList.remove(aniIn);
                    conv[index].classList.add(aniOut);
                }
            }
        }

        window.addEventListener('scroll', function(e) {
            if (getpos() > b[0]) {
                check(2, false);
                check(1, false);
                check(0, false);
                progress = 0;
            }
            else if (getpos() > b[1]) {
                check(2, false);
                check(1, false);
                check(0, true);
                progress = 1;
            }
            else if (getpos() > b[2]) {
                check(2, false);
                check(1, true);
                check(0, true);
                progress = 2;
            }
            else {
                check(2, true);
                check(1, true);
                check(0, true);
                progress = 3;
            }
        });
    }
    // animation target
    var t = document.getElementById('bigproblem');
    SVGInjector(t, {}, setup);

});
