export default class Popup {
  constructor() {
    this.state = 'PLAY'
  }

  update(state, playerInfo) {
    this.state = state

    switch(playerInfo.drillStrength) {
      case 10:
        this.drillUpgrade = 25
        this.drillUpgradeCost = 2000
        break
      case 25:
        this.drillUpgrade = 50
        this.drillUpgradeCost = 5000
        break
      case 50:
        this.drillUpgrade = 100
        this.drillUpgradeCost = 20000
        break
      default:
        this.drillUpgrade = undefined
        this.drillUpgradeCost = undefined
    }

    switch(playerInfo.maxFuel) {
      case 100:
        this.fuelUpgrade = 300
        this.fuelUpgradeCost = 1500
        break
      case 300:
        this.fuelUpgrade = 750
        this.fuelUpgradeCost = 3500
        break
      case 750:
        this.fuelUpgrade = 2000
        this.fuelUpgradeCost = 10000
        break
      default:
        this.fuelUpgrade = undefined
        this.fuelUpgradeCost = undefined
    }

    switch(playerInfo.maxStorage) {
      case 10:
        this.storageUpgrade = 30
        this.storageUpgradeCost = 1500
        break
      case 30:
        this.storageUpgrade = 60
        this.storageUpgradeCost = 2500
        break
      case 60:
        this.storageUpgrade = 100
        this.storageUpgradeCost = 10000
        break
      default:
        this.storageUpgrade = undefined
        this.storageUpgradeCost = undefined
    }

    switch(playerInfo.hullStrength) {
      case 5:
        this.hullUpgrade = 10
        this.hullUpgradeCost = 2000
        break
      case 10:
        this.hullUpgrade = 25
        this.hullUpgradeCost = 5000
        break
      case 25:
        this.hullUpgrade = 50
        this.hullUpgradeCost = 10000
        break
      default:
        this.hullUpgrade = undefined
        this.hullUpgradeCost = undefined
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
        ctx.fillRect(380, 250, 100, 25)
        ctx.fillStyle = 'white'
        ctx.font = '20px Verdana'
        ctx.fillText('Buy', 410, 270)
        ctx.fillStyle = 'black'
        ctx.font = '12px Verdana'
        ctx.fillText('Upgrade Fuel Tank to ' + this.fuelUpgrade + ' for $' + this.fuelUpgradeCost, 110, 270)
      }
      else {
        ctx.fillStyle = 'black'
        ctx.font = '12px Verdana'
        ctx.fillText('Fuel Tank upgraded to maximum capacity', 180, 270)
      }

      //Hull Strength Upgrade
      if(this.hullUpgrade) {
        var hull = 1
        switch(this.hullUpgrade) {
          case 10:
            hull = 2
            break
          case 25:
            hull = 3
            break
          case 50:
            hull = 4
            break
          default:
            hull = 1
        }
        ctx.fillStyle = 'red'
        ctx.fillRect(380, 300, 100, 25)
        ctx.fillStyle = 'white'
        ctx.font = '20px Verdana'
        ctx.fillText('Buy', 410, 320)
        ctx.fillStyle = 'black'
        ctx.font = '12px Verdana'
        ctx.fillText('Upgrade Hull to Level ' + hull + ' for $' + this.hullUpgradeCost, 110, 320)
      } else {
        ctx.fillStyle = 'black'
        ctx.font = '12px Verdana'
        ctx.fillText('Hull upgraded to maximum strength', 180, 320)
      }

      //Drill Strength Upgrade
      if(this.drillUpgrade) {
        var drill = 1
        switch(this.drillUpgrade) {
          case 25:
            drill = 2
            break
          case 50:
            drill = 3
            break
          case 100:
            drill = 4
            break
          default:
            drill = 1
        }
        ctx.fillStyle = 'red'
        ctx.fillRect(380, 350, 100, 25)
        ctx.fillStyle = 'white'
        ctx.font = '20px Verdana'
        ctx.fillText('Buy', 410, 370)
        ctx.fillStyle = 'black'
        ctx.font = '12px Verdana'
        ctx.fillText('Upgrade Drill to Level ' + drill + ' for $' + this.drillUpgradeCost, 110, 370)
      } else {
        ctx.fillStyle = 'black'
        ctx.font = '12px Verdana'
        ctx.fillText('Drill upgraded to maximum strength', 180, 370)
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
    } else if (this.state === 'PAUSE') {
      ctx.fillStyle = 'white'
			ctx.fillRect(100, 150, 400, 300)

			ctx.font = '20px Verdana'
			ctx.fillStyle = 'red'
			ctx.fillText('PAUSE', 267, 200)

      ctx.fillStyle = 'red'
			ctx.fillRect(250, 360, 100, 25)
			ctx.fillStyle = 'white'
			ctx.font = '20px Verdana'
			ctx.fillText('Menu', 272, 380)

			ctx.fillStyle = 'red'
			ctx.fillRect(250, 400, 100, 25)
			ctx.fillStyle = 'white'
			ctx.font = '20px Verdana'
			ctx.fillText('Resume', 260, 420)
    }
  }
}
