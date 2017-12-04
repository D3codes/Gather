export default class Popup {
  constructor(images) {
    this.state = 'PLAY'
    this.images = images
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
        this.fuelUpgradeCost = 2500
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
        this.storageUpgradeCost = 3500
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
			ctx.fillStyle = 'lightgrey'
			ctx.fillRect(100, 150, 400, 300)

			ctx.font = '40px Verdana'
			ctx.fillStyle = 'red'
			ctx.fillText('GAME OVER', 180, 280)

      ctx.fillStyle = 'darkblue'
			ctx.fillRect(250, 360, 100, 25)
			ctx.fillStyle = 'white'
			ctx.font = '20px Verdana'
			ctx.fillText('Menu', 272, 380)

			ctx.fillStyle = 'darkblue'
			ctx.fillRect(250, 400, 100, 25)
			ctx.fillStyle = 'white'
			ctx.font = '20px Verdana'
			ctx.fillText('Restart', 262, 420)
		} else if (this.state === 'UPGRADE') {

      ctx.fillStyle = 'lightgrey'
      ctx.fillRect(100, 150, 400, 300)

      ctx.font = '20px Verdana'
      ctx.fillStyle = 'darkblue'
      ctx.fillText('UPGRADE', 258, 170)

      ctx.font = '20px Verdana'
      ctx.fillStyle = 'darkblue'
      ctx.fillText('Part', 110, 220)
      ctx.fillText('Description', 170, 220)
      ctx.fillText('Tier', 300, 220)
      ctx.fillText('Cost', 360, 220)

      ctx.font = '15px Verdana'
      ctx.fillStyle = 'black'
      ctx.fillText('Fuel', 110, 250)
      ctx.fillText('Tank', 110, 265)
      ctx.fillText('Go Farther', 170, 255)
      if(this.fuelUpgrade) {
        ctx.fillText(this.fuelUpgrade, 300, 255)
        ctx.fillText('$'+this.fuelUpgradeCost, 360, 255)
        ctx.fillStyle = 'darkblue'
        ctx.fillRect(440, 235, 50, 25)
        ctx.fillStyle = 'white'
        ctx.font = '15px Verdana'
        ctx.fillText('BUY', 449, 253)
      } else {
        ctx.fillText('MAX', 300, 255)
        ctx.fillText('N/A', 360, 255)
      }

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
      ctx.font = '15px Verdana'
      ctx.fillStyle = 'black'
      ctx.fillText('Hull', 110, 300)
      ctx.fillText('Less Damage', 170, 300)
      if(this.hullUpgrade) {
        ctx.fillText('LV '+hull, 300, 300)
        ctx.fillText('$'+this.hullUpgradeCost, 360, 300)
        ctx.fillStyle = 'darkblue'
        ctx.fillRect(440, 282, 50, 25)
        ctx.fillStyle = 'white'
        ctx.font = '15px Verdana'
        ctx.fillText('BUY', 449, 300)
      } else {
        ctx.fillText('MAX', 300, 300)
        ctx.fillText('N/A', 360, 300)
      }

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
      ctx.font = '15px Verdana'
      ctx.fillStyle = 'black'
      ctx.fillText('Drill', 110, 340)
      ctx.fillText('Mine More', 170, 340)
      if(this.drillUpgrade) {
        ctx.fillText('LV '+drill, 300, 340)
        ctx.fillText('$'+this.drillUpgradeCost, 360, 340)
        ctx.fillStyle = 'darkblue'
        ctx.fillRect(440, 322, 50, 25)
        ctx.fillStyle = 'white'
        ctx.font = '15px Verdana'
        ctx.fillText('BUY', 449, 340)
      } else {
        ctx.fillText('MAX', 300, 340)
        ctx.fillText('N/A', 360, 340)
      }

      ctx.font = '15px Verdana'
      ctx.fillStyle = 'black'
      ctx.fillText('Cargo', 110, 375)
      ctx.fillText('Carry More', 170, 375)
      if(this.storageUpgrade) {
        ctx.fillText(this.storageUpgrade, 300, 375)
        ctx.fillText('$'+this.storageUpgradeCost, 360, 375)
        ctx.fillStyle = 'darkblue'
        ctx.fillRect(440, 357, 50, 25)
        ctx.fillStyle = 'white'
        ctx.font = '15px Verdana'
        ctx.fillText('BUY', 449, 375)
      } else {
        ctx.fillText('MAX', 300, 375)
        ctx.fillText('N/A', 360, 375)
      }

      ctx.drawImage(this.images.smallExplosion, 110, 400, 40, 40)
      ctx.drawImage(this.images.bigExplosion, 160, 400, 40, 40)
      ctx.drawImage(this.images.fuelTank, 210, 400, 40 ,40)
      ctx.drawImage(this.images.teleporter, 260, 400, 40, 40)

      //Close
      ctx.fillStyle = 'red'
      ctx.fillRect(110, 160, 25, 25)
      ctx.fillStyle = 'white'
      ctx.font = '20px Verdana'
      ctx.fillText('X', 115, 180)

    } else if (this.state === 'START') {
      ctx.fillStyle = 'lightgrey'
			ctx.fillRect(100, 150, 400, 300)

			ctx.font = '20px Verdana'
			ctx.fillStyle = 'darkblue'
			ctx.fillText('GATHER', 258, 170)

      ctx.font = '15px Verdana'
      ctx.fillStyle = 'darkblue'
      ctx.fillText('Instructions:', 110, 195)
      ctx.fillStyle = 'black'
      ctx.fillText('•Collect and sell resources to upgrade your ship', 110, 215)
      ctx.fillText('•Repair and Refuel often to avoid death', 110, 235)

      ctx.font = '15px Verdana'
      ctx.fillStyle = 'darkblue'
      ctx.fillText('Controls:', 110, 255)
      ctx.fillStyle = 'black'
      ctx.fillText('WASD or Arrow Keys to move', 110, 275)

      ctx.font = '15px Verdana'
      ctx.fillStyle = 'darkblue'
      ctx.fillText('Special Tiles:', 110, 295)
      ctx.fillStyle = 'black'
      ctx.drawImage(this.images.trade, 110, 305, 40, 40)
      ctx.fillText('Trade:', 160, 320)
      ctx.fillText('Sell Resources', 160, 340)
      ctx.drawImage(this.images.upgrade, 110, 355, 40, 40)
      ctx.fillText('Shop:', 160, 370)
      ctx.fillText('Buy upgrades', 160, 390)

      ctx.drawImage(this.images.fuel, 285, 305, 40, 40)
      ctx.fillText('Fuel:', 335, 320)
      ctx.fillText('Refuel ship', 335, 340)
      ctx.drawImage(this.images.repair, 285, 355, 40, 40)
      ctx.fillText('Repair:', 335, 370)
      ctx.fillText('Restore health', 335, 390)

			ctx.fillStyle = 'darkblue'
			ctx.fillRect(250, 420, 100, 25)
			ctx.fillStyle = 'white'
			ctx.font = '20px Verdana'
			ctx.fillText('Start', 273, 440)
    } else if (this.state === 'PAUSE') {
      ctx.fillStyle = 'lightgrey'
			ctx.fillRect(100, 150, 400, 300)

			ctx.font = '20px Verdana'
			ctx.fillStyle = 'darkblue'
			ctx.fillText('PAUSE', 267, 170)

      ctx.font = '15px Verdana'
      ctx.fillStyle = 'darkblue'
      ctx.fillText('Instructions:', 110, 195)
      ctx.fillStyle = 'black'
      ctx.fillText('•Collect and sell resources to upgrade your ship', 110, 215)
      ctx.fillText('•Repair and Refuel often to avoid death', 110, 235)

      ctx.font = '15px Verdana'
      ctx.fillStyle = 'darkblue'
      ctx.fillText('Controls:', 110, 255)
      ctx.fillStyle = 'black'
      ctx.fillText('WASD or Arrow Keys to move', 110, 275)

      ctx.font = '15px Verdana'
      ctx.fillStyle = 'darkblue'
      ctx.fillText('Special Tiles:', 110, 295)
      ctx.fillStyle = 'black'
      ctx.drawImage(this.images.trade, 110, 305, 40, 40)
      ctx.fillText('Trade:', 160, 320)
      ctx.fillText('Sell Resources', 160, 340)
      ctx.drawImage(this.images.upgrade, 110, 355, 40, 40)
      ctx.fillText('Shop:', 160, 370)
      ctx.fillText('Buy upgrades', 160, 390)

      ctx.drawImage(this.images.fuel, 285, 305, 40, 40)
      ctx.fillText('Fuel:', 335, 320)
      ctx.fillText('Refuel ship', 335, 340)
      ctx.drawImage(this.images.repair, 285, 355, 40, 40)
      ctx.fillText('Repair:', 335, 370)
      ctx.fillText('Restore health', 335, 390)

      ctx.fillStyle = 'darkblue'
			ctx.fillRect(310, 420, 100, 25)
			ctx.fillStyle = 'white'
			ctx.font = '20px Verdana'
			ctx.fillText('Menu', 330, 440)

			ctx.fillStyle = 'darkblue'
			ctx.fillRect(190, 420, 100, 25)
			ctx.fillStyle = 'white'
			ctx.font = '20px Verdana'
			ctx.fillText('Resume', 200, 440)
    }
  }
}
