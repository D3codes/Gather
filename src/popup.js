export default class Popup {
  constructor() {
    this.state = 'PLAY'
  }

  update(state, playerInfo) {
    this.state = state

    switch(playerInfo.drillStrength) {
      case 10:
        this.drillUpgrade = 25
        this.drillUpgradeCost = 500
        break
      case 25:
        this.drillUpgrade = 50
        this.drillUpgradeCost = 1000
        break
      case 50:
        this.drillUpgrade = 100
        this.drillUpgradeCost = 5000
        break
      default:
        this.drillUpgrade = undefined
        this.drillUpgradeCost = undefined
    }

    switch(playerInfo.maxFuel) {
      case 100:
        this.fuelUpgrade = 150
        this.fuelUpgradeCost = 250
        break
      case 150:
        this.fuelUpgrade = 250
        this.fuelUpgradeCost = 1000
        break
      case 250:
        this.fuelUpgrade = 500
        this.fuelUpgradeCost = 10000
        break
      default:
        this.fuelUpgrade = undefined
        this.fuelUpgradeCost = undefined
    }

    switch(playerInfo.maxStorage) {
      case 10:
        this.storageUpgrade = 25
        this.storageUpgradeCost = 500
        break
      case 25:
        this.storageUpgrade = 50
        this.storageUpgradeCost = 2000
        break
      case 50:
        this.storageUpgrade = 100
        this.storageUpgradeCost = 5000
        break
      default:
        this.storageUpgrade = undefined
        this.storageUpgradeCost = undefined
    }
  }

  render(ctx) {
    if(this.state === 'GAME OVER') {
			ctx.fillStyle = 'white'
			ctx.fillRect(100, 150, 400, 300)

			ctx.font = '20px Verdana'
			ctx.fillStyle = 'red'
			ctx.fillText('GAME OVER', 240, 200)

      ctx.fillStyle = 'red'
			ctx.fillRect(250, 360, 100, 25)
			ctx.fillStyle = 'white'
			ctx.font = '20px Verdana'
			ctx.fillText('Menu', 272, 380)

			ctx.fillStyle = 'red'
			ctx.fillRect(250, 400, 100, 25)
			ctx.fillStyle = 'white'
			ctx.font = '20px Verdana'
			ctx.fillText('Restart', 262, 420)
		} else if (this.state === 'UPGRADE') {

      ctx.fillStyle = 'white'
      ctx.fillRect(100, 150, 400, 300)

      ctx.font = '20px Verdana'
      ctx.fillStyle = 'red'
      ctx.fillText('UPGRADE', 258, 200)

      //Fuel Tank Upgrade
      if(this.fuelUpgrade) {
        ctx.fillStyle = 'red'
        ctx.fillRect(380, 260, 100, 25)
        ctx.fillStyle = 'white'
        ctx.font = '20px Verdana'
        ctx.fillText('Buy', 410, 280)
        ctx.fillStyle = 'black'
        ctx.font = '12px Verdana'
        ctx.fillText('Upgrade Fuel Tank to ' + this.fuelUpgrade + ' for $' + this.fuelUpgradeCost, 110, 280)
      }
      else {
        ctx.fillStyle = 'black'
        ctx.font = '12px Verdana'
        ctx.fillText('Fuel Tank upgraded to maximum capacity', 180, 280)
      }

      //Drill Strength Upgrade
      if(this.drillUpgrade) {
        ctx.fillStyle = 'red'
        ctx.fillRect(380, 330, 100, 25)
        ctx.fillStyle = 'white'
        ctx.font = '20px Verdana'
        ctx.fillText('Buy', 410, 350)
        ctx.fillStyle = 'black'
        ctx.font = '12px Verdana'
        ctx.fillText('Upgrade Drill Strength to ' + this.drillUpgrade + ' for $' + this.drillUpgradeCost, 110, 350)
      } else {
        ctx.fillStyle = 'black'
        ctx.font = '12px Verdana'
        ctx.fillText('Drill upgraded to maximum strength', 180, 350)
      }

      //Storage Upgrade
      if(this.storageUpgrade) {
        ctx.fillStyle = 'red'
        ctx.fillRect(380, 400, 100, 25)
        ctx.fillStyle = 'white'
        ctx.font = '20px Verdana'
        ctx.fillText('Buy', 410, 420)
        ctx.fillStyle = 'black'
        ctx.font = '12px Verdana'
        ctx.fillText('Upgrade Inventory to ' + this.storageUpgrade + ' for $' + this.storageUpgradeCost, 110, 420)
      } else {
        ctx.fillStyle = 'black'
        ctx.font = '12px Verdana'
        ctx.fillText('Inventory upgraded to maximum capacity', 180, 420)
      }

      //Close
      ctx.fillStyle = 'red'
      ctx.fillRect(110, 160, 25, 25)
      ctx.fillStyle = 'white'
      ctx.font = '20px Verdana'
      ctx.fillText('X', 115, 180)

    } else if (this.state === 'START') {
      ctx.fillStyle = 'white'
			ctx.fillRect(100, 150, 400, 300)

			ctx.font = '20px Verdana'
			ctx.fillStyle = 'red'
			ctx.fillText('GATHER', 258, 200)

			ctx.fillStyle = 'red'
			ctx.fillRect(250, 400, 100, 25)
			ctx.fillStyle = 'white'
			ctx.font = '20px Verdana'
			ctx.fillText('Start', 273, 420)
    }
  }
}
