export default class Tile{
	constructor(type){
		//tile types are empty, rock, wood_wood, and ore_*type*.
		this.type=type;
		this.rotation = 0
		if(this.type !== 'wood_wood') {
			let rand = Math.random()
			if(rand < 0.25) this.rotation = 0
			else if(rand < 0.5) this.rotation = Math.PI/2
			else if(rand < 0.75) this.rotation = Math.PI
			else this.rotation = Math.PI+Math.PI/2
		}

		//bind class methods
		this.update=this.update.bind(this);
		this.render=this.render.bind(this);
	}

	update(){

	}

	render(ctx,x,y, images){
		ctx.save()
		ctx.translate(x*40+20, y*40+20)
		ctx.rotate(this.rotation)
		ctx.drawImage(images[this.type], -20, -20, 40, 40)
		ctx.restore()
	}

	setType(type){
		this.type=type;
		this.rotation = 0
	}

	explode(player) {
		if(this.type.split('_')[0] === 'ore' || this.type.split('_')[0] === 'wood'
		|| this.type.split('_')[0] === 'rock') {
			player.pickup(this.type)
			this.type = 'empty'
			this.rotation = 0
		}
	}

	getInfo(){
		var hardness = 0
		switch(this.type.split('_')[1]) {
			case 'iron':
			case 'bronze':
				hardness = 10
				break;

			case 'silver':
			case 'gold':
			case 'platinum':
				hardness = 25
				break;

			case 'amethyst':
			case 'sapphire':
			case 'emerald':
				hardness = 50
				break;

			case 'ruby':
			case 'diamond':
			case 'alexandrite':
				hardness = 100
				break;

			default:
				hardness = 0
		}

		return {type:this.type, hardness:hardness}
	}
}
