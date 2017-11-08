//game.js

import Paddle from './paddle';
import Brick from './brick';
import Ball from './ball';

/** @class Game
  * Represents a snake game
  */
export default class Game{
	constructor(){
		this.over=false;
		//Create the back buffer canvas
		this.backBufferCanvas = document.createElement('canvas');
		this.backBufferCanvas.width = 300;
		this.backBufferCanvas.height = 400;
		this.backBufferContext = this.backBufferCanvas.getContext('2d');
		// Create the screen buffer canvas
		this.screenBufferCanvas = document.createElement('canvas');
		this.screenBufferCanvas.width = 300;
		this.screenBufferCanvas.height = 400;
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
		this.backBufferContext.clearRect(0,0,300,400);
		this.screenBufferContext.clearRect(0,0,300,400);
		

		this.screenBufferContext.drawImage(this.backBufferCanvas,0,0);
	}
	
	loop(){
		if (!this.over){
			this.update();
			this.render();
		}
	}
}