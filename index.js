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

/**
 *
 * @param {CanvasRenderingContext2D} ctx
 * @param {*} pointA
 * @param {*} pointB
 */
function computeNewPoint(point, vector) {
    point[0] += vector[0];
    point[1] += vector[1];
    return point;
}

function drawStep(ctx, point) {
    ctx.lineTo(point[0], point[1]);
    ctx.stroke();
}

function drawSeveralSteps(ctx, point, vector, nb_steps, max_steps) {
    point = computeNewPoint(point, vector);
    drawStep(ctx, point);
    console.log(nb_steps);
    if (nb_steps < max_steps) {
        setTimeout(
            drawSeveralSteps,
            20,
            ctx,
            point,
            vector,
            nb_steps + 1,
            max_steps
        );
    }
}

function drawLineWithSteps(ctx, pointA, pointB, step_size) {
    ctx.moveTo(pointA[0], pointA[1]);
    let vector = [pointB[0] - pointA[0], pointB[0] - pointA[0]];
    let norm = Math.sqrt(Math.pow(vector[0], 2) + Math.pow(vector[1], 2));
    vector[0] = (vector[0] / norm) * step_size;
    vector[1] = (vector[1] / norm) * step_size;
    console.log("vector", vector);
    console.log("norm", norm);

    drawSeveralSteps(ctx, pointA, vector, 0, norm / step_size);
}

function initCtx(ctx) {
    ctx.beginPath();
    ctx.moveTo(10, 10);
    ctx.strokeStyle = "black";
    ctx.lineCap = "round";
    ctx.lineWidth = 5;
}

// let canva = document.querySelector("canvas");
// canva.style.width = "200px";
// canva.style.height = "200px";

// let ctx = canva.getContext("2d");
// initCtx(ctx);

// drawLineWithSteps(ctx, [10, 10], [16, 50], 1);
