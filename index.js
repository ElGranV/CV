let app_images = document.querySelectorAll(".image-panel img");
for (let i = 0; i < app_images.length; i++) {
    app_images[i].classList.add("shadow");
}

let image_panel = document.getElementById("image-panel");
image_panel.addEventListener("click", () => {
    image_panel.style.display = "none";
});

let trigger_panel = document.getElementById("trigger-panel");
trigger_panel.addEventListener("click", () => {
    image_panel.style.display = "flex";
});

//Metaclasse qui sert de gestionnaire de positionnement
class Position {
    static toMiddle(rect) {
        let rWidth = rect.style.width.slice(0, -2);
        rWidth = parseInt(rWidth);
        rect.style.left = (window.innerWidth - rWidth) / 2 + "px";
    }
    static toCenter(rect) {
        let rWidth = rect.style.width.slice(0, -2);
        rWidth = parseInt(rWidth);
        rect.style.left = (window.innerWidth - rWidth) / 2 + "px";

        let rHeight = rect.style.height.slice(0, -2);
        rHeight = parseInt(rHeight);
        rect.style.top = (window.innerHeight - rHeight) / 2 + "px";
    }

    static toTopRight(rect) {
        rect.style.top = "15px";
        let rWidth = rect.style.width.slice(0, -2);
        rWidth = parseInt(rWidth);
        rect.style.left = window.innerWidth - rWidth - 30 + "px";
    }

    static toTopLeft(rect) {
        rect.style.top = "15px";
        let rWidth = rect.style.width.slice(0, -2);
        rWidth = parseInt(rWidth);
        rect.style.left = "30px";
    }
    static toRight(rect) {
        Position.toCenter(rect);
        let rWidth = rect.style.width.slice(0, -2);
        rWidth = parseInt(rWidth);
        rect.style.left = window.innerWidth - rWidth - 30 + "px";
    }
    static toBottom(rect) {
        let rHeight = rect.style.height.slice(0, -2);
        rHeight = parseInt(rHeight);
        rect.style.top = window.innerHeight - rHeight - 30 + "px";
    }
    static toBottomLeft(rect) {
        rect.style.top = null;
        rect.style.right = null;
        rect.style.left = "30px";
        rect.style.bottom = "30px";
    }
    static toBottomRight(rect) {
        rect.style.top = null;
        // rect.style.right = "30px";
        rect.style.left = null;
        rect.style.bottom = "30px";
    }
}
const wigle = [
    {
        transform: "rotate(-10deg) translateX(-20px)",
    },
    {
        transform: "rotate(10deg) translateX(10px)",
    },
    {
        transform: "rotate(0deg)",
        opacity: 1,
    },
];
let magic_hat = document.getElementsByClassName("magic-hat")[0];
magic_hat.left = true;
magic_hat.times = 0;
for (let elt of document.getElementsByClassName("game-message")) {
    elt.addEventListener("click", () => {
        elt.style.display = "none";
    });
}

setTimeout(() => {
    magic_hat.addEventListener("mouseover", () => {
        if (magic_hat.times === 0) {
            document.getElementById("magic-hat-text").style.display = "none";
            magic_hat.style.left = "5%";
            magic_hat.style.bottom = "5%";

            magic_hat.style.position = "fixed";
        }
        magic_hat.style.left = magic_hat.left ? "70%" : "5%";
        if (Math.random() > 0.5) magic_hat.style.bottom = "70%";
        else magic_hat.style.bottom = "5%";
        magic_hat.left = !magic_hat.left;
        magic_hat.times++;
        if (magic_hat.times > 20) {
            magic_hat.style.display = "none";
            document.getElementById("failed").style.display = "flex";
        }
    });
    magic_hat.addEventListener("click", () => {
        magic_hat.style.display = "none";
        document.getElementById("congrats").style.display = "flex";
    });
}, 4000);

function toggleMagicHat(event) {
    let rect = magic_hat.getBoundingClientRect();
    console.log(rect);
    if (
        rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight)
    ) {
        magic_hat.style.opacity = 1;
        document.removeEventListener("scroll", toggleMagicHat);
        setTimeout(
            () =>
                magic_hat.animate(wigle, {
                    duration: 30,
                    iterations: 50,
                }),
            2000
        );
    }
}

document.addEventListener("scroll", toggleMagicHat);

//  *
//  * @param {CanvasRenderingContext2D} ctx
//  * @param {*} pointA
//  * @param {*} pointB
//  */

// function computeNewPoint(point, vector) {
//     point[0] += vector[0];
//     point[1] += vector[1];
//     return point;
// }

// function drawStep(ctx, point) {
//     ctx.lineTo(point[0], point[1]);
//     ctx.stroke();
// }

// function drawSeveralSteps(ctx, point, vector, nb_steps, max_steps) {
//     point = computeNewPoint(point, vector);
//     drawStep(ctx, point);
//     console.log(nb_steps);
//     if (nb_steps < max_steps) {
//         setTimeout(
//             drawSeveralSteps,
//             20,
//             ctx,
//             point,
//             vector,
//             nb_steps + 1,
//             max_steps
//         );
//     }
// }

// function drawLineWithSteps(ctx, pointA, pointB, step_size) {
//     ctx.moveTo(pointA[0], pointA[1]);
//     let vector = [pointB[0] - pointA[0], pointB[0] - pointA[0]];
//     let norm = Math.sqrt(Math.pow(vector[0], 2) + Math.pow(vector[1], 2));
//     vector[0] = (vector[0] / norm) * step_size;
//     vector[1] = (vector[1] / norm) * step_size;
//     console.log("vector", vector);
//     console.log("norm", norm);

//     drawSeveralSteps(ctx, pointA, vector, 0, norm / step_size);
// }

// function initCtx(ctx) {
//     ctx.beginPath();
//     ctx.moveTo(10, 10);
//     ctx.strokeStyle = "black";
//     ctx.lineCap = "round";
//     ctx.lineWidth = 5;
// }

// let canva = document.querySelector("canvas");
// canva.style.width = "300px";
// canva.style.height = "300px";

// let ctx = canva.getContext("2d");
// let id = -1;
// let i = 0;
// function drawWib(ctx, callback = null, x = 10, y = 10, begun = false) {
//     let steps = [60, 80, 100, 129];
//     if (!begun) {
//         ctx.beginPath();
//         ctx.moveTo(10, 10);
//         ctx.strokeStyle = "#AFCBFF";
//         ctx.lineCap = "round";
//         ctx.lineWidth = 5;
//     }
//     console.log("Arouuuh");

//     function step(xStep, yStep, time) {
//         x += xStep;
//         y += yStep;
//         ctx.lineTo(x, y);
//         ctx.stroke();
//         return setTimeout(() => drawWib(ctx, callback, x, y, true), time);
//     }
//     function line(xStep, yStep, time) {
//         clearTimeout(id);
//         id = step(xStep, yStep, time);
//     }
//     //Debut W
//     if (x <= steps[0]) line(1, 1, 8);
//     if (x > steps[0] && x <= steps[1]) line(1, -1.5, 10);
//     if (x > steps[1] && x <= steps[2]) line(1, 1.5, 10);

//     if (x > steps[2] && x <= steps[3]) {
//         ctx.lineCap = "square";
//         line(1, -1.1, 15);
//         if (x === steps[3] + 1) {
//             x += 25;
//             y += 10;
//             ctx.moveTo(x, y);
//         }
//     }
//     console.log("Fin W");
//     //fin W
//     //Debut I
//     if (x > steps[3] && y <= 65) line(0, 1, 10);
//     if (x > steps[3] && y >= 64) {
//         //point du i
//         ctx.lineWidth = 10;
//         ctx.stroke();
//         clearTimeout(id);
//         y = 25;
//         ctx.beginPath();
//         ctx.moveTo(x, y);
//         ctx.lineWidth = 1;
//         ctx.strokeStyle = "#AFCBFF";

//         ctx.arc(x, y, 6, 0, 2 * Math.PI);
//         ctx.fill();
//         //Fin du I (avec point)
//         //Debut du B
//         ctx.canvas.style.transitionDuration = "2s";
//         ctx.beginPath();
//         let alpha = 0;
//         ctx.lineWidth = 10;

//         x += 30;
//         y = 12;
//         ctx.moveTo(x, y);
//         ctx.strokeStyle = "#AFCBFF";
//         y += 60;
//         ctx.bezierCurveTo(180, 10, 200, 30, 180, 65);
//         ctx.lineWidth = 5;

//         ctx.moveTo(170, 15);
//         ctx.strokeStyle = "#AFCBFF";
//         ctx.bezierCurveTo(170, 15, 280, 20, 185, 40);
//         ctx.moveTo(185, 40);
//         ctx.bezierCurveTo(185, 40, 280, 40, 180, 65);
//         //fin du B

//         id = setInterval(() => {
//             if (alpha < 0.8) {
//                 alpha += 0.009;
//                 ctx.stroke();
//             } else {
//                 clearInterval(id);
//                 if (callback) callback();
//             }
//         }, 30);
//     }
// }

// drawWib(ctx);
