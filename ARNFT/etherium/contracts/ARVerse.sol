// SPDX-License-Identifier: MIT
pragma solidity ^0.8.1;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract ARVerse is ERC721 {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIdCounter;

    constructor() ERC721("ARVerse", "ESS") {}

    function _baseURI() internal pure override returns (string memory) {
        return "../../web/arverse/pages/api/erc721/1";
    }

    function mint(address to)
        public returns (uint256)
    {
        require(_tokenIdCounter.current() < 1);
        _tokenIdCounter.increment();
        _safeMint(to, _tokenIdCounter.current());

        return _tokenIdCounter.current();
    }
}