// Author: LeoMao

'use strict';

$(function() {
    var setup = function() {

        var t = document.getElementById('bigproblem');
        var conv = [
            t.getElementById('conv1'),
            t.getElementById('conv2'),
            t.getElementById('conv3'),
        ]

        var aniIn = 'flipInY';
        var aniOut = 'flipOutY';

        conv.forEach(function(x) {
            x.classList.add(aniOut);
        });
        conv.forEach(function(x) {
            x.classList.add('animated');
        });

        //reference position
        var getpos = function() {
            var rect = t.getBoundingClientRect();
            return rect.top + rect.height - screen.height;
        }
        var b = [
            0,
            -200,
            -400,
        ]
        var progress = 0;

        var check = function(index, flag) {
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
