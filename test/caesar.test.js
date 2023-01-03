const { expect } = require("chai");
const caesarModule = require("../src/caesar");

describe("caesar", () => {
  it("returns encoded messages", () => {
    const actual= caesarModule.caesar("Zebra Magazine", 3);
    const expected = "cheud pdjdclqh";
    expect(actual).to.eql(expected);
  });
  it("returns decoded messages", () => {
    const actual= caesarModule.caesar("cheud pdjdclqh", 3, false);
    const expected= "zebra magazine"
    expect(actual).to.eql(expected);
  })
  it("ignores capital letters", () => {
    const actual= caesarModule.caesar("My name is Lauren Richards!", 2)
    const expected= "oa pcog ku ncwtgp tkejctfu!"
    expect(actual).to.eql(expected)
    })
  it("returns false if the shift is greater than 25", () => {
    const actual= caesarModule.caesar("Lauren Richards", 30)
    expect(actual).to.be.false
  })
  it("returns false if shift is smaller than -25", () => {
    const actual= caesarModule.caesar("Lauren Richards, -45")
    expect(actual).to.be.false
  })
  it("returns false if shift is 0", () => {
    const actual= caesarModule.caesar("Lauren Richards", 0)
    expect(actual).to.be.false
  })
  it("returns false if shift is not present ", () => {
    const actual= caesarModule.caesar("Lauren Richards")
    expect(actual).to.be.false
  })
  it("maintains spaces and nonalphabetic symbols", () => {
    const actual= caesarModule.caesar("My name is Lauren Richards!", 2)
    const expected= "oa pcog ku ncwtgp tkejctfu!"
    expect(actual).to.eql(expected)
    })
  it("handles shifts that go past the end of the alphabet", () => {
    const actual= caesarModule.caesar("zebra", 3)
    const expected= "cheud"
    expect(actual).to.eql(expected)
  })
 
})