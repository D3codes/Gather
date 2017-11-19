export default class Player {
  constructor() {
    this.x = 150;
    this.y = 150;

    this.fuel = 100
    this.maxFuel = 100
	this.money=0;

    this.drillStrength = 10

    this.health = 100

    this.maxStorage = 10
	this.usedStorage=0
    this.inventory = {wood:0, ore:0}


    this.handleKeyDown = this.handleKeyDown.bind(this)
    window.addEventListener('keydown', this.handleKeyDown)
  }

	update(updateInfo) {
		if(updateInfo.type==='trade'){
			this.money+=updateInfo.income;
			this.inventory.wood=0;
			this.inventory.ore=0;
			this.usedStorage=0;
		}
		else if (updateInfo.type!=='empty' && updateInfo.type!=='rock'){
			this.inventory[updateInfo.type]+=1;
			this.usedStorage+=1;
		}
	}

  render(ctx) {
    ctx.save()
    ctx.fillStyle = 'black'
    ctx.fillRect(293, 293, 15, 15)

    ctx.restore()
  }
  
  getInfo(){
	  return {fuel:this.fuel, maxFuel:this.maxFuel, drillStrength:this.drillStrength, health:this.health, inventory:this.inventory, money:this.money, usedStorage:this.usedStorage, maxStorage:this.maxStorage};
  }

  getPosition(){
	  return {x:this.x,y:this.y}
  }

  handleKeyDown(event) {
    event.preventDefault()
    switch(event.key) {
      case 'a':
      case 'ArrowLeft':
        if(this.x > 7) this.x-=1
        break
      case 'd':
      case 'ArrowRight':
        if(this.x < 291) this.x+=1
        break
      case 'w':
      case 'ArrowUp':
        if(this.y > 7) this.y-=1
        break
      case 's':
      case 'ArrowDown':
        if(this.y < 291) this.y+=1
        break

      case 'e':
        //Usable item
        break
      default:
    }
  }
}
