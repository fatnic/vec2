expect = require('chai').expect
const Vec2  = require('../src/vec2')

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

describe('#Vec2 simple methods', () => {

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

  it('should be settable with a method', () => {
    vec.set(1,2)
    expect(vec.x).to.equal(1)
    expect(vec.y).to.equal(2)
  })

  it('should only set with a number', () => {
    expect(() => { vec.set('1', 2) }).to.throw(TypeError) 
    expect(() => { vec.set(1, '2') }).to.throw(TypeError) 
  })

  it('should be able to test equality to another Vec2')
  it('should be cloneable')

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

  it('should be able to divide by a value', () => {
    expect(() => { vec.divide(vec2) }).to.throw(TypeError) 
    
    vec.divide(2)

    expect(vec.x).to.equal(5)
    expect(vec.y).to.equal(10)
  })

  it('should throw an error if trying to divide by zero', () => {
    expect(() => { vec.divide(0) }).to.throw(Error) 
  })

  it('should be able to multiply by a number', () => {
    vec.multiply(2)
    expect(vec.x).to.equal(20)
    expect(vec.y).to.equal(40)
  })

  it('should be able to multiply by a vector', () => {
    vec.multiply(vec2)
    expect(vec.x).to.equal(50)
    expect(vec.y).to.equal(100)
  })

  it('should throw an error if trying to multiply by non-number or Vec2', () => {
    expect(() => { vec.multiply('10') }).to.throw(TypeError) 
  })

})

describe('#Vec2 vector math', () => {
  
  beforeEach(function() {
    vec  = new Vec2(10, 20)
    vec2 = new Vec2(5, 5)
  })

  it('should calculate the dot product', () => {
    let dot = vec.dot(vec2)
    expect(dot).to.equal(150)
  })

  it('should calculate the length', () => {
    let length = vec.length()
    expect(length).to.be.a('number')
  })

  it('should calculate the distance between two vectors')
  it('should calculate the unit vector')

})