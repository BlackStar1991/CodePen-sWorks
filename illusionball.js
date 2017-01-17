function IllusionBall(canvaElement) {
    this.canvaElement = canvaElement;
    var $this = this;
    const COLORS = ["#2E3691", "#485A8B", "#9B2A89", "#E6194D", "#F31C26", "#F27E1E", "#FFC80D", "#AFCA3E", "#15A14F", "#5B9E71", "#54C6D3", "#0CAAE3"];

    this.initialize = function () {

        var canvas, numberOfCorn, corners, numberField, numberOfAngls;
        canvas = document.getElementById(this.canvaElement);
        numberOfCorn = 48;
        corners = $(".corners");
        numberField = $('span');
        numberOfAngls = corners.val();

        $(window).resize(function () {
            var halfScreen = $(window).height();
            canvas.style.width = (halfScreen / 2) + "px";
            canvas.style.height = (halfScreen / 2 ) + "px";
        });

        numberField.text(numberOfAngls);

        corners.on("input", function () {
            numberOfAngls = corners.val();
            console.log(numberOfAngls + "  =numberOfAngls");
            numberField.text(numberOfAngls);
            numberOfCorn = numberOfAngls;
            $this.renderCircle();
        });

        var ctx = canvas.getContext('2d');


        this.renderCircle = function () {

            ctx.clearRect(0, 0, canvas.width, canvas.height);

            var radius = 10,
                x = (canvas.width) / 2,
                y = (canvas.height) / 2,
                c = 0;
            var step = 1;

            for (var i = 0; i <= numberOfCorn; i++) {
                var R = step * radius;
                var f = Math.PI / 2;
                if (c <= COLORS.length) {  // задаем цвет
                    ctx.beginPath();
                    var X = x + R * Math.cos(f + ((Math.PI * 2 * i) / numberOfCorn));
                    var Y = y + R * Math.sin(f + ((Math.PI * 2 * i) / numberOfCorn));
                    ctx.arc(X, Y, radius, 0, Math.PI * 2, true);
                    ctx.fillStyle = COLORS[c];
                    ctx.fill();
                    ctx.stroke();
                    c++;
                    if (c == COLORS.length) {
                        c = 0;
                    }
                    if ((i == numberOfCorn) && ( (radius * step)) < x * 0.85) {
                        step++;
                        radius = 1.1 * radius;
                        i = 0;
                    }
                }
            }
        };

        this.renderCircle();
    }
}

