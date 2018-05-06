let assert = require('assert');
import Player from '../../src/player.js'

describe('pickup', function() {
  describe('#rock', function() {
    it('should return and not increment any used storage', function() {
      let player = new Player()
      let storageInits = player.usedStorage;
      player.pickup('rock');
      let finalStorage = player.usedStorage;
      assert.equal(storageInits, finalStorage);
    });
  });
  describe('#available storage', function() {
    it('should increment used storage and the item in inventory', function() {
      let player = new Player()
      player.usedStorage = 0
      player.inventory['wood'] = 0
      player.pickup('wood_wood');
      assert.equal(player.usedStorage, 1);
      assert.equal(player.inventory['wood'], 1)
    });
  });
  describe('#storage full', function() {
    it('should not increment any used storage or inventory items', function() {
      let player = new Player()
      player.usedStorage = player.maxStorage
      player.inventory['wood'] = 0
      player.pickup('wood_wood');
      let finalStorage = player.usedStorage;
      assert.equal(player.usedStorage, player.maxStorage);
      assert.equal(player.inventory['wood'], 0)
    });
  });
});

describe('handleKeyDown', function() {
  describe('#player dead', function() {
    it('should return and not move the player', function() {
      let player = new Player()
      player.health = 0
      let currentX = player.x
      let currentY = player.y
      let currentFuel = player.fuel
      let event = {}
      event.preventDefault = function() {}
      event.key = 'a'
      player.handleKeyDown(event)
      let newX = player.x
      let newY = player.y
      let newFuel = player.fuel
      assert.equal(currentX, newX)
      assert.equal(currentY, newY)
      assert.equal(currentFuel, newFuel)
    })
  })

  describe('#player in shop', function() {
    it('should return and not move the player', function() {
      let player = new Player()
      player.x = 599
      player.y = 601
      let currentFuel = player.fuel
      let event = {}
      event.preventDefault = function() {}
      event.key = 'a'
      player.handleKeyDown(event)
      let newFuel = player.fuel
      assert.equal(player.x, 599)
      assert.equal(player.y, 601)
      assert.equal(currentFuel, newFuel)
    })
  })

  describe('#not playing', function() {
    it('should return and not move the player', function() {
      let player = new Player()
      player.state = 'PAUSE'
      let currentX = player.x
      let currentY = player.y
      let currentFuel = player.fuel
      let event = {}
      event.preventDefault = function() {}
      event.key = 'a'
      player.handleKeyDown(event)
      let newX = player.x
      let newY = player.y
      let newFuel = player.fuel
      assert.equal(currentX, newX)
      assert.equal(currentY, newY)
      assert.equal(currentFuel, newFuel)

      player.state = 'START'
      player.handleKeyDown(event)
      newX = player.x
      newY = player.y
      newFuel = player.fuel
      assert.equal(currentX, newX)
      assert.equal(currentY, newY)
      assert.equal(currentFuel, newFuel)
    })
  })

  describe('#\'a\' key pressed when x > 7 and fuel > 0', function() {
    it('should move player left and decrement fuel', function() {
      let player = new Player()
      let currentX = player.x
      let currentY = player.y
      let currentFuel = player.fuel
      let event = {}
      event.preventDefault = function() {}
      event.key = 'a'
      player.handleKeyDown(event)
      let newX = player.x
      let newY = player.y
      let newFuel = player.fuel
      assert.equal(currentX - 1, newX)
      assert.equal(currentY, newY)
      assert.equal(currentFuel - 1, newFuel)
      assert.equal(player.lastMove, 'left')
    })
  })

  describe('#\'a\' key pressed when x < 7 and fuel <= 0', function() {
    it('should not move player left and not decrement fuel', function() {
      let player = new Player()
      player.x = 6
      let currentY = player.y
      player.fuel = 0
      let event = {}
      event.preventDefault = function() {}
      event.key = 'a'
      player.handleKeyDown(event)
      let newY = player.y
      assert.equal(player.x, 6)
      assert.equal(currentY, newY)
      assert.equal(player.fuel, 0)
      assert.equal(player.lastMove, 'left')
    })
  })

  describe('#\'d\' key pressed when x < 1191 and fuel > 0', function() {
    it('should move player right and decrement fuel', function() {
      let player = new Player()
      let currentX = player.x
      let currentY = player.y
      let currentFuel = player.fuel
      let event = {}
      event.preventDefault = function() {}
      event.key = 'd'
      player.handleKeyDown(event)
      let newX = player.x
      let newY = player.y
      let newFuel = player.fuel
      assert.equal(currentX + 1, newX)
      assert.equal(currentY, newY)
      assert.equal(currentFuel - 1, newFuel)
      assert.equal(player.lastMove, 'right')
    })
  })

  describe('#\'d\' key pressed when x > 1191 and fuel < 0', function() {
    it('should not move player right and not decrement fuel', function() {
      let player = new Player()
      player.x = 1192
      let currentY = player.y
      player.fuel = 0
      let event = {}
      event.preventDefault = function() {}
      event.key = 'd'
      player.handleKeyDown(event)
      let newY = player.y
      assert.equal(player.x, 1192)
      assert.equal(currentY, newY)
      assert.equal(player.fuel, 0)
      assert.equal(player.lastMove, 'right')
    })
  })

  describe('#\'w\' key pressed when y > 7 and fuel > 0', function() {
    it('should move the player up and decrement fuel', function() {
      let player = new Player()
      let currentX = player.x
      let currentY = player.y
      let currentFuel = player.fuel
      let event = {}
      event.preventDefault = function() {}
      event.key = 'w'
      player.handleKeyDown(event)
      let newX = player.x
      let newY = player.y
      let newFuel = player.fuel
      assert.equal(currentX, newX)
      assert.equal(currentY - 1, newY)
      assert.equal(currentFuel - 1, newFuel)
      assert.equal(player.lastMove, 'up')
    })
  })

  describe('#\'w\' key pressed when y < 7 and fuel < 0', function() {
    it('should not move the player up and not decrement fuel', function() {
      let player = new Player()
      let currentX = player.x
      player.y = 6
      player.fuel = 0
      let event = {}
      event.preventDefault = function() {}
      event.key = 'w'
      player.handleKeyDown(event)
      let newX = player.x
      assert.equal(currentX, newX)
      assert.equal(player.y, 6)
      assert.equal(player.fuel, 0)
      assert.equal(player.lastMove, 'up')
    })
  })

  describe('#\'s\' key pressed when y < 1191 and fuel > 0', function() {
    it('should move the player down and decrement fuel', function() {
      let player = new Player()
      let currentX = player.x
      let currentY = player.y
      let currentFuel = player.fuel
      let event = {}
      event.preventDefault = function() {}
      event.key = 's'
      player.handleKeyDown(event)
      let newX = player.x
      let newY = player.y
      let newFuel = player.fuel
      assert.equal(currentX, newX)
      assert.equal(currentY + 1, newY)
      assert.equal(currentFuel - 1, newFuel)
      assert.equal(player.lastMove, 'down')
    })
  })

  describe('#\'s\' key pressed when y > 1191 and fuel < 0', function() {
    it('should not move the player down and not decrement fuel', function() {
      let player = new Player()
      let currentX = player.x
      player.y = 1192
      player.fuel = 0
      let event = {}
      event.preventDefault = function() {}
      event.key = 's'
      player.handleKeyDown(event)
      let newX = player.x
      assert.equal(currentX, newX)
      assert.equal(player.y, 1192)
      assert.equal(player.fuel, 0)
      assert.equal(player.lastMove, 'down')
    })
  })

  describe('#any invalid key pressed', function() {
    it('should do absolutely nothing', function() {
      let player = new Player()
      let currentX = player.x
      let currentY = player.y
      let currentFuel = player.fuel
      let currentLastMove = player.lastMove
      let event = {}
      event.preventDefault = function() {}
      event.key = 'b'
      player.handleKeyDown(event)
      let newX = player.x
      let newY = player.y
      let newFuel = player.fuel
      let newLastMove = player.lastMove
      assert.equal(currentX, newX)
      assert.equal(currentY, newY)
      assert.equal(currentFuel, newFuel)
      assert.equal(currentLastMove, newLastMove)
    })
  })
});
