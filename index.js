window.onload = function () {

    const stage = document.querySelector("#stage");
    const ctx = stage.getContext("2d");
    document.addEventListener("keydown", keyPush);

    setInterval(game, 80);

    const vel = 1;

    vx = vy = 0;
    hx = hy = 10;
    tampeça = 20;
    qntpeça = 20;
    applex = appley = 15;

    rastro = [];
    rabo = 5;





    function game() {

        ctx.fillStyle = "#000";
        ctx.fillRect(0, 0, stage.width, stage.height);

        hx += vx;
        hy += vy;

        if (hx < 0) {
            hx = qntpeça - 1;
        }
        if (hx > qntpeça - 1) {
            hx = 0;
        }
        if (hy < 0) {
            hy = qntpeça - 1;
        }
        if (hy > qntpeça - 1) {
            hy = 0;
        }

        ctx.fillStyle = "#4c0000";
        ctx.fillRect(applex * tampeça, appley * tampeça, tampeça, tampeça);

        ctx.fillStyle = "#628a4c";
        for (var i = 0; i < rastro.length; i++) {
            ctx.fillRect(rastro[i].x * tampeça, rastro[i].y * tampeça, tampeça, tampeça);
            if (rastro[i].x == hx && rastro[i].y == hy) {
               vx = vy = 0;
               rabo = 5;
            }
        }

        rastro.push({ x: hx, y: hy })
        while (rastro.length > rabo) {
            rastro.shift();
        }

        if (applex == hx && appley == hy) {
            rabo++;
            applex = Math.floor(Math.random() * qntpeça);
            appley = Math.floor(Math.random() * qntpeça);
        }

    }

    function keyPush(event) {
        switch (event.keyCode) {
            case 37:
                vx = -vel;
                vy = 0;
                break;
            case 38:
                vx = 0;
                vy = -vel;
                break;
            case 39:
                vx = vel;
                vy = 0;
                break;
            case 40:
                vx = 0;
                vy = vel;
                break;
            default:
                break;

}


    }





}