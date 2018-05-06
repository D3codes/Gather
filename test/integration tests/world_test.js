let assert = require('assert')
import World from '../../src/world'
import Player from '../../src/player'

describe('refuel', function() {
  describe('#afford refuel to max capacity', function() {
    it('should refuel player to max capacity', function() {
      let player = new Player()
      let world = new World()
      player.fuel = 0
      player.money = player.maxFuel * 2
      player.fuel += world.refuel(player.getInfo())
      assert.equal(player.fuel, player.maxFuel)
    })
  })

  describe('#cannot afford refuel to max capacity', function() {
    it('should refuel player to max they can afford', function() {
      let player = new Player()
      let world = new World()
      player.fuel = 0
      player.money = 10
      let fuel = world.refuel(player.getInfo())
      assert.equal(fuel, Math.floor(player.money/2))
    })
  })
})

describe('repair', function() {
  describe('#afford repair to max health', function() {
    it('should repair player to max health', function() {
      let player = new Player()
      let world = new World()
      player.health = 0
      player.money = 1000
      player.health += world.repair(player.getInfo())
      assert.equal(player.health, 100)
    })
  })

  describe('#cannot afford repair to max health', function() {
    it('should repair player to max they can afford', function() {
      let player = new Player()
      let world = new World()
      player.health = 0
      player.money = 50
      let repair = world.repair(player.getInfo())
      assert.equal(repair, Math.floor(player.money/10))
    })
  })
})

describe('sellItems', function() {
  describe('#empty inventory', function() {
    it('should not pay the player anything', function() {
      let player = new Player()
      let world = new World()
      player.money = 0
      player.money += world.sellItems(player.inventory)
      assert.equal(player.money, 0)
    })
  })

  describe('#items in inventory', function() {
    it('should pay player for items sold', function() {
      let player = new Player()
      let world = new World()
      player.inventory.wood = 5
      player.inventory.alexandrite = 1
      player.money = 0
      player.money += world.sellItems(player.inventory)
      assert.equal(player.money, 400)
    })
  })
})
