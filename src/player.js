export default class Player {
  constructor() {
    this.x = 15;
    this.y = 15;

    this.fuel = 100
    this.drillStrength = 10
    this.health = 100
    this.maxStorage = 10

    this.handleKeyDown = this.handleKeyDown.bind(this)
    window.addEventListener('keydown', this.handleKeyDown)
  }

  update() {
    this.fuel--
    if(this.fuel < 0) this.health = 0
  }

  render(ctx) {
    ctx.save()
    ctx.fillStyle = 'black'
    ctx.fillRect(293, 293, 15, 15)

    ctx.restore()
  }
  
  getPosition(){
	  return {x:this.x,y:this.y}
  }

  handleKeyDown(event) {
    event.preventDefault()
    console.log(event.key)
    switch(event.key) {
      case 'a':
      case 'ArrowLeft':
        if(this.x > 0) this.x-=1
        break
      case 'd':
      case 'ArrowRight':
        if(this.x < 560) this.x+=1
        break
      case 'w':
      case 'ArrowUp':
        if(this.y > 0) this.y-=1
        break
      case 's':
      case 'ArrowDown':
        if(this.y < 560) this.y+=1
        break

      case 'e':
        //Usable item
        break
      default:
    }
  }
}
