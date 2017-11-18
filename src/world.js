import Tile from './tile';

export default class World{
	constructor(){
		//grid represents the 2d martix of the world of tiles
		//tile types are represented as integers
		this.grid=[];
		for (let y=0;y<300;y++){
			let row=[];
			for (let x=0;x<300;x++){
				row.push(new Tile());
			}
			this.grid.push(row);
		}
		//build spawn area
		for (let x=148;x<153;x++){
			for (let y=148;y<153;y++){
				this.grid[x][y].setType('empty');
			}
		}

		//bind class functions
		this.update.bind(this);
		this.render.bind(this);
	}

	update(){

	}

	render(ctx, playerPosition){
		for (let x=0;x<16;x++){
			for (let y=0;y<16;y++){
				this.grid[playerPosition.x-7+x][playerPosition.y-7+y].render(ctx,x,y);
			}
		}
	}
}
