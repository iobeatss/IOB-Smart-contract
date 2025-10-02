const { expect } = require("chai");

describe("IOBToken", function () {
  it("Should assign the total supply to the deployer", async function () {
    const [owner] = await ethers.getSigners();
    const IOBToken = await ethers.getContractFactory("IOBToken");
    const token = await IOBToken.deploy(1000); // déploie avec 1000 tokens
    await token.deployed();

    expect(await token.balanceOf(owner.address)).to.equal(1000);
  });
});
