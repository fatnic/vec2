const Vec2 = class Vec2 {

  constructor(x = 0, y = 0) {
    if (typeof(x) != 'number') throw new TypeError("'x' should be a number")
    if (typeof(y) != 'number') throw new TypeError("'y' should be a number")    
    this.x = x
    this.y = y
    return this
  }

  reset() {
    this.x = this.y = 0
    return this
  }

  invert() {
    this.x = -this.x
    this.y = -this.y
    return this
  }

  add(vec) {
    if (!(vec instanceof Vec2)) throw new TypeError("expect a Vec2 to be passed")    
    this.x += vec.x
    this.y += vec.y
    return this
  }
  
  subtract(vec) {
    if (!(vec instanceof Vec2)) throw new TypeError("expect a Vec2 to be passed")    
    this.x -= vec.x
    this.y -= vec.y
    return this
  }
  
}

module.exports = { Vec2 }