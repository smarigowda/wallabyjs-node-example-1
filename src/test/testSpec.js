let calculator = require("../lib/calculator");
let ajaxRequest = require("../lib/ajax");

describe("calculator", () => {
  it("should add numbers", () => {
    expect(calculator.add(2, 2)).to.equal(4);
  });
  it("ajax request", async done => {
    let result = await ajaxRequest();
    let { data } = result;
    expect(data.data.length).to.equal(24);
    done();
  });
});