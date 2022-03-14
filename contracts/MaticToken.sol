//SPDX-License-Identifier: MIT
pragma solidity ^0.8.11;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract MaticToken is ERC20 {
    constructor() ERC20("Matic Token", "MATIC") {
        _mint(msg.sender, 10000000000 * 10 ** decimals());
    }
}