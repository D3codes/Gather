export default class Tile{
	constructor(type){
		//tile types are empty, rock, wood, and ore.
		this.type=type;
		
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
				ctx.fillRect(x*40,y*40,38,38);
				break;
			case 'rock':
				ctx.fillStyle='brown'
				ctx.fillRect(x*40,y*40,38,38);
				break;
			case 'ore':
				ctx.fillStyle='yellow'
				ctx.fillRect(x*40,y*40,38,38);
				break;
			case 'wood':
				ctx.fillStyle='green'
				ctx.fillRect(x*40,y*40,38,38);
				break;
			case 'trade':
				ctx.fillStyle='#393433'
				ctx.fillRect(x*40,y*40,38,38);
				ctx.fillStyle='white';
				ctx.fillText('T', x*40+14, y*40+20);
		}
		
	}
	
	setType(type){
		this.type=type;
	}
	
	getInfo(){
		return {type:this.type}
	}
}