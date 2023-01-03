const { expect } = require("chai");
const substitutionModule = require("../src/substitution");

describe ("substitution()", () => {
  it("returns encoded message", () => {
    const actual= substitutionModule.substitution("hello", "xoyqmcgrukswaflnthdjpzibev");
    const expected= "rmwwl";
    expect(actual).to.eql(expected)
  })
  it("returns decoded message", () => {
    const actual= substitutionModule.substitution("rmwwl", "xoyqmcgrukswaflnthdjpzibev", false);
    const expected= "hello";
    expect(actual).to.eql(expected)
  })
  it("returns false if alphabet does not have 26 characters", () => {
    const actual= substitutionModule.substitution("hello", "xoyqmcgrukswaflnthdjpzie");
    const expected= false;
    expect(actual).to.eql(expected)
  })
  it("returns false if input or alphabet is missing", () => {
    const actual= substitutionModule.substitution("", "");
    const expected= false;
    expect(actual).to.eql(expected)
  })
  it("returns false if every letter in alphabet is not unique", () => {
    const actual= substitutionModule.substitution("hello", "abcdcdcdcdabababababababcb");
    const expected= false;
    expect(actual).to.eql(expected)
  })
  it("ignores capital letters and maintains spaces while encoding", () => {
    const actual= substitutionModule.substitution("Hi Thinkful", "xoyqmcgrukswaflnthdjpzibev")
    const expected= "ru jrufscpw"
    expect(actual).to.eql(expected)
  })
   it("ignores capital letters and maintains spaces while decoding", () => {
    const actual= substitutionModule.substitution("ru jrufscpw", "xoyqmcgrukswaflnthdjpzibev", false)
    const expected= "hi thinkful"
    expect(actual).to.eql(expected)
  })
})