export default class Player {
  constructor() {
    this.x = 150;
    this.y = 150;

    this.fuel = 100
    this.maxFuel = 100
    this.idleFuelUsage = 500
    this.fuelCounter = 0

	  this.money = 0;

    this.drillStrength = 10

    this.health = 100

    this.maxStorage = 10
	  this.usedStorage=0
    this.inventory = {
      wood:0,
      iron:0,
      bronze:0,
      silver:0,
      gold:0,
      platinum:0,
      amethyst:0,
      sapphire:0,
      emerald:0,
      ruby:0,
      diamond:0,
      alexandrite:0
    }

    this.handleKeyDown = this.handleKeyDown.bind(this)
    this.lastMove = ''
    window.addEventListener('keydown', this.handleKeyDown)
  }

	update(updateInfo) {
		if(updateInfo.type==='trade'){
			this.money+=updateInfo.income;
			this.inventory.wood=0;
			this.inventory.iron=0;
      this.inventory.bronze=0
      this.inventory.silver=0
      this.inventory.gold=0
      this.inventory.platinum=0
      this.inventory.amethyst=0
      this.inventory.sapphire=0
      this.inventory.emerald=0
      this.inventory.ruby=0
      this.inventory.diamond=0
      this.inventory.alexandrite=0
			this.usedStorage=0;
		}
    else if(updateInfo.type === 'fuel') {
      this.fuel += updateInfo.amount
      this.money -= updateInfo.amount*2
    }
    else if(updateInfo.type === 'repair') {
      this.health += updateInfo.amount
      this.money -= updateInfo.amount*10
    }
    else if(updateInfo.type === 'rock') {
      if(this.fuel > 0) this.fuel--
    } else if(updateInfo.type === 'damage') {
      if(this.health > 0){
        this.health -= updateInfo.amount
      }
      if(this.health < 0) this.health = 0
      switch(this.lastMove) {
        case 'up':
          this.y+=1
          break

        case 'down':
          this.y-=1
          break

        case 'left':
          this.x+=1
          break

        case 'right':
          this.x-=1
          break

        default:
      }
    }
		else if (updateInfo.type!=='empty' && updateInfo.type !== 'rock'){
      if(updateInfo.type === 'wood-wood') if(this.fuel > 0) this.fuel--
      else {
        if(this.fuel > 1) this.fuel-=2
        else if(this.fuel > 0) this.fuel--
      }

			if(this.usedStorage < this.maxStorage) {
        this.inventory[updateInfo.type.split('-')[1]]+=1;
			  this.usedStorage+=1;
      }
		}

    this.fuelCounter++
    if(this.fuelCounter >= this.idleFuelUsage) {
      this.fuelCounter = 0
      if(this.fuel > 0) this.fuel--
    }

    if(this.fuel <= 0) this.health = 0
	}

  render(ctx) {
    ctx.save()
    ctx.fillStyle = 'black'
    ctx.fillRect(293, 293, 15, 15)

    ctx.restore()
  }

  getInfo(){
	  return {
      x: this.x,
      y: this.y,
      fuel:this.fuel,
      maxFuel:this.maxFuel,
      drillStrength:this.drillStrength,
      health:this.health,
      inventory:this.inventory,
      money:this.money,
      usedStorage:this.usedStorage,
      maxStorage:this.maxStorage
    };
  }

  getPosition(){
	  return {x:this.x,y:this.y}
  }

  handleKeyDown(event) {
    event.preventDefault()
    if(this.health <= 0) return

    switch(event.key) {
      case 'a':
      case 'ArrowLeft':
        if(this.x > 7) this.x-=1
        if(this.fuel > 0) this.fuel--
        this.lastMove = 'left'
        break
      case 'd':
      case 'ArrowRight':
        if(this.x < 291) this.x+=1
        if(this.fuel > 0) this.fuel--
        this.lastMove = 'right'
        break
      case 'w':
      case 'ArrowUp':
        if(this.y > 7) this.y-=1
        if(this.fuel > 0) this.fuel--
        this.lastMove = 'up'
        break
      case 's':
      case 'ArrowDown':
        if(this.y < 291) this.y+=1
        if(this.fuel > 0) this.fuel--
        this.lastMove = 'down'
        break

      case 'e':
        //Usable item
        break
      default:
    }
  }
}
