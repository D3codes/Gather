export default class Player {
  constructor() {
    this.x = 0
    this.y = 0

    this.fuel = 100
    this.maxFuel = 100
    this.drillStrength = 10
    this.health = 100
    this.maxStorage = 10

    this.loopCounter = 500

    this.handleKeyDown = this.handleKeyDown.bind(this)
    window.addEventListener('keydown', this.handleKeyDown)
  }

  update() {
    this.loopCounter--
    if(this.loopCounter <= 0) {
      this.fuel--
      this.loopCounter = 500
    }
    if(this.fuel < 0) this.health = 0
  }

  render(ctx) {
    ctx.save()
    ctx.fillStyle = 'black'
    ctx.fillRect(this.x+2, this.y+2, 15, 15)

    ctx.restore()
  }

  handleKeyDown(event) {
    event.preventDefault()
    switch(event.key) {
      case 'a':
      case 'ArrowLeft':
        if(this.x > 0) this.x-=40
        break
      case 'd':
      case 'ArrowRight':
        if(this.x < 560) this.x+=40
        break
      case 'w':
      case 'ArrowUp':
        if(this.y > 0) this.y-=40
        break
      case 's':
      case 'ArrowDown':
        if(this.y < 560) this.y+=40
        break

      case 'e':
        //Usable item
        break
      default:
    }
  }
}
