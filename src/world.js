import Tile from './tile';

export default class World{
	constructor(){
		//grid represents the 2d martix of the world of tiles
		//tile types are represented as integers
		this.grid=[];
		for (let y=0;y<300;y++){
			let row=[];
			for (let x=0;x<300;x++){
				let type='';
				let generator=Math.random(type);
				if (generator<.8){
					type='rock';
				}
				else if(generator<.9){
					if (generator<.82) type='ore-iron'
					else if (generator<.83) type ='ore-bronze'
					else if (generator<.84) type = 'ore-silver'
					else if (generator<.85) type = 'ore-gold'
					else if (generator<.86) type = 'ore-platinum'
					else if (generator<.87) type = 'ore-amethyst'
					else if (generator<.88) type = 'ore-sapphire'
					else if (generator<.885) type = 'ore-emerald'
					else if (generator<.89) type = 'ore-ruby'
					else if (generator<.895) type = 'ore-diamond'
					else type = 'ore-alexandrite'
				}
				else{
					type='wood-wood'
				}
				row.push(new Tile(type));
			}
			this.grid.push(row);
		}
		//build spawn area
		for (let x=148;x<153;x++){
			for (let y=148;y<153;y++){
				this.grid[x][y].setType('empty');
			}
		}
		//place special tiles
		this.grid[151][149].setType('trade');
		this.grid[151][151].setType('fuel')
		this.grid[149][149].setType('repair')
		this.grid[149][151].setType('upgrade')

		//bind class functions
		this.update.bind(this);
		this.render.bind(this);
	}

	sellItems(inventory){
		let total=0;
		total+=inventory.wood*10;
		total+=inventory.iron*50;
		total+=inventory.bronze*60
		total+=inventory.silver*80
		total+=inventory.gold*100
		total+=inventory.platinum*150
		total+=inventory.amethyst*20
		total+=inventory.sapphire*120
		total+=inventory.emerald*120
		total+=inventory.ruby*120
		total+=inventory.diamond*200
		total+=inventory.alexandrite*250

		return total;
	}

	refuel(playerInfo) {
		let pricePerGallon = 2
		let amountOfFuelNeeded = playerInfo.maxFuel - playerInfo.fuel
		let amountOfFuelAfforded = Math.floor(playerInfo.money/pricePerGallon)
		if(amountOfFuelAfforded > amountOfFuelNeeded) return amountOfFuelNeeded
		else return amountOfFuelAfforded
	}

	repair(playerInfo) {
		let pricePerPercent = 10
		let percentOfRepairsNeeded = 100 - playerInfo.health
		let amountOfRepairsAfforded = Math.floor(playerInfo.money/pricePerPercent)
		if(amountOfRepairsAfforded > percentOfRepairsNeeded) return percentOfRepairsNeeded
		else return amountOfRepairsAfforded
	}

	upgrade(playerInfo) {
		//TODO:add upgrade popup menu
	}

	update(playerPosition, playerInfo){
		let type=this.grid[playerPosition.x][playerPosition.y].getInfo().type;
		if (type!=="empty"){
			if(type==="trade"){
				return {type:'trade', income:this.sellItems(playerInfo.inventory)};
			}
			if(type==='fuel'){
				return {type:'fuel', amount:this.refuel(playerInfo)}
			}
			if(type === 'repair') {
				return {type:'repair', amount: this.repair(playerInfo)}
			}
			if(type === 'upgrade') {
				return {type:'upgrade', amount: this.upgrade(playerInfo)}
			}
			else{
				this.grid[playerPosition.x][playerPosition.y].setType('empty');
			}
		}
		return {type:type};
	}

	render(ctx, playerPosition){
		for (let x=0;x<16;x++){
			for (let y=0;y<16;y++){
				this.grid[playerPosition.x-7+x][playerPosition.y-7+y].render(ctx,x,y);
			}
		}
	}
}
