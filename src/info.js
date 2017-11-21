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
      if(x === 190) {
        y += 60
        x = 10
      }
      ctx.fillRect(x, y, 50, 50)
      x+=60
    }
    let slot = 0
    for(var i = 0; i < player.inventory.wood; i++) {
        var coords = this.getXYForSlot(slot)
        ctx.fillStyle = 'green'
        ctx.fillRect(coords.x+10, coords.y+10, 30, 30)
        slot++
    }
    for(var i = 0; i < player.inventory.iron; i++) {
        coords = this.getXYForSlot(slot)
        ctx.fillStyle = '#8B6F48'
        ctx.fillRect(coords.x+10, coords.y+10, 30, 30)
        ctx.fillStyle = '#414141'
        ctx.strokeStyle = '#414141'
        ctx.beginPath();
				ctx.arc(coords.x+25,coords.y+25,10,0,2*Math.PI);
				ctx.fill();
				ctx.stroke();
        slot++
    }
    for(var i = 0; i < player.inventory.bronze; i++) {
        coords = this.getXYForSlot(slot)
        ctx.fillStyle = '#8B6F48'
        ctx.fillRect(coords.x+10, coords.y+10, 30, 30)
        ctx.fillStyle = '#A57025'
        ctx.strokeStyle = '#A57025'
        ctx.beginPath();
				ctx.arc(coords.x+25,coords.y+25,10,0,2*Math.PI);
				ctx.fill();
				ctx.stroke();
        slot++
    }
    for(var i = 0; i < player.inventory.silver; i++) {
        coords = this.getXYForSlot(slot)
        ctx.fillStyle = '#8B6F48'
        ctx.fillRect(coords.x+10, coords.y+10, 30, 30)
        ctx.fillStyle = '#A4A29F'
        ctx.strokeStyle = '#A4A29F'
        ctx.beginPath();
				ctx.arc(coords.x+25,coords.y+25,10,0,2*Math.PI);
				ctx.fill();
				ctx.stroke();
        slot++
    }
    for(var i = 0; i < player.inventory.gold; i++) {
        coords = this.getXYForSlot(slot)
        ctx.fillStyle = '#8B6F48'
        ctx.fillRect(coords.x+10, coords.y+10, 30, 30)
        ctx.fillStyle = '#AA9634'
        ctx.strokeStyle = '#AA9634'
        ctx.beginPath();
				ctx.arc(coords.x+25,coords.y+25,10,0,2*Math.PI);
				ctx.fill();
				ctx.stroke();
        slot++
    }
    for(var i = 0; i < player.inventory.platinum; i++) {
        coords = this.getXYForSlot(slot)
        ctx.fillStyle = '#8B6F48'
        ctx.fillRect(coords.x+10, coords.y+10, 30, 30)
        ctx.fillStyle = '#DEDEDE'
        ctx.strokeStyle = '#DEDEDE'
        ctx.beginPath();
				ctx.arc(coords.x+25,coords.y+25,10,0,2*Math.PI);
				ctx.fill();
				ctx.stroke();
        slot++
    }
    for(var i = 0; i < player.inventory.amethyst; i++) {
        coords = this.getXYForSlot(slot)
        ctx.fillStyle = '#8B6F48'
        ctx.fillRect(coords.x+10, coords.y+10, 30, 30)
        ctx.fillStyle = '#AB6FCD'
        ctx.strokeStyle = '#AB6FCD'
        ctx.beginPath();
				ctx.arc(coords.x+25,coords.y+25,10,0,2*Math.PI);
				ctx.fill();
				ctx.stroke();
        slot++
    }
    for(var i = 0; i < player.inventory.sapphire; i++) {
        coords = this.getXYForSlot(slot)
        ctx.fillStyle = '#8B6F48'
        ctx.fillRect(coords.x+10, coords.y+10, 30, 30)
        ctx.fillStyle = '#0A5CB4'
        ctx.strokeStyle = '#0A5CB4'
        ctx.beginPath();
				ctx.arc(coords.x+25,coords.y+25,10,0,2*Math.PI);
				ctx.fill();
				ctx.stroke();
        slot++
    }
    for(var i = 0; i < player.inventory.emerald; i++) {
        coords = this.getXYForSlot(slot)
        ctx.fillStyle = '#8B6F48'
        ctx.fillRect(coords.x+10, coords.y+10, 30, 30)
        ctx.fillStyle = '#44B26B'
        ctx.strokeStyle = '#44B26B'
        ctx.beginPath();
				ctx.arc(coords.x+25,coords.y+25,10,0,2*Math.PI);
				ctx.fill();
				ctx.stroke();
        slot++
    }
    for(var i = 0; i < player.inventory.ruby; i++) {
        coords = this.getXYForSlot(slot)
        ctx.fillStyle = '#8B6F48'
        ctx.fillRect(coords.x+10, coords.y+10, 30, 30)
        ctx.fillStyle = '#E80000'
        ctx.strokeStyle = '#E80000'
        ctx.beginPath();
				ctx.arc(coords.x+25,coords.y+25,10,0,2*Math.PI);
				ctx.fill();
				ctx.stroke();
        slot++
    }
    for(var i = 0; i < player.inventory.diamond; i++) {
        coords = this.getXYForSlot(slot)
        ctx.fillStyle = '#8B6F48'
        ctx.fillRect(coords.x+10, coords.y+10, 30, 30)
        ctx.fillStyle = '#9EEFFF'
        ctx.strokeStyle = '#9EEFFF'
        ctx.beginPath();
				ctx.arc(coords.x+25,coords.y+25,10,0,2*Math.PI);
				ctx.fill();
				ctx.stroke();
        slot++
    }
    for(var i = 0; i < player.inventory.alexandrite; i++) {
        coords = this.getXYForSlot(slot)
        ctx.fillStyle = '#8B6F48'
        ctx.fillRect(coords.x+10, coords.y+10, 30, 30)
        ctx.fillStyle = '#281172'
        ctx.strokeStyle = '#281172'
        ctx.beginPath();
				ctx.arc(coords.x+25,coords.y+25,10,0,2*Math.PI);
				ctx.fill();
				ctx.stroke();
        slot++
    }

    ctx.fillStyle = 'white'
    ctx.fillText('Position: ' + player.x + ', ' + player.y, 10, 590)
  }

  getXYForSlot(slot) {
    if(Math.floor(slot/3) === 0){
      return {x: slot*60+10, y: 190}
    } else if(Math.floor(slot/3) === 1) {
      return {x: (slot-3)*60+10, y: 250}
    } else if(Math.floor(slot/3) === 2) {
      return {x: (slot-6)*60+10, y: 310}
    } else if(Math.floor(slot/3) === 3) {
      return {x: (slot-9)*60+10, y: 370}
    } else if(Math.floor(slot/3) === 4) {
      return {x: (slot-12)*60+10, y: 430}
    } else {
      return {x: (slot-15)*60+10, y: 490}
    }
  }
}
