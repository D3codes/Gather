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
			player: new Image(),
			bedrock: new Image()
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
		this.images.bedrock.src = 'images/bedrock.png'

		this.sounds = {
			engine1: new Audio('engine.wav'),
			engine2: new Audio('engine.wav'),
			engine3: new Audio('engine.wav'),
			engine4: new Audio('engine.wav'),
			engine5: new Audio('engine.wav'),
			destroy1: new Audio('destroy.wav'),
      destroy2: new Audio('destroy.wav'),
      destroy3: new Audio('destroy.wav'),
      destroy4: new Audio('destroy.wav'),
			fuel: new Audio('fuel.wav'),
			pickup1: new Audio('pickup.wav'),
      pickup2: new Audio('pickup.wav'),
      pickup3: new Audio('pickup.wav'),
      pickup4: new Audio('pickup.wav'),
			repair: new Audio('repair.wav'),
			trade: new Audio('trade.wav'),
			upgrade: new Audio('upgrade.wav'),
			damage1: new Audio('damage.wav'),
      damage2: new Audio('damage.wav'),
      damage3: new Audio('damage.wav'),
      damage4: new Audio('damage.wav')
		}
		this.sounds.engine1.loop = true
		this.sounds.engine2.loop = true
		this.sounds.engine3.loop = true
		this.sounds.engine4.loop = true
		this.sounds.engine5.loop = true
		this.sounds.engine1.volume = 0.05
		this.sounds.engine2.volume = 0.05
		this.sounds.engine3.volume = 0.05
		this.sounds.engine4.volume = 0.05
		this.sounds.engine5.volume = 0.05
		this.mute = false
		this.START = true
		this.STOP = false

		this.world=new World(this.images);
		this.player = new Player(this.images.player, this.sounds)
		this.info = new Info(this.images)
		this.popup = new Popup(this.images)

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
					this.world=new World(this.images);
					this.player = new Player(this.images.player, this.sounds)
					this.info = new Info(this.images)
					this.state = 'PLAY'
					this.engineSound(this.START)
				} else if(event.clientX > 278 && event.clientX < 378 &&
					event.clientY > 390 && event.clientY < 414){
					this.world=new World(this.images);
					this.player = new Player(this.images.player, this.sounds)
					this.info = new Info(this.images)
					this.state = 'START'
				}
			} else if(this.state === 'PAUSE') {
				if(event.clientX > 218 && event.clientX < 318 &&
					event.clientY > 448 && event.clientY < 472) {
					this.state = 'PLAY'

					this.engineSound(this.START)
				} else if(event.clientX > 338 && event.clientX < 438 &&
					event.clientY > 448 && event.clientY < 472){
					this.world=new World(this.images);
					this.player = new Player(this.images.player, this.sounds)
					this.info = new Info(this.images)
					this.state = 'START'
				}
			} else if(this.state === 'START') {
				if(event.clientX > 278 && event.clientX < 378 &&
					event.clientY > 448 && event.clientY < 472) {
					this.state = 'PLAY'
					this.player.state = 'PLAY'
					this.engineSound(this.START)
				}
			} else if(this.state === 'UPGRADE') {
				//increase fuel tank
				let playerInfo = this.player.getInfo()
				if(event.clientX > 469 && event.clientX < 519 &&
					event.clientY > 263 && event.clientY < 288) {
						switch(playerInfo.maxFuel) {
				      case 100:
								if(playerInfo.money >= 1500) {
									this.player.maxFuel = 300
									this.player.money -= 1500
									this.sounds.upgrade.play()
								}
				        break
				      case 300:
								if(playerInfo.money >= 3500) {
									this.player.maxFuel = 750
									this.player.money -= 3500
									this.sounds.upgrade.play()
								}
				        break
				      case 750:
								if(playerInfo.money >= 10000) {
									this.player.maxFuel = 2000
									this.player.money -= 10000
									this.sounds.upgrade.play()
								}
				        break

							default:
				    }
				}

				//increase hull strength
				if(event.clientX > 469 && event.clientX < 519 &&
					event.clientY > 311 && event.clientY < 335) {
						switch(playerInfo.hullStrength) {
				      case 5:
								if(playerInfo.money >= 2000) {
									this.player.hullStrength = 10
									this.player.money -= 2000
									this.sounds.upgrade.play()
								}
				        break
				      case 10:
								if(playerInfo.money >= 5000) {
									this.player.hullStrength = 25
									this.player.money -= 5000
									this.sounds.upgrade.play()
								}
				        break
				      case 25:
								if(playerInfo.money >= 10000) {
									this.player.hullStrength = 50
									this.player.money -= 10000
									this.sounds.upgrade.play()
								}
				        break

							default:
				    }
				}

				//increase drill Strength
				if(event.clientX > 469 && event.clientX < 519 &&
					event.clientY > 351 && event.clientY < 376) {
						switch(playerInfo.drillStrength) {
				      case 10:
								if(playerInfo.money >= 2000) {
									this.player.drillStrength = 25
									this.player.money -= 2000
									this.sounds.upgrade.play()
								}
				        break
				      case 25:
								if(playerInfo.money >= 5000) {
									this.player.drillStrength = 50
									this.player.money -= 5000
									this.sounds.upgrade.play()
								}
				        break
				      case 50:
								if(playerInfo.money >= 20000) {
									this.player.drillStrength = 100
									this.player.money -= 20000
									this.sounds.upgrade.play()
								}
				        break

							default:
				    }
				}

				//increase inventory space
				if(event.clientX > 469 && event.clientX < 519 &&
					event.clientY > 386 && event.clientY < 410) {
						switch(playerInfo.maxStorage) {
				      case 10:
								if(playerInfo.money >= 1500) {
									this.player.maxStorage = 30
									this.player.money -= 1500
									this.sounds.upgrade.play()
								}
				        break
				      case 30:
								if(playerInfo.money >= 2500) {
									this.player.maxStorage = 60
									this.player.money -= 2500
									this.sounds.upgrade.play()
								}
				        break
				      case 60:
								if(playerInfo.money >= 10000) {
									this.player.maxStorage = 100
									this.player.money -= 10000
									this.sounds.upgrade.play()
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
		this.handleKeyDown = this.handleKeyDown.bind(this)
		this.engineSound = this.engineSound.bind(this)

		window.addEventListener('keydown', this.handleKeyDown)
		//Start the game loop
		this.interval=setInterval(this.loop, 1000/30);
	}

	update(){
		if(this.state === 'START') {
			this.player.state = 'START'
		}
		if(this.player.getInfo().health <= 0) {
			this.engineSound(this.STOP)
			this.state = 'GAME OVER'
		}

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

	engineSound(start) {
		if(start) {
			if(!this.mute) {
				this.sounds.engine2.currentTime = 0.1
				this.sounds.engine3.currentTime = 0.2
				this.sounds.engine4.currentTime = 0.3
				this.sounds.engine5.currentTime = 0.4
				this.sounds.engine1.play()
				this.sounds.engine2.play()
				this.sounds.engine3.play()
				this.sounds.engine4.play()
				this.sounds.engine5.play()
			}
		} else {
			this.sounds.engine1.pause()
			this.sounds.engine2.pause()
			this.sounds.engine3.pause()
			this.sounds.engine4.pause()
			this.sounds.engine5.pause()
		}
	}

	handleKeyDown(event) {
		switch(event.key) {
			case 'Escape':
				if(this.state === 'PLAY') {
					this.state = 'PAUSE'
					this.player.state = 'PAUSE'
					this.engineSound(this.STOP)
				}
				else if(this.state === 'PAUSE') {
					this.engineSound(this.START)
					this.state = 'PLAY'
					this.player.state = 'PLAY'
				} else if(this.state === 'UPGRADE') {
					this.state = 'PLAY'
					this.player.x = 600
					this.player.y = 600
				}
				break

			case 'm':
				if(this.mute) {
					this.mute = false
					this.engineSound(this.START)
				} else {
					this.mute = true
					this.engineSound(this.STOP)
				}
				break

			case 'p':
				this.player.maxOut()
				break

			default:
		}
	}
}
