/*
For this exercise, my vision is a pac-man trying to eat into an inventory of items. The box is floating on water.

I changed the colour of the circle to yellow, adjusted the angle of the circle and removed 1/6 of it to mimic a pac-man.

I also edited the wavelengths of the waves to make the blue wave look like water while the other wave is another random item. 

Finally, I made everything fit into the box by adjusting the x and y values.

Moving on, I could improve on trying to understand what commands I am changing.

Overall, I am satisfied with the outcome as my first attempt. 
*/

function setup() {
    createCanvas(512, 512);
    frameRate(20);
    noFill();
}

function draw() {
    background(245, 245, 245);

    // background
    stroke(0,98,255);
    var standardDeviation = 400;
    for (var i = 0; i < 5000; i++) {
        var backDist = randomGaussian(0, standardDeviation);
        var b = createVector(backDist, random(-height, height));
        point(b.x, b.y);
    }

    // circle
    stroke(255, 242, 0);
    translate(width / 5, height / 4);
    for (var i = 0; i < 5000; i++) {
        var cirDist = (max(random(0, 1), random(0, 1)) * width) / 10;
        var angle = random(7, PI * 4);
        var c = createVector(cos(angle), sin(angle));
        c.mult(cirDist);
        point(c.x, c.y);
    }

    // top line
    stroke(99, 255, 224);
    for (var i = 0; i < 500; i++) {
        var lineX = random(80, 350);
        var lineY = random(20 - 10, 20 + 10);
        point(lineX, lineY);
    }

    // bottom line
    for (var i = 0; i < 2000; i++) {
        var lineX = random(80, 350);
        var lineY = random(320 - 10, 320 + 10);
        point(lineX, lineY);
    }

    // left & right lines
    for (var i = 0; i < 1000; i++) {
        var leftLineX = random(90 - 10, 90 + 10);
        var leftLineY = max(random(10, 330), random(10, 330));
        point(leftLineX, leftLineY);

        var rightLineX = random(340 - 10, 340 + 10);
        var rightLineY = max(random(10, 330), random(10, 330));
        point(rightLineX, rightLineY);
    }

    // square
    stroke(255, 181, 200);
    for (var i = 0; i < 5000; i++) {
        var sqX = random(100, 250);
        var sqY = random(150, 230);
        push();
        rotate(-PI / 8);
        point(sqX, sqY);
        pop();
    }

    // square shadow
    stroke(181, 187, 255);
    for (var i = 0; i < 5000; i++) {
        var sqBX = min(random(100, 250), random(100, 250));
        var sqBY = max(random(150, 230), random(80, 230));
        push();
        rotate(-PI / 8);
        point(sqBX, sqBY);
        pop();
    }

    // wave black
    push();
    stroke(255,110,110);
    translate(30, height / 2 + 5);
    var amp = 20;
    for (var i = 0; i < 3000; i++) {
        var waveX = random(70, 300);
        var waveY = cos((waveX / width) * PI * 10) * amp;
        waveY += random(-20, 30);
        point(waveX, waveY);
    }
    pop();

    // wave yellow
    push();
    stroke(99, 125, 255);
    translate(0, height / 3);
    var amp = 20;
    for (var i = 0; i < 5000; i++) {
        var waveX = random(100, 330);
        var waveY = cos((waveX / width) * PI * 6) * amp;
        waveY += random(-15, 15);
        point(waveX, waveY);
    }
    pop();
}
