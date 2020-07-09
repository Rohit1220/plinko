class plinko
{
	constructor(x,y)
	{
		var options={
			isStatic:true,
			restitution:0,
			density:0.7
			}
		this.x=x;
        this.y=y;
        this.r=10;
        this.body=Bodies.circle(this.x, this.y,this.r, options)
        this.color = (color(random(0,255),random(0,255),random(0,255)))
		World.add(world, this.body);
	}
	display()
	{
			var plinkopos=this.body.position;		
			push()
			translate(plinkopos.x, plinkopos.y);
			rectMode(CENTER)
			strokeWeight(3);
			fill(255,0,255)
			ellipse(0,0,this.r,this.r);
			pop()
	}
}