export default class Popup {
  constructor() {
    this.state = 'PLAY'
  }

  update(state) {
    this.state = state
  }

  render(ctx) {
    if(this.state === 'GAME OVER') {
			ctx.fillStyle = 'white'
			ctx.fillRect(100, 150, 400, 300)

			ctx.font = '20px Verdana'
			ctx.fillStyle = 'red'
			ctx.fillText('GAME OVER', 240, 200)

			ctx.fillStyle = 'red'
			ctx.fillRect(250, 400, 100, 25)
			ctx.fillStyle = 'white'
			ctx.font = '20px Verdana'
			ctx.fillText('Restart', 262, 420)
		} else if (this.state === 'UPGRADE') {
      //TODO: add upgrade popup menu
    }
  }
}
