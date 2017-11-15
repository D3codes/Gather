export default class World{
	constructor(){
		//grid represents the 2d martix of the world of tiles
		//tile types are represented as integers
		this.grid=[];
		for (let y=0;y<100;y++){
			let row=[];
			for (let x=0;x<100;x++){
				this.row.push(1);
			}
			this.grid.push(row);
		}

		//bind class functions
		this.update.bind(this);
		this.render.bind(this);
	}

	update(){

	}

	render(ctx, playerPosition){
		for (let x=playerPosition.x-8;x<=playerPosition.y+8;x++){
			for (let y=playerPosition.y-8;y<=playerPosition.y+8;y++){

			}
		}
	}
}
