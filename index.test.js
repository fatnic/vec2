expect = require('chai').expect

const { Vec2 } = require('./index')

describe('#Vec2 creation', () => {

  it('be an instance of Vec2', () => {
    let vec = new Vec2()
    expect(vec).to.be.instanceof(Vec2)
  })

  it('should initalize with default values', () => {
    let vec = new Vec2()
    expect(vec).to.have.property('x')
    expect(vec).to.have.property('y')
    expect(vec.x).to.equal(0)
    expect(vec.y).to.equal(0)
  })

  it('should initialize with user values', () => {
    let vec = new Vec2(10, 20)
    expect(vec.x).to.equal(10)
    expect(vec.y).to.equal(20)    
  })

  it('should throw an error if number not passed', () => {
    expect(() => {let vec = new Vec2('10', 20) }).to.throw(TypeError)
    expect(() => {let vec = new Vec2(10, '20') }).to.throw(TypeError)   
  })

})

describe('#Vec2 modifiers', () => {

  beforeEach(function(){
    vec = new Vec2(10, 20)
  })

  it('should be able to reset', () => {
    vec.reset()
    expect(vec.x).to.equal(0)
    expect(vec.y).to.equal(0)
  })

  it('should be able to invert', () => {
    vec.invert()
    expect(vec.x).to.equal(-10)
    expect(vec.y).to.equal(-20)
  })

})

describe('#Vec2 simple math', () => {
  
  beforeEach(function() {
    vec  = new Vec2(10, 20)
    vec2 = new Vec2(5, 5)
  })

  it('should be able to add another vector', () => {
    expect(() => { vec.add(10) }).to.throw(TypeError) 

    vec.add(vec2)

    expect(vec.x).to.equal(15)
    expect(vec.y).to.equal(25)
  })

  it('should be able to subtract another vector', () => {
    expect(() => { vec.subtract(10) }).to.throw(TypeError) 

    vec.subtract(vec2)
    
    expect(vec.x).to.equal(5)
    expect(vec.y).to.equal(15)
  })

})