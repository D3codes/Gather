//game.js
import Player from './player'
import Tile from './tile';
import World from './world';
import Info from './info'

/** @class Game
  * Represents a gather game
  */
export default class Game{
	constructor(){
		this.over=false;

		this.player = new Player()
		this.info = new Info(this.player)

		//create tiles
		this.tiles=[];
		for (let i=0;i<600;i+=40){
			for (let j=0;j<600;j+=40){
				this.tiles.push(new Tile(i,j));
			}
		}
		//Create the back buffer canvas
		this.backBufferCanvas = document.createElement('canvas');
		this.backBufferCanvas.width = 600;
		this.backBufferCanvas.height = 600;
		this.backBufferContext = this.backBufferCanvas.getContext('2d');

		this.infoBufferCanvas = document.createElement('canvas')
		this.infoBufferCanvas.width = 200
		this.infoBufferCanvas.height = 600
		this.infoBufferContext = this.infoBufferCanvas.getContext('2d')

		// Create the screen buffer canvas
		this.screenBufferCanvas = document.createElement('canvas');
		this.screenBufferCanvas.width = 800;
		this.screenBufferCanvas.height = 600;
		document.body.appendChild(this.screenBufferCanvas);
		this.screenBufferContext = this.screenBufferCanvas.getContext('2d');
		// Bind class functions
		this.update = this.update.bind(this);
		this.render = this.render.bind(this);
		this.loop = this.loop.bind(this);
		//Start the game loop
		this.interval=setInterval(this.loop, 1);
	}

	update(){
		this.player.update()
		this.info.update()
	}

	render(){
		//Clear the canvas
		this.backBufferContext.clearRect(0,0,600,600);
		this.infoBufferContext.clearRect(0,0,200,600)
		this.screenBufferContext.clearRect(0,0,800,600);
		//render tiles
		this.tiles.forEach((tile)=>{
			tile.render(this.backBufferContext);
		});

		this.player.render(this.backBufferContext)
		this.info.render(this.infoBufferContext)

		this.screenBufferContext.drawImage(this.backBufferCanvas,0,0);
		this.screenBufferContext.drawImage(this.infoBufferCanvas,600,0)
	}

	loop(){
		if (!this.over){
			this.update();
			this.render();
		}
	}
}
