class Vec2 {

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

  set(x, y) {
    if (typeof(x) != 'number') throw new TypeError("'x' should be a number")
    if (typeof(y) != 'number') throw new TypeError("'y' should be a number")    
    this.x = x
    this.y = y
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

  divide(val) {
    if(val == 0) throw new Error('cannot divide by zero!')
    if (typeof(val) != 'number') throw new TypeError("should be passed a number")    
    this.x /= val
    this.y /= val
    return this
  }

  multiply(val) {
    if (typeof(val) == 'number') {
      this.x *= val
      this.y *= val
    } else if (val instanceof Vec2) {
      this.x *= val.x
      this.y *= val.y
    } else {
      throw new TypeError("expect a number or Vec2")
    }
    return this
  }
  
  dot(vec) {
    if (!(vec instanceof Vec2)) throw new TypeError("expect a Vec2 to be passed")        
    return this.x * vec.x + this.y * vec.y
  }

  length() {
    if (!(vec instanceof Vec2)) throw new TypeError("expect a Vec2 to be passed")        
    return Math.sqrt(this.dot(this))
  }

}

if (typeof module != 'undefined' && module.exports) module.exports = Vec2