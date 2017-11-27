export default class Tile{
	constructor(type){
		//tile types are empty, rock, wood, and ore.
		this.type=type;

		//bind class methods
		this.update=this.update.bind(this);
		this.render=this.render.bind(this);

		this.image = new Image()
		
	}

	update(){

	}

	render(ctx,x,y){
		let split=this.type.split('-');
		switch(split[0]){
			case 'empty':
				this.image.src = 'images/clear.png'
				ctx.drawImage(this.image, x*40, y*40, 40, 40)
				break;
			case 'rock':
			this.image.src = 'images/rock.png'
			ctx.drawImage(this.image, x*40, y*40, 40, 40)
				break;
			case 'ore':
				//place holders until sprites
				switch(split[1]){
					case 'iron':
						this.image.src = 'images/iron.png'
						break;
					case 'bronze':
						this.image.src = 'images/bronze.png'
						break;
					case 'silver':
						this.image.src = 'images/silver.png'
						break;
					case 'gold':
						this.image.src = 'images/gold.png'
						break;
					case 'platinum':
						this.image.src = 'images/platinum.png'
						break;
					case 'amethyst':
						this.image.src = 'images/amethyst.png'
						break;
					case 'sapphire':
						this.image.src = 'images/saphire.png'
						break;
					case 'emerald':
						this.image.src = 'images/emerald.png'
						break;
					case 'ruby':
						this.image.src = 'images/ruby.png'
						break;
					case 'diamond':
						this.image.src = 'images/diamond.png'
						break;
					case 'alexandrite':
						//blue+purple in final
						this.image.src = 'images/alexandrite.png'
						break;
					default:
				}

				ctx.drawImage(this.image, x*40, y*40, 40, 40)
				break;
			case 'wood':
				ctx.fillStyle='green'
				ctx.fillRect(x*40,y*40,38,38);
				break;
			case 'trade':
				ctx.fillStyle='#393433'
				ctx.fillRect(x*40,y*40,38,38);
				ctx.fillStyle='white';
				ctx.font = '15px Verdana'
				ctx.fillText('T', x*40+14, y*40+20);
				break

			case 'fuel':
			ctx.fillStyle='#393433'
			ctx.fillRect(x*40,y*40,38,38);
			ctx.fillStyle='white';
			ctx.font = '15px Verdana'
			ctx.fillText('F', x*40+14, y*40+20);
			break

			case 'repair':
			ctx.fillStyle='#393433'
			ctx.fillRect(x*40,y*40,38,38);
			ctx.fillStyle='white';
			ctx.font = '15px Verdana'
			ctx.fillText('R', x*40+14, y*40+20);
			break

			case 'upgrade':
			ctx.fillStyle='#393433'
			ctx.fillRect(x*40,y*40,38,38);
			ctx.fillStyle='white';
			ctx.font = '15px Verdana'
			ctx.fillText('U', x*40+14, y*40+20);
			break

			default:
		}
	}

	setType(type){
		this.type=type;
	}

	getInfo(){
		var hardness = 0
		switch(this.type.split('-')[1]) {
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
