class Bob {
    constructor(x,y,radius){

        var options = {
            'isStatic':false, 
            'restitution':0.5,
            'density':0.8,
             
        }
        this.body = Bodies.circle(x,y,radius,options);
        this.radius = radius
    }
    display(){
        var pos =this.body.position;
        ellipseMode(RADIUS);
        fill("Pink");
        ellipse(pos.x, pos.y, this.radius, this.radius);
      }
    }
    //k ,ok mam
    //now do one thing.. wither just close liver server and launch it again. try?
    s

    //if stilld doesnt work, upload the project to github and send me the lin to repo