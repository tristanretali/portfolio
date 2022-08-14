class Point{
    constructor(x, y, speedX, speedY, size, color){
        this.x = x;
        this.y = y;
        this.speedX = speedX;
        this.speedY = speedY;
        this.size = size;
        this.color = color;
    }

    // Function to draw a point
    draw(){
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
    }

    // Function to check collision with window
    collision(){
        if(this.x + this.size > canvas.width || this.x - this.size < 0){
            this.speedX = -this.speedX;
        }
        if(this.y + this.size > canvas.height || this.y - this.size < 0){
            this.speedY = -this.speedY;
        }
    }
    
    // Function to move the ball in the window
    move(){
        this.collision();
        this.x += this.speedX;
        this.y += this.speedY;
        this.draw();
    }

}