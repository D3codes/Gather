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

	render(ctx,x,y, images){
		ctx.drawImage(images[this.type], x*40, y*40, 40, 40)
	}

	setType(type){
		this.type=type;
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
