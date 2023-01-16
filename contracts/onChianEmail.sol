// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

import "hardhat/console.sol";

contract OnChainEmail {
    event uploadMessage(address indexed sender,address indexed  receiver, string indexed ipfsHash);
    mapping(address => string) public publicKeys;
    function request(string memory publicKey) public {  
    publicKeys[msg.sender] = publicKey;
    }

    function sendMessage(string memory ipfsHash, address receiver) public {
        emit uploadMessage(msg.sender,receiver,ipfsHash);
    }
} 
