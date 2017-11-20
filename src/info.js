export default class Info {
  constructor() {

  }

  update() {

  }

  render(ctx, player) {
    ctx.font = '15px Verdana'
    ctx.fillStyle = '#000080'
    ctx.fillRect(0,0,200,600)

	ctx.fillStyle = 'white'
    ctx.fillText('Money: $' + player.money, 10, 25)

    ctx.fillStyle = 'white'
    ctx.fillText('Health: ' + player.health, 10, 45)
    ctx.fillRect(10, 55, 180, 25)
    ctx.fillStyle = 'red'
    ctx.fillRect(10, 55, (player.health*180)/100, 25)

    ctx.fillStyle = 'white'
    ctx.fillText('Fuel: ' + player.fuel + '/' + player.maxFuel, 10, 100)
    ctx.fillRect(10, 110, 180, 25)
    ctx.fillStyle = '#B57E1D'
    ctx.fillRect(10, 110, (player.fuel*180)/player.maxFuel, 25)

    ctx.fillStyle = 'white'
    ctx.fillText('Drill Strength: ' + player.drillStrength, 10, 155)

    ctx.fillText('Inventory: ' + player.usedStorage + '/' + player.maxStorage, 10, 180)
    var y = 190
    var x = 10
    for(var i = 0; i < player.maxStorage; i++) {
      if(x == 190) {
        y += 60
        x = 10
      }
      ctx.fillRect(x, y, 50, 50)
      x+=60
    }

    ctx.fillText('Position: ' + player.x + ', ' + player.y, 10, 590)
  }
}
