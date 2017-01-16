
window.onload = function () {
 
    var canvas = document.getElementById("canvas"),
       n = 48,  // количество углов по умолчанию
       corners = $('.corners'),
       num = $('span'),
       a = corners.val();

    $(window).resize(function () {
        var halfScreen = $(window).height();
        canvas.style.width = (halfScreen / 2) + "px";
        canvas.style.height = (halfScreen / 2 ) + "px";
    });

    num.text(a);

    $('.corners').on("input", function () {
        a = corners.val();
        console.log(a + "  =a");
        num.text(a);
        n = a;
        createCircle();
    });

        var ctx = canvas.getContext('2d');

        function createCircle() {
           
             ctx.clearRect(0, 0, canvas.width, canvas.height);

            var radius = 10,
            x = (canvas.width) / 2, 
            y = (canvas.height) / 2,
            color = ["#2E3691", "#485A8B", "#9B2A89", "#E6194D", "#F31C26", "#F27E1E", "#FFC80D", "#AFCA3E", "#15A14F", "#5B9E71", "#54C6D3", "#0CAAE3"];
        var c = 0;
        var step = 1;

            for (var i = 0; i <= n; i++) {
                var R = step * radius;
                var f = Math.PI / 2;
                if (c <= color.length) {  // задаем цвет
                    ctx.beginPath();
                    var X = x + R * Math.cos(f + ((Math.PI * 2 * i) / n));
                    var Y = y + R * Math.sin(f + ((Math.PI * 2 * i) / n));
                    ctx.arc(X, Y, radius, 0, Math.PI * 2, true);
                    ctx.fillStyle = color[c];
                    ctx.fill();
                    ctx.stroke();
                    c++;
                    if (c == color.length) {
                        c = 0;
                    }
                    if ((i == n) && ( (radius * step)) < x*0.85) {
                        step++;
                        radius = 1.1 * radius;
                        i = 0;
                    }
                }
            }
        }
        createCircle();  
}