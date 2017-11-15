export default class Info {
  constructor(player) {
    this.player = player
  }

  update() {
  }

  render(ctx) {
    ctx.font = '15px Verdana'
    ctx.fillStyle = '#000080'
    ctx.fillRect(0,0,200,600)

    ctx.fillStyle = 'white'
    ctx.fillText('Health: ' + this.player.health, 10, 25)
    ctx.fillRect(10, 35, 180, 25)
    ctx.fillStyle = 'red'
    ctx.fillRect(10, 35, (this.player.health*180)/100, 25)

    ctx.fillStyle = 'white'
    ctx.fillText('Fuel: ' + this.player.fuel, 10, 80)
    ctx.fillRect(10, 90, 180, 25)
    ctx.fillStyle = '#B57E1D'
    ctx.fillRect(10, 90, (this.player.fuel*180)/100, 25)

    ctx.fillStyle = 'white'
    ctx.fillText('Drill Strength: ' + this.player.drillStrength, 10, 135)

    ctx.fillText('Max Storage: ' + this.player.maxStorage, 10, 160)
    var y = 170
    var x = 10
    for(var i = 0; i < this.player.maxStorage; i++) {
      if(x == 190) {
        y += 60
        x = 10
      }
      ctx.fillRect(x, y, 50, 50)
      x+=60
    }
  }
}
