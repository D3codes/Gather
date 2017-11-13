export default class Tile{
	constructor(x,y){
		this.x=x;
		this.y=y;
		
		//bind class methods
		this.update=this.update.bind(this);
		this.render=this.render.bind(this);
	}
	
	update(){
		
	}
	
	render(ctx){
		ctx.fillStyle='grey'
		ctx.fillRect(this.x+1,this.y+1,38,38);
	}
}