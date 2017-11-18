export default class Tile{
	constructor(){
		let generator=Math.random();
		this.color=Math.random();
		//tile types are empty, rock, wood, and ore.
		if (generator<.8) this.type='rock';
		else if (generator<.9) this.type='ore';
		else this.type='wood';
		
		//bind class methods
		this.update=this.update.bind(this);
		this.render=this.render.bind(this);
	}
	
	update(){
		
	}
	
	render(ctx,x,y){
		switch(this.type){
			case 'empty':
				ctx.fillStyle='gray'
				break;
			case 'rock':
				ctx.fillStyle='brown'
				break;
			case 'ore':
				ctx.fillStyle='yellow'
				break;
			case 'wood':
				ctx.fillStyle='green'
				break;
		}
		ctx.fillRect(x*40,y*40,38,38);
	}
	
	setType(type){
		this.type=type;
	}
}