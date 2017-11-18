export default class Tile{
	constructor(){
		this.color=Math.random();
		
		//bind class methods
		this.update=this.update.bind(this);
		this.render=this.render.bind(this);
	}
	
	update(){
		
	}
	
	render(ctx,x,y){
		if (this.color<.5)	ctx.fillStyle='grey';
		else ctx.fillStyle='red';
		ctx.fillRect(x*40,y*40,38,38);
	}
}