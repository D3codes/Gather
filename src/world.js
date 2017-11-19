import Tile from './tile';

export default class World{
	constructor(){
		//grid represents the 2d martix of the world of tiles
		//tile types are represented as integers
		this.grid=[];
		for (let y=0;y<300;y++){
			let row=[];
			for (let x=0;x<300;x++){
				let generator=Math.random(type);
				let type='';
				if (generator<.8){
					type='rock';
				}
				else if(generator<.9){
					type='ore';
				}
				else{
					type='wood'
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
		this.grid[151][150].setType('trade');

		//bind class functions
		this.update.bind(this);
		this.render.bind(this);
	}
	
	sellItems(inventory){
		let total=0;
		total+=inventory.wood*10;
		total+=inventory.ore*50;
		
		return total;
	}

	update(playerPosition, playerInfo){
		let type=this.grid[playerPosition.x][playerPosition.y].getInfo().type;
		if (type!=="empty"){
			if(type==="trade"){
				return {type:'trade', income:this.sellItems(playerInfo.inventory)};
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
