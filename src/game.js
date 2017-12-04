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
			player1: new Image(),
			player2: new Image(),
			player3: new Image(),
			player4: new Image(),
			bedrock: new Image(),
			bigExplosion: new Image(),
			smallExplosion: new Image(),
			teleporter: new Image(),
			fuelTank: new Image()
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
		this.images.player1.src = 'images/player1.png'
		this.images.player2.src = 'images/player2.png'
		this.images.player3.src = 'images/player3.png'
		this.images.player4.src = 'images/player4.png'
		this.images.bedrock.src = 'images/bedrock.png'
		this.images.bigExplosion.src = 'images/bigexplosion.png'
		this.images.smallExplosion.src= 'images/smallexplosion.png'
		this.images.teleporter.src = 'images/teleporter.png'
		this.images.fuelTank.src = 'images/fueltank.png'

		this.sounds = {
			ship: new Audio('ship.wav'),
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
      damage4: new Audio('damage.wav'),
			song: new Audio('ChipGather.wav'),
			teleport: new Audio('teleport.wav'),
			smallExplosion: new Audio('smallExplosion.wav'),
			bigExplosion: new Audio('bigexplosion.wav')
		}
		this.sounds.song.loop = true
		this.sounds.song.play()
		this.sounds.ship.loop = true
		this.sounds.ship.volume = 0.05
		this.sounds.pickup1.volume = 0.25
		this.sounds.pickup2.volume = 0.25
		this.sounds.pickup3.volume = 0.25
		this.sounds.pickup4.volume = 0.25
		this.sounds.destroy1.volume = 0.25
		this.sounds.destroy2.volume = 0.25
		this.sounds.destroy3.volume = 0.25
		this.sounds.destroy4.volume = 0.25
		this.sounds.fuel.volume = 0.4
		this.sounds.trade.volume = 0.4
		this.sounds.upgrade.volume = 0.4
		this.sounds.repair.volume = 0.4
		this.sounds.teleport.volume = 0.4
		this.sounds.bigExplosion.volume = 0.4
		this.sounds.smallExplosion.volume = 0.4
		this.mute = false
		this.START = true
		this.STOP = false

		this.world=new World(this.images);
		this.player = new Player(this.images, this.sounds)
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
					this.player = new Player(this.images, this.sounds)
					this.info = new Info(this.images)
					this.state = 'PLAY'
					this.engineSound(this.START)
				} else if(event.clientX > 278 && event.clientX < 378 &&
					event.clientY > 390 && event.clientY < 414){
					this.world=new World(this.images);
					this.player = new Player(this.images, this.sounds)
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
					this.player = new Player(this.images, this.sounds)
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
					event.clientY > 166 && event.clientY < 190) {
						switch(playerInfo.maxFuel) {
				      case 100:
								if(playerInfo.money >= 1500) {
									this.player.maxFuel = 300
									this.player.money -= 1500
									this.sounds.upgrade.play()
								}
				        break
				      case 300:
								if(playerInfo.money >= 2500) {
									this.player.maxFuel = 750
									this.player.money -= 2500
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
					event.clientY > 213 && event.clientY < 236) {
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
					event.clientY > 253 && event.clientY < 277) {
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
					event.clientY > 288 && event.clientY < 312) {
						switch(playerInfo.maxStorage) {
				      case 10:
								if(playerInfo.money >= 1500) {
									this.player.maxStorage = 30
									this.player.money -= 1500
									this.sounds.upgrade.play()
								}
				        break
				      case 30:
								if(playerInfo.money >= 3500) {
									this.player.maxStorage = 60
									this.player.money -= 3500
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

				//buy small explosive
				if(event.clientX > 469 && event.clientX < 519 &&
					event.clientY > 371 && event.clientY < 395 &&
					this.player.money >= 1000) {
						this.player.money -= 1000
						this.player.items.smallExplosive = this.player.items.smallExplosive+1
					}

				//buy large explosive
				if(event.clientX > 469 && event.clientX < 519 &&
					event.clientY > 431 && event.clientY < 455 &&
					this.player.money >= 3000) {
						this.player.money -= 3000
						this.player.items.bigExplosive=this.player.items.bigExplosive+1
					}

				//buy gas can
				if(event.clientX > 469 && event.clientX < 519 &&
					event.clientY > 491 && event.clientY < 517 &&
					this.player.money >= 5000) {
						this.player.money -= 5000
						this.player.items.fuelTank=this.player.items.fuelTank+1
					}

				//buy teleporter
				if(event.clientX > 469 && event.clientX < 519 &&
					event.clientY > 551 && event.clientY < 574 &&
					this.player.money >= 10000) {
						this.player.money -= 10000
						this.player.items.teleporter=this.player.items.teleporter+1
					}

				//exit
				if(event.clientX > 139 && event.clientX < 163 &&
					event.clientY > 90 && event.clientY < 116) {
					this.player.x = 600
					this.player.y = 600
					this.state = 'PLAY'
				}
			} else {
				if(event.clientX > 645 && event.clientX < 668 &&
					event.clientY > 564 && event.clientY < 600 &&
					this.player.items.smallExplosive > 0) {
						this.player.items.smallExplosive = this.player.items.smallExplosive-1
						this.sounds.smallExplosion.play()
						for(let i = this.player.x-3; i <= this.player.x+3; i++) {
							for(let j = this.player.y-3; j <= this.player.y+3; j++) {
								this.world.grid[i][j].explode(this.player)
							}
						}
				}

				if(event.clientX > 684 && event.clientX < 714 &&
					event.clientY > 564 && event.clientY < 600 &&
					this.player.items.bigExplosive > 0) {
						this.player.items.bigExplosive = this.player.items.bigExplosive-1
						this.sounds.bigExplosion.play()
						for(let i = this.player.x-5; i <= this.player.x+5; i++) {
							for(let j = this.player.y-5; j <= this.player.y+5; j++) {
								this.world.grid[i][j].explode(this.player)
							}
						}
				}

				if(event.clientX > 732 && event.clientX < 768 &&
					event.clientY > 564 && event.clientY < 600 &&
					this.player.items.fuelTank > 0) {
						this.player.fuel = this.player.maxFuel
						this.player.items.fuelTank = this.player.items.fuelTank-1
						this.sounds.fuel.play()
				}

				if(event.clientX > 781 && event.clientX < 817 &&
					event.clientY > 564 && event.clientY < 600 &&
					this.player.items.teleporter > 0) {
						this.player.x = 600
						this.player.y = 600
						this.player.items.teleporter = this.player.items.teleporter-1
						this.sounds.teleport.play()
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
				this.sounds.ship.play()
			}
		} else {
			this.sounds.ship.pause()
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
					this.sounds.ship.currentTime = 0
					this.sounds.song.currentTime = 0
					this.sounds.ship.play()
					this.sounds.song.play()
				} else {
					this.mute = true
					this.sounds.ship.pause()
					this.sounds.song.pause()
				}
				break

			case 'p':
				this.player.maxOut()
				break

			default:
		}
	}
}
