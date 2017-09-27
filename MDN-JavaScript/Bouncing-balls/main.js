// setup canvas
var canvas = document.querySelector('canvas');
var ctx = canvas.getContext('2d');

var width = canvas.width = window.innerWidth;
var height = canvas.height = window.innerHeight;

//balls array
var balls = [];

// define variable for ball count paragraph

var showBallNum = document.querySelector('p');
var count = 0;

// function to generate random number

function random(min, max) {
    var num = Math.floor(Math.random() * (max - min)) + min;
    return num;
}
//constructor Shape
function Shape(x, y, velX, velY, exists, color, size) {
    //坐标
    this.x = x;
    this.y = y;
    //速度
    this.velX = velX;
    this.velY = velY;
    //存在 颜色大小
    this.exists = exists;
    this.color = color;
    this.size = size;
}
//constructor Ball  
function Ball(x, y, velX, velY, exists, color, size) {
    Shape.apply(this, arguments);
}
//继承shape上的方法
Ball.prototype = Object.create(Shape.prototype);
Ball.prototype.constructor = Ball;

//Ball function
//Draw
Ball.prototype.draw = function () {
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
    ctx.fill();
}
//Update
Ball.prototype.update = function () {
    if ((this.x + this.size) >= width || (this.x - this.size) <= 0) {
        this.velX = -(this.velX);
    }
    if ((this.y + this.size) >= height || (this.y - this.size) <= 0) {
        this.velY = -(this.velY);
    }

    this.x += this.velX;
    this.y += this.velY;
}
Ball.prototype.collision = function () {
    for (var j = 0; j < balls.length; j++) {
        if (!(this === balls[j])) {
            var dx = this.x - balls[j].x;
            var dy = this.y - balls[j].y;
            var distance = Math.sqrt(dx * dx + dy * dy);
            if (distance < this.size + balls[j].size) {
                balls[j].color = this.color = 'rgb(' + random(0, 255) + ',' + random(0, 255) + ',' + random(0, 255) + ')';
            }
        }
    }
}
//constructor EvilCricle
function EvilCricle(x, y, velX, velY, exists, color, size) {
    Shape.apply(this, arguments);
}
//继承shape上的方法
EvilCricle.prototype = Object.create(Shape.prototype);
EvilCricle.prototype.constructor = EvilCricle;
//EvilCricle function
EvilCricle.prototype.draw = function () {
    ctx.beginPath();
    ctx.strokeStyle = this.color;
    ctx.lineWidth = 3;
    ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
    ctx.stroke();
}

EvilCricle.prototype.checkBounds = function () {
    if ((this.x + this.size) >= width) {
        this.x = this.x - this.size;
    }
    if ((this.x - this.size) <= 0) {
        this.x = this.x + this.size;
    }
    if ((this.y + this.size) >= height) {
        this.y = this.y - this.size;
    }
    if ((this.y - this.size) <= 0) {
        this.y = this.y + this.size;
    }
}

EvilCricle.prototype.setControls = function () {
    var _this = this;
    window.onkeydown = function (e) {
        if (e.keyCode === 87 || e.keyCode === 38) { //W
            _this.y -= _this.velY
        }
        if (e.keyCode === 65 || e.keyCode === 37) { //A
            _this.x -= _this.velX
        }
        if (e.keyCode === 83 || e.keyCode === 40) { //S
            _this.y += _this.velY
        }
        if (e.keyCode === 68 || e.keyCode === 39) { //D
            _this.x += _this.velX
        }
    }
}
EvilCricle.prototype.collision = function () {
    for (var k = 0; k < balls.length; k++) {
        if (balls[k].exists) {
            var dx = this.x - balls[k].x;
            var dy = this.y - balls[k].y;
            var distance = Math.sqrt(dx * dx + dy * dy);
            if (distance < this.size + balls[k].size) {
                balls[k].exists = false;
                balls.splice(k, 1);
                count--;
                showBallNum.textContent = 'The rest of the ball:' + count;
            }
        }
    }
}
//object evilCricle
var evilCricle = new EvilCricle(random(20, width), random(0, height), 20, 20, true, 'red', 20);
evilCricle.setControls();
//生成彩球
while (balls.length < 50) {
    var ball = new Ball(
        random(20, width),
        random(20, height),
        random(-7, 7),
        random(-7, 7),
        true,
        'rgb(' + random(0, 255) + ',' + random(0, 255) + ',' + random(0, 255) + ')',
        random(10, 20)
    );
    balls.push(ball);
    count++;
    showBallNum.textContent = 'The rest of the ball:' + count;
}
//Main function
function loop() {
    ctx.fillStyle = 'rgba(0,0,0,.25)';
    ctx.fillRect(0, 0, width, height);

    for (var i = 0; i < balls.length; i++) {
        if (balls[i].exists) {
            balls[i].draw();
            balls[i].update();
            balls[i].collision();
        }
    }

    evilCricle.draw();
    evilCricle.checkBounds();
    evilCricle.collision();

    window.requestAnimationFrame(loop);
}

loop();