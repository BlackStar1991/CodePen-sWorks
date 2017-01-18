function IllusionBall(canvaElement) {
    var $this = this;

    const COLORS = ["#2E3691", "#485A8B", "#9B2A89", "#E6194D", "#F31C26", "#F27E1E", "#FFC80D", "#AFCA3E", "#15A14F", "#5B9E71", "#54C6D3", "#0CAAE3"];

//    this.canvas = null;

    numberOfCorners = 48;
    corners = $(".corners");
    numberField = $('span');
    numberOfAngls = this.corners.val();
    //numberField.text(numberOfAngls);


    this.initialize = function () {
        $this.renderHtmlElements();

        $this.canvas = document.getElementById(canvaElement);


        $this.bindHanlers();
        $this.renderCircles();
    };

    this.renderHtmlElements = function() {
        // @TODO: move valuest into constants
        // @TODO: get rid of hardcoded dimensions
        // @TODO: add prefixes to avoid collisions between classes
        $this.canvas.append('<div class="frame"><canvas id="canvas" width="800" height="800"></canvas></div><div class="underCanvas"><input class="corners" type="range" min="1" max="60" step="1" value="48"><span>48</span> </div>');
    };

    this.bindHanlers = function() {
        // @TODO: implement resize properly
        // $(window).resize(function () {
        //     var halfScreen = $(window).height();
        //     $this.canvas.style.width = (halfScreen / 2) + "px";
        //     $this.canvas.style.height = (halfScreen / 2 ) + "px";
        // });

        // @TODO: remove bind to global input
        $this.corners.on("input", function () {
            numberOfAngls = $this.corners.val();
            // @TODO: implement proper logging
            console.log(numberOfAngls + "  =numberOfAngls");
            numberField.text(numberOfAngls);
            numberOfCorners = numberOfAngls;
            $this.renderCircles();
        });
    };

    this.renderCircles = function () {
        var context = $this.canvas.getContext('2d');
        context.clearRect(0, 0, $this.canvas.width, $this.canvas.height);

        var radius = 10,
            x = ($this.canvas.width) / 2,
            y = ($this.canvas.height) / 2,
            c = 0;
        var step = 1;

        for (var i = 0; i <= numberOfCorners; i++) {
            var R = step * radius;
            var f = Math.PI / 2;
            if (c <= COLORS.length) {  // задаем цвет
                context.beginPath();
                var X = x + R * Math.cos(f + ((Math.PI * 2 * i) / numberOfCorners));
                var Y = y + R * Math.sin(f + ((Math.PI * 2 * i) / numberOfCorners));
                context.arc(X, Y, radius, 0, Math.PI * 2, true);
                context.fillStyle = COLORS[c];
                context.fill();
                context.stroke();
                c++;
                if (c == COLORS.length) {
                    c = 0;
                }
                if ((i == numberOfCorners) && ( (radius * step)) < x * 0.85) {
                    step++;
                    radius = 1.1 * radius;
                    i = 0;
                }
            }
        }
    };
}

