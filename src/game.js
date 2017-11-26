//game.js
import Player from './player'
import Tile from './tile';
import World from './world';
import Info from './info'
import Popup from './popup'

/** @class Game
  * Represents a gather game
  */
export default class Game{
	constructor(){
		this.over=false;

		this.world=new World();
		this.player = new Player()
		this.info = new Info(this.player)
		this.popup = new Popup()

		this.state = 'START'

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
		this.screenBufferCanvas.onmousedown = (event) => {
			console.log(event.clientX, event.clientY)
			if(this.state === 'GAME OVER') {
				if(event.clientX > 278 && event.clientX < 378 &&
					event.clientY > 429 && event.clientY < 454) {
					this.world=new World();
					this.player = new Player()
					this.info = new Info(this.player)
					this.state = 'PLAY'
				} else if(event.clientX > 278 && event.clientX < 378 &&
					event.clientY > 390 && event.clientY < 414){
					this.world=new World();
					this.player = new Player()
					this.info = new Info(this.player)
					this.state = 'START'
				}
			} else if(this.state === 'START') {
				if(event.clientX > 278 && event.clientX < 378 &&
					event.clientY > 429 && event.clientY < 454) {
					this.world=new World();
					this.player = new Player()
					this.info = new Info(this.player)
					this.state = 'PLAY'
				}
			}
		}

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
		if(this.player.getInfo().health <= 0) this.state = 'GAME OVER'

		if(this.state === 'PLAY') {
			let playerUpdate=this.world.update(this.player.getPosition(), this.player.getInfo());
			this.player.update(playerUpdate)
			this.info.update()
		}

		this.popup.update(this.state)
	}

	render(){
		//Clear the canvas
		this.backBufferContext.clearRect(0,0,600,600);
		this.infoBufferContext.clearRect(0,0,200,600)
		this.screenBufferContext.clearRect(0,0,800,600);
		//render tiles

		this.world.render(this.backBufferContext, this.player.getPosition());
		this.player.render(this.backBufferContext)
		this.popup.render(this.backBufferContext)

		this.info.render(this.infoBufferContext, this.player.getInfo())

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
