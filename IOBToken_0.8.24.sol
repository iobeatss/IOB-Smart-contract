// SPDX-License-Identifier: MIT
pragma solidity 0.8.24;

/**
 * Submitted for verification at Etherscan.io on 2025-09-02
 * IO Beats — IOB token (optimized build)
 */

import "@openzeppelin/contracts/utils/Context.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";

contract IOBToken is ERC20Burnable, Ownable {
    constructor(address newOwner) ERC20("iobeats", "IOB") {
        _transferOwnership(newOwner);
        _mint(newOwner, 10_000_000_000 * 10 ** decimals());
    }
}
