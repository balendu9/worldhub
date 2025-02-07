// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

contract CommunityManager {
    struct Community {
        address owner;
        string name;
        string description;
        uint256 reputation;
    }

    mapping(uint256 => Community) public communities;
    uint256 public communityCount;

    event CommunityCreated(uint256 communityId, string name, address owner);
    event CommunityUpdated(uint256 communityId, string name, string description, uint256 reputation);

    modifier onlyOwner(uint256 _communityId) {
        require(msg.sender == communities[_communityId].owner, "Not authorized");
        _;
    }

    // Function to create a new community
    function createCommunity(string memory _name, string memory _description) external {
        communities[communityCount] = Community(msg.sender, _name, _description, 0);
        emit CommunityCreated(communityCount, _name, msg.sender);
        communityCount++;
    }

    // Function to update community reputation
    function updateCommunityReputation(uint256 _communityId, uint256 _newReputation) external onlyOwner(_communityId) {
        communities[_communityId].reputation = _newReputation;
        emit CommunityUpdated(_communityId, communities[_communityId].name, communities[_communityId].description, _newReputation);
    }

    // Function to update community description (optional)
    function updateCommunityDetails(uint256 _communityId, string memory _newName, string memory _newDescription) external onlyOwner(_communityId) {
        communities[_communityId].name = _newName;
        communities[_communityId].description = _newDescription;
        emit CommunityUpdated(_communityId, _newName, _newDescription, communities[_communityId].reputation);
    }
}
