// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Users {
    // Structure to store user's data
    struct User {
        address userAddress;              // User's address
        address[] communities;            // List of community addresses the user is part of
        mapping(address => uint256) tokens; // Mapping of token address to token amount
        uint256 reputationScore;           // Reputation score
    }

    // Mapping of user addresses to their respective data
    mapping(address => User) private users;
    // Mapping to check if an address is already registered
    mapping(address => bool) private registeredUsers;

    // Maximum reputation score allowed
    uint256 public constant MAX_REPUTATION_SCORE = 1000;

    // Events
    event UserRegistered(address indexed userAddress);
    event ReputationUpdated(address indexed userAddress, uint256 newReputationScore);
    event TokenOwnershipUpdated(address indexed userAddress, address indexed tokenAddress, uint256 amount);
    event CommunityAdded(address indexed userAddress, address indexed communityAddress);

    // Modifier to check if the caller is a registered user
    modifier onlyRegisteredUser() {
        require(registeredUsers[msg.sender], "User is not registered.");
        _;
    }

    // Modifier to check if the address is not registered
    modifier onlyUnregisteredUser() {
        require(!registeredUsers[msg.sender], "User already registered.");
        _;
    }

    // Function to register a new user
    function registerUser() external onlyUnregisteredUser {
        // Creating a new user
        users[msg.sender].userAddress = msg.sender;
        registeredUsers[msg.sender] = true;

        emit UserRegistered(msg.sender);
    }

    // Function to add a community to the user's list
    function addCommunity(address communityAddress) external onlyRegisteredUser {
        require(communityAddress != address(0), "Invalid community address.");
        require(!isPartOfCommunity(msg.sender, communityAddress), "User is already part of this community.");

        users[msg.sender].communities.push(communityAddress);

        emit CommunityAdded(msg.sender, communityAddress);
    }

    // Function to check if a user is part of a community
    function isPartOfCommunity(address userAddress, address communityAddress) public view returns (bool) {
        address[] memory userCommunities = users[userAddress].communities;
        for (uint256 i = 0; i < userCommunities.length; i++) {
            if (userCommunities[i] == communityAddress) {
                return true;
            }
        }
        return false;
    }

    // Function to add tokens owned by the user
    function addToken(address tokenAddress, uint256 amount) external onlyRegisteredUser {
        require(tokenAddress != address(0), "Invalid token address.");
        require(amount > 0, "Amount must be greater than zero.");

        users[msg.sender].tokens[tokenAddress] += amount;

        emit TokenOwnershipUpdated(msg.sender, tokenAddress, amount);
    }

    // Function to update the user's reputation score
    function updateReputationScore(uint256 newReputationScore) external onlyRegisteredUser {
        require(newReputationScore <= MAX_REPUTATION_SCORE, "Reputation score exceeds the maximum allowed.");

        users[msg.sender].reputationScore = newReputationScore;

        emit ReputationUpdated(msg.sender, newReputationScore);
    }

    // Function to get user information
    function getUserInfo(address userAddress) external view returns (address[] memory communities, uint256 reputationScore) {
        require(registeredUsers[userAddress], "User not found.");
        return (users[userAddress].communities, users[userAddress].reputationScore);
    }

    // Function to get a user's token balance for a specific token address
    function getTokenBalance(address userAddress, address tokenAddress) external view returns (uint256) {
        return users[userAddress].tokens[tokenAddress];
    }

    // Function to check if the user is registered
    function isUserRegistered(address userAddress) external view returns (bool) {
        return registeredUsers[userAddress];
    }

    // Function to get the user's community count
    function getUserCommunityCount(address userAddress) external view returns (uint256) {
        return users[userAddress].communities.length;
    }

    // Function to get a user's community at a specific index
    function getUserCommunityByIndex(address userAddress, uint256 index) external view returns (address) {
        require(index < users[userAddress].communities.length, "Index out of bounds.");
        return users[userAddress].communities[index];
    }
}
