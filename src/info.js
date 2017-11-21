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

    ctx.fillStyle = 'white'
    ctx.font = '10px Verdana'
    ctx.fillText('Wood', 20, 205)
    ctx.fillStyle = 'green'
    ctx.fillRect(10, 210, 50, 50)
    ctx.fillStyle = 'white'
    ctx.font = '15px Verdana'
    ctx.strokeStyle = 'black'
    ctx.fillText(player.inventory.wood, 10+25, 210+45)

    ctx.fillStyle = 'white'
    ctx.font = '10px Verdana'
    ctx.fillText('Iron', 90, 205)
    ctx.fillStyle = '#8B6F48'
    ctx.fillRect(75, 210, 50, 50)
    ctx.fillStyle = '#414141'
    ctx.strokeStyle = '#414141'
    ctx.beginPath();
    ctx.arc(75+25,210+25,10,0,2*Math.PI);
    ctx.fill();
    ctx.stroke();
    ctx.fillStyle = 'white'
    ctx.font = '15px Verdana'
    ctx.strokeStyle = 'black'
    ctx.fillText(player.inventory.iron, 75+25, 210+45)

    ctx.fillStyle = 'white'
    ctx.font = '10px Verdana'
    ctx.fillText('Bronze', 148, 205)
    ctx.fillStyle = '#8B6F48'
    ctx.fillRect(140, 210, 50, 50)
    ctx.fillStyle = '#A57025'
    ctx.strokeStyle = '#A57025'
    ctx.beginPath();
    ctx.arc(140+25,210+25,10,0,2*Math.PI);
    ctx.fill();
    ctx.stroke();
    ctx.fillStyle = 'white'
    ctx.font = '15px Verdana'
    ctx.strokeStyle = 'black'
    ctx.fillText(player.inventory.bronze, 140+25, 210+45)

    ctx.fillStyle = 'white'
    ctx.font = '10px Verdana'
    ctx.fillText('Silver', 20, 285)
    ctx.fillStyle = '#8B6F48'
    ctx.fillRect(10, 290, 50, 50)
    ctx.fillStyle = '#A4A29F'
    ctx.strokeStyle = '#A4A29F'
    ctx.beginPath();
    ctx.arc(10+25,290+25,10,0,2*Math.PI);
    ctx.fill();
    ctx.stroke();
    ctx.fillStyle = 'white'
    ctx.font = '15px Verdana'
    ctx.strokeStyle = 'black'
    ctx.fillText(player.inventory.silver, 10+25, 290+45)

    ctx.fillStyle = 'white'
    ctx.font = '10px Verdana'
    ctx.fillText('Gold', 90, 285)
    ctx.fillStyle = '#8B6F48'
    ctx.fillRect(75, 290, 50, 50)
    ctx.fillStyle = '#AA9634'
    ctx.strokeStyle = '#AA9634'
    ctx.beginPath();
    ctx.arc(75+25,290+25,10,0,2*Math.PI);
    ctx.fill();
    ctx.stroke();
    ctx.fillStyle = 'white'
    ctx.font = '15px Verdana'
    ctx.strokeStyle = 'black'
    ctx.fillText(player.inventory.gold, 75+25, 290+45)

    ctx.fillStyle = 'white'
    ctx.font = '10px Verdana'
    ctx.fillText('Platinum', 143, 285)
    ctx.fillStyle = '#8B6F48'
    ctx.fillRect(140, 290, 50, 50)
    ctx.fillStyle = '#DEDEDE'
    ctx.strokeStyle = '#DEDEDE'
    ctx.beginPath();
    ctx.arc(140+25,290+25,10,0,2*Math.PI);
    ctx.fill();
    ctx.stroke();
    ctx.fillStyle = 'white'
    ctx.font = '15px Verdana'
    ctx.strokeStyle = 'black'
    ctx.fillText(player.inventory.platinum, 140+25, 290+45)

    ctx.fillStyle = 'white'
    ctx.font = '10px Verdana'
    ctx.fillText('Amethyst', 12, 365)
    ctx.fillStyle = '#8B6F48'
    ctx.fillRect(10, 370, 50, 50)
    ctx.fillStyle = '#AB6FCD'
    ctx.strokeStyle = '#AB6FCD'
    ctx.beginPath();
    ctx.arc(10+25,370+25,10,0,2*Math.PI);
    ctx.fill();
    ctx.stroke();
    ctx.fillStyle = 'white'
    ctx.font = '15px Verdana'
    ctx.strokeStyle = 'black'
    ctx.fillText(player.inventory.amethyst, 10+25, 370+45)

    ctx.fillStyle = 'white'
    ctx.font = '10px Verdana'
    ctx.fillText('Sapphire', 77, 365)
    ctx.fillStyle = '#8B6F48'
    ctx.fillRect(75, 370, 50, 50)
    ctx.fillStyle = '#0A5CB4'
    ctx.strokeStyle = '#0A5CB4'
    ctx.beginPath();
    ctx.arc(75+25,370+25,10,0,2*Math.PI);
    ctx.fill();
    ctx.stroke();
    ctx.fillStyle = 'white'
    ctx.font = '15px Verdana'
    ctx.strokeStyle = 'black'
    ctx.fillText(player.inventory.sapphire, 75+25, 370+45)

    ctx.fillStyle = 'white'
    ctx.font = '10px Verdana'
    ctx.fillText('Emerald', 145, 365)
    ctx.fillStyle = '#8B6F48'
    ctx.fillRect(140, 370, 50, 50)
    ctx.fillStyle = '#44B26B'
    ctx.strokeStyle = '#44B26B'
    ctx.beginPath();
    ctx.arc(140+25,370+25,10,0,2*Math.PI);
    ctx.fill();
    ctx.stroke();
    ctx.fillStyle = 'white'
    ctx.font = '15px Verdana'
    ctx.strokeStyle = 'black'
    ctx.fillText(player.inventory.emerald, 140+25, 370+45)

    ctx.fillStyle = 'white'
    ctx.font = '10px Verdana'
    ctx.fillText('Ruby', 21, 445)
    ctx.fillStyle = '#8B6F48'
    ctx.fillRect(10, 450, 50, 50)
    ctx.fillStyle = '#E80000'
    ctx.strokeStyle = '#E80000'
    ctx.beginPath();
    ctx.arc(10+25,450+25,10,0,2*Math.PI);
    ctx.fill();
    ctx.stroke();
    ctx.fillStyle = 'white'
    ctx.font = '15px Verdana'
    ctx.strokeStyle = 'black'
    ctx.fillText(player.inventory.ruby, 10+25, 450+45)

    ctx.fillStyle = 'white'
    ctx.font = '10px Verdana'
    ctx.fillText('Diamond', 77, 445)
    ctx.fillStyle = '#8B6F48'
    ctx.fillRect(75, 450, 50, 50)
    ctx.fillStyle = '#9EEFFF'
    ctx.strokeStyle = '#9EEFFF'
    ctx.beginPath();
    ctx.arc(75+25,450+25,10,0,2*Math.PI);
    ctx.fill();
    ctx.stroke();
    ctx.fillStyle = 'white'
    ctx.font = '15px Verdana'
    ctx.strokeStyle = 'black'
    ctx.fillText(player.inventory.diamond, 75+25, 450+45)

    ctx.fillStyle = 'white'
    ctx.font = '10px Verdana'
    ctx.fillText('Alexandrite', 138, 445)
    ctx.fillStyle = '#8B6F48'
    ctx.fillRect(140, 450, 50, 50)
    ctx.fillStyle = '#281172'
    ctx.strokeStyle = '#281172'
    ctx.beginPath();
    ctx.arc(140+25,450+25,10,0,2*Math.PI);
    ctx.fill();
    ctx.stroke();
    ctx.fillStyle = 'white'
    ctx.font = '15px Verdana'
    ctx.strokeStyle = 'black'
    ctx.fillText(player.inventory.alexandrite, 140+25, 450+45)

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
