const { expect } = require("chai");

describe("IOBToken", function () {
  let IOBToken, token, owner, addr1, addr2;

  beforeEach(async function () {
    [owner, addr1, addr2] = await ethers.getSigners();
    IOBToken = await ethers.getContractFactory("IOBToken");
    token = await IOBToken.deploy(1000); // déploie avec 1000 tokens
    await token.deployed();
  });

  it("Should assign the total supply to the deployer", async function () {
    expect(await token.totalSupply()).to.equal(1000);
    expect(await token.balanceOf(owner.address)).to.equal(1000);
  });

  it("Should transfer tokens between accounts", async function () {
    await token.transfer(addr1.address, 100);
    expect(await token.balanceOf(addr1.address)).to.equal(100);
    expect(await token.balanceOf(owner.address)).to.equal(900);
  });

  it("Should fail if sender doesn’t have enough tokens", async function () {
    const initialOwnerBalance = await token.balanceOf(owner.address);
    await expect(
      token.connect(addr1).transfer(owner.address, 1)
    ).to.be.revertedWith("ERC20: transfer amount exceeds balance");
    expect(await token.balanceOf(owner.address)).to.equal(initialOwnerBalance);
  });

  it("Should update balances after transfers", async function () {
    await token.transfer(addr1.address, 100);
    await token.connect(addr1).transfer(addr2.address, 50);

    expect(await token.balanceOf(addr2.address)).to.equal(50);
    expect(await token.balanceOf(addr1.address)).to.equal(50);
    expect(await token.balanceOf(owner.address)).to.equal(850);
  });

  it("Should handle allowances correctly", async function () {
    await token.approve(addr1.address, 200);
    expect(await token.allowance(owner.address, addr1.address)).to.equal(200);

    await token.connect(addr1).transferFrom(owner.address, addr2.address, 100);
    expect(await token.balanceOf(addr2.address)).to.equal(100);
    expect(await token.allowance(owner.address, addr1.address)).to.equal(100);
  });
});
