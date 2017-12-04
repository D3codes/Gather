export default class Popup {
  constructor(images) {
    this.state = 'PLAY'
    this.images = images
    this.fuelTankPrice = 500
  }

  update(state, playerInfo) {
    this.state = state
    this.fuelTankPrice = (playerInfo.maxFuel*2)*2.5

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
      ctx.fillRect(100, 50, 400, 500)

      ctx.font = '20px Verdana'
      ctx.fillStyle = 'darkblue'
      ctx.fillText('SHOP', 258, 70)

      ctx.font = '20px Verdana'
      ctx.fillStyle = 'darkblue'
      ctx.fillText('Part', 110, 120)
      ctx.fillText('Description', 170, 120)
      ctx.fillText('Tier', 300, 120)
      ctx.fillText('Cost', 360, 120)

      ctx.font = '15px Verdana'
      ctx.fillStyle = 'black'
      ctx.fillText('Fuel', 110, 150)
      ctx.fillText('Tank', 110, 165)
      ctx.fillText('Go Farther', 170, 155)
      if(this.fuelUpgrade) {
        ctx.fillText(this.fuelUpgrade, 300, 155)
        ctx.fillText('$'+this.fuelUpgradeCost, 360, 155)
        ctx.fillStyle = 'darkblue'
        ctx.fillRect(440, 135, 50, 25)
        ctx.fillStyle = 'white'
        ctx.font = '15px Verdana'
        ctx.fillText('BUY', 449, 153)
      } else {
        ctx.fillText('MAX', 300, 155)
        ctx.fillText('N/A', 360, 155)
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
      ctx.fillText('Hull', 110, 200)
      ctx.fillText('Less Damage', 170, 200)
      if(this.hullUpgrade) {
        ctx.fillText('LV '+hull, 300, 200)
        ctx.fillText('$'+this.hullUpgradeCost, 360, 200)
        ctx.fillStyle = 'darkblue'
        ctx.fillRect(440, 182, 50, 25)
        ctx.fillStyle = 'white'
        ctx.font = '15px Verdana'
        ctx.fillText('BUY', 449, 200)
      } else {
        ctx.fillText('MAX', 300, 200)
        ctx.fillText('N/A', 360, 200)
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
      ctx.fillText('Drill', 110, 240)
      ctx.fillText('Mine More', 170, 240)
      if(this.drillUpgrade) {
        ctx.fillText('LV '+drill, 300, 240)
        ctx.fillText('$'+this.drillUpgradeCost, 360, 240)
        ctx.fillStyle = 'darkblue'
        ctx.fillRect(440, 222, 50, 25)
        ctx.fillStyle = 'white'
        ctx.font = '15px Verdana'
        ctx.fillText('BUY', 449, 240)
      } else {
        ctx.fillText('MAX', 300, 240)
        ctx.fillText('N/A', 360, 240)
      }

      ctx.font = '15px Verdana'
      ctx.fillStyle = 'black'
      ctx.fillText('Cargo', 110, 275)
      ctx.fillText('Carry More', 170, 275)
      if(this.storageUpgrade) {
        ctx.fillText(this.storageUpgrade, 300, 275)
        ctx.fillText('$'+this.storageUpgradeCost, 360, 275)
        ctx.fillStyle = 'darkblue'
        ctx.fillRect(440, 257, 50, 25)
        ctx.fillStyle = 'white'
        ctx.font = '15px Verdana'
        ctx.fillText('BUY', 449, 275)
      } else {
        ctx.fillText('MAX', 300, 275)
        ctx.fillText('N/A', 360, 275)
      }

      ctx.font = '20px Verdana'
      ctx.fillStyle = 'darkblue'
      ctx.fillText('Item', 110, 320)
      ctx.fillText('Description', 200, 320)
      ctx.fillText('Cost', 360, 320)

      ctx.drawImage(this.images.smallExplosion, 110, 330, 40, 40)
      ctx.font = '15px Verdana'
      ctx.fillStyle = 'black'
      ctx.fillText('Small Explosion', 200, 360)
      ctx.fillText('$1000', 360, 360)

      ctx.drawImage(this.images.bigExplosion, 110, 390, 40, 40)
      ctx.fillText('Big Explosion', 200, 420)
      ctx.fillText('$3000', 360, 420)

      ctx.drawImage(this.images.fuelTank, 110, 450, 40 ,40)
      ctx.fillText('Refuel', 200, 480)
      ctx.fillText('$'+this.fuelTankPrice, 360, 480)

      ctx.drawImage(this.images.teleporter, 110, 510, 40, 40)
      ctx.fillText('Teleport Home', 200, 540)
      ctx.fillText('$10000', 360, 540)

      ctx.fillStyle = 'darkblue'
      ctx.fillRect(440, 340, 50, 25)
      ctx.fillStyle = 'white'
      ctx.font = '15px Verdana'
      ctx.fillText('BUY', 449, 358)

      ctx.fillStyle = 'darkblue'
      ctx.fillRect(440, 400, 50, 25)
      ctx.fillStyle = 'white'
      ctx.font = '15px Verdana'
      ctx.fillText('BUY', 449, 418)

      ctx.fillStyle = 'darkblue'
      ctx.fillRect(440, 460, 50, 25)
      ctx.fillStyle = 'white'
      ctx.font = '15px Verdana'
      ctx.fillText('BUY', 449, 478)

      ctx.fillStyle = 'darkblue'
      ctx.fillRect(440, 520, 50, 25)
      ctx.fillStyle = 'white'
      ctx.font = '15px Verdana'
      ctx.fillText('BUY', 449, 538)

      //Close
      ctx.fillStyle = 'red'
      ctx.fillRect(110, 60, 25, 25)
      ctx.fillStyle = 'white'
      ctx.font = '20px Verdana'
      ctx.fillText('X', 115, 80)

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
      ctx.fillText('•WASD or Arrow Keys to move', 110, 275)
      ctx.fillText('•Click on items to use them', 110, 295)

      ctx.font = '15px Verdana'
      ctx.fillStyle = 'darkblue'
      ctx.fillText('Special Tiles:', 110, 315)
      ctx.fillStyle = 'black'
      ctx.drawImage(this.images.trade, 110, 325, 40, 40)
      ctx.fillText('Trade:', 160, 340)
      ctx.fillText('Sell Resources', 160, 360)
      ctx.drawImage(this.images.upgrade, 110, 375, 40, 40)
      ctx.fillText('Shop:', 160, 390)
      ctx.fillText('Buy upgrades', 160, 410)

      ctx.drawImage(this.images.fuel, 285, 325, 40, 40)
      ctx.fillText('Fuel:', 335, 340)
      ctx.fillText('Refuel ship', 335, 360)
      ctx.drawImage(this.images.repair, 285, 375, 40, 40)
      ctx.fillText('Repair:', 335, 390)
      ctx.fillText('Restore health', 335, 410)

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
      ctx.fillText('•WASD or Arrow Keys to move', 110, 275)
      ctx.fillText('•Click on items to use them', 110, 295)

      ctx.font = '15px Verdana'
      ctx.fillStyle = 'darkblue'
      ctx.fillText('Special Tiles:', 110, 315)
      ctx.fillStyle = 'black'
      ctx.drawImage(this.images.trade, 110, 325, 40, 40)
      ctx.fillText('Trade:', 160, 340)
      ctx.fillText('Sell Resources', 160, 360)
      ctx.drawImage(this.images.upgrade, 110, 375, 40, 40)
      ctx.fillText('Shop:', 160, 390)
      ctx.fillText('Buy upgrades', 160, 410)

      ctx.drawImage(this.images.fuel, 285, 325, 40, 40)
      ctx.fillText('Fuel:', 335, 340)
      ctx.fillText('Refuel ship', 335, 360)
      ctx.drawImage(this.images.repair, 285, 375, 40, 40)
      ctx.fillText('Repair:', 335, 390)
      ctx.fillText('Restore health', 335, 410)

      ctx.fillStyle = 'darkblue'
      ctx.fillRect(250, 420, 100, 25)
      ctx.fillStyle = 'white'
      ctx.font = '20px Verdana'
      ctx.fillText('Start', 273, 440)

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
