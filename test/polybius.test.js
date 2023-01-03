const { expect } = require("chai");
const polybiusModule = require("../src/polybius");

describe ("polybius()", () => {
  it("returns encoded messages", () => {
    const actual= polybiusModule.polybius("holidays");
    const expected = "3243134241114534";
    expect(actual).to.eql(expected);
  });
  it("returns decoded messages", () => {
    const actual= polybiusModule.polybius("3243134241114534", false);
    const expected= "hol(i/j)days";
    expect(actual).to.eql(expected);
  })
  it("ignores capital letters", () => {
    const actual= polybiusModule.polybius("Hello");
    const expected= "3251131343";
    expect(actual).to.eql(expected)
  })
  
  it("maintains spaces while encoding", () => {
    const actual= polybiusModule.polybius("Hello testing");
    const expected= "3251131343 44513444423322"
    expect(actual).to.eql(expected)
  })
  it("returns both i and j when decoding the number 42", () => {
    const actual= polybiusModule.polybius("4432423352125413", false);
    const expected= "th(i/j)nkful"
    expect(actual).to.eql(expected)
  })
  it("returns false when an uneven amount of numbers is given when decoding", () => {
    const actual= polybiusModule.polybius("443242335212541", false);
     expect(actual).to.be.false
  })
  it("maintains spaces while decoding", () => {
    const actual= polybiusModule.polybius("3251131343 44513444", false);
    const expected= "hello test"
    expect(actual).to.eql(expected)
  })
 it("returns 42 when i or j are given", () => {
   const actual= polybiusModule.polybius("Jingle");
   const expected= "424233221351"
   expect(actual).to.eql(expected)
 })
})
