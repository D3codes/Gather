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
		let split=this.type.split('-');
		switch(split[0]){
			case 'empty':
				ctx.fillStyle='gray'
				ctx.fillRect(x*40,y*40,38,38);
				break;
			case 'rock':
				ctx.fillStyle='brown'
				ctx.fillRect(x*40,y*40,38,38);
				break;
			case 'ore':
				console.log(split[1]);
				ctx.fillStyle='#8B6F48'
				ctx.fillRect(x*40,y*40,38,38);
				let color=''
				switch(split[1]){
					case 'iron':
						color='#414141';
						break;
					case 'bronze':
						color='#A57025';
						break;
					case 'silver':
						color='#A4A29F';
						break;
					case 'gold':
						color='#AA9634';
						break;
					case 'platinum':
						color='#DEDEDE';
						break;
					case 'amethyst':
						color='#AB6FCD';
						break;
					case 'sapphire':
						color='#0A5CB4';
						break;
					case 'emerald':
						color='#44B26B';
						break;
					case 'ruby':
						color='#E80000';
						break;
					case 'diamond':
						color='#9EEFFF';
						break;
					case 'alexandrite':
						//blue+purple in final
						color='#281172';
						break;
				}
				ctx.strokeStyle=color;
				ctx.fillStyle=color;
				ctx.beginPath();
				ctx.arc(x*40+19,y*40+19,15,0,2*Math.PI);
				ctx.fill();
				ctx.stroke();
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