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
		this.images = {
			empty: new Image(),
			rock: new Image(),
			ore_iron: new Image(),
			ore_bronze: new Image(),
			ore_silver: new Image(),
			ore_gold: new Image(),
			ore_platinum: new Image(),
			ore_amethyst: new Image(),
			ore_sapphire: new Image(),
			ore_emerald: new Image(),
			ore_ruby: new Image(),
			ore_diamond: new Image(),
			ore_alexandrite: new Image(),
			wood_wood: new Image(),
			trade: new Image(),
			fuel: new Image(),
			repair: new Image(),
			upgrade: new Image(),
			player: new Image()
		}

		this.images.empty.src = 'images/empty.png'
		this.images.rock.src = 'images/rock.png'
		this.images.ore_iron.src = 'images/iron.png'
		this.images.ore_bronze.src = 'images/bronze.png'
		this.images.ore_silver.src = 'images/silver.png'
		this.images.ore_gold.src = 'images/gold.png'
		this.images.ore_platinum.src = 'images/platinum.png'
		this.images.ore_amethyst.src = 'images/amethyst.png'
		this.images.ore_sapphire.src = 'images/sapphire.png'
		this.images.ore_emerald.src = 'images/emerald.png'
		this.images.ore_ruby.src = 'images/ruby.png'
		this.images.ore_diamond.src = 'images/diamond.png'
		this.images.ore_alexandrite.src = 'images/alexandrite.png'
		this.images.wood_wood.src = 'images/wood.png'
		this.images.trade.src = 'images/trade.png'
		this.images.fuel.src = 'images/fuel.png'
		this.images.repair.src = 'images/repair.png'
		this.images.upgrade.src = 'images/upgrade.png'
		this.images.player.src = 'images/player.png'


		this.world=new World(this.images);
		this.player = new Player(this.images.player)
		this.info = new Info(this.images)
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
			if(this.state === 'GAME OVER') {
				if(event.clientX > 278 && event.clientX < 378 &&
					event.clientY > 429 && event.clientY < 454) {
					this.world=new World(this.images);
					this.player = new Player(this.images.player)
					this.info = new Info(this.images)
					this.state = 'PLAY'
				} else if(event.clientX > 278 && event.clientX < 378 &&
					event.clientY > 390 && event.clientY < 414){
					this.world=new World(this.images);
					this.player = new Player(this.images.player)
					this.info = new Info(this.images)
					this.state = 'START'
				}
			} else if(this.state === 'START') {
				if(event.clientX > 278 && event.clientX < 378 &&
					event.clientY > 429 && event.clientY < 454) {
					this.state = 'PLAY'
				}
			} else if(this.state === 'UPGRADE') {
				//increase fuel tank
				let playerInfo = this.player.getInfo()
				if(event.clientX > 409 && event.clientX < 509 &&
					event.clientY > 289 && event.clientY < 313) {
						switch(playerInfo.maxFuel) {
				      case 100:
								if(playerInfo.money >= 250) {
									this.player.maxFuel = 150
									this.player.money -= 250
								}
				        break
				      case 150:
								if(playerInfo.money >= 1000) {
									this.player.maxFuel = 250
									this.player.money -= 1000
								}
				        break
				      case 250:
								if(playerInfo.money >= 10000) {
									this.player.maxFuel = 500
									this.player.money -= 10000
								}
				        break

							default:
				    }
				}

				//increase drill Strength
				if(event.clientX > 409 && event.clientX < 509 &&
					event.clientY > 360 && event.clientY < 383) {
						switch(playerInfo.drillStrength) {
				      case 10:
								if(playerInfo.money >= 500) {
									this.player.drillStrength = 25
									this.player.money -= 500
								}
				        break
				      case 25:
								if(playerInfo.money >= 1000) {
									this.player.drillStrength = 50
									this.player.money -= 1000
								}
				        break
				      case 50:
								if(playerInfo.money >= 5000) {
									this.player.drillStrength = 100
									this.player.money -= 5000
								}
				        break

							default:
				    }
				}

				//increase inventory space
				if(event.clientX > 409 && event.clientX < 509 &&
					event.clientY > 430 && event.clientY < 453) {
						switch(playerInfo.maxStorage) {
				      case 10:
								if(playerInfo.money >= 500) {
									this.player.maxStorage = 25
									this.player.money -= 500
								}
				        break
				      case 25:
								if(playerInfo.money >= 2000) {
									this.player.maxStorage = 50
									this.player.money -= 2000
								}
				        break
				      case 50:
								if(playerInfo.money >= 5000) {
									this.player.maxStorage = 100
									this.player.money -= 5000
								}
				        break

							default:
				    }
				}

				//exit
				if(event.clientX > 139 && event.clientX < 163 &&
					event.clientY > 189 && event.clientY < 214) {
					this.player.x = 600
					this.player.y = 600
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
			let playerUpdate=this.world.update(this.player.getPosition(), this.player.getInfo(), this);
			this.player.update(playerUpdate)
			this.info.update()
		}

		this.popup.update(this.state, this.player.getInfo())
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
		this.update();
		this.render();
	}
}
