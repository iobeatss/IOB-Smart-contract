// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract IOBToken is ERC20 {
    constructor(uint256 initialSupply) ERC20("IO Beats Token", "IOB") {
        _mint(msg.sender, initialSupply);
    }
}
