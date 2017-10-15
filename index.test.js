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