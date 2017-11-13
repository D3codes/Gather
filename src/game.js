//game.js

import Tile from './tile';
import World from './world';

/** @class Game
  * Represents a gather game
  */
export default class Game{
	constructor(){
		this.over=false;
		
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
		// Create the screen buffer canvas
		this.screenBufferCanvas = document.createElement('canvas');
		this.screenBufferCanvas.width = 600;
		this.screenBufferCanvas.height = 600;
		document.body.appendChild(this.screenBufferCanvas);
		this.screenBufferContext = this.screenBufferCanvas.getContext('2d');
		// Bind class functions
		this.update = this.update.bind(this);
		this.render = this.render.bind(this);
		this.loop = this.loop.bind(this);
		this.handleKeyDown=this.handleKeyDown.bind(this);
		
		window.onkeydown=this.handleKeyDown;
		//Start the game loop
		this.interval=setInterval(this.loop, 1);
	}
	
	handleKeyDown(event) {
		event.preventDefault();
		switch(event.key){
			case 'ArrowLeft':
				this.input.direction='left';
				break;
			case 'ArrowRight':
				this.input.direction='right';
				break;
			default:
				break;
		}
	}
	


	
	update(){
		
	}
	
	render(){
		//Clear the canvas
		this.backBufferContext.clearRect(0,0,500,500);
		this.screenBufferContext.clearRect(0,0,500,500);
		
		//render tiles
		this.tiles.forEach((tile)=>{
			tile.render(this.backBufferContext);
		});

		this.screenBufferContext.drawImage(this.backBufferCanvas,0,0);
	}
	
	loop(){
		if (!this.over){
			this.update();
			this.render();
		}
	}
}