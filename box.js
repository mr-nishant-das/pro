class box{
    constructor(x, y, width, height) {
        var options = {
            'restitution':0.4,
            'friction':0
        }
        this.visiblity = 255;
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
      }
      block1;
      block2;
      block3;
      block4;
      block5;
      block6;
      block7;
      block8;
      block9;
      block10;
      block12;
      block13;
      block14;
      block15;
      block16;
      blocks1;
      blocks2;
      blocks3;
      blocks4;
      blocks5;
      blocks6;
      blocks7;
      blocks8;
      blocks9;
      score(){
        if(this.visiblity < 0 && this.visiblity >-105 ){
          score++;
        }
      }
      
      display(){
        if(this.body.speed<3){
        var angle = this.body.angle;
        var pos = this.body.position;
        push();
        fill("blue");
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        rect(0, 0, this.width, this.height);
        pop();
        }
      }
}