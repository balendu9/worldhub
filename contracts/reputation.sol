// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract ReputationSystem {
    struct User {
        uint256 engagement;  // Posts, replies, reactions
        uint256 community;   // Followers, invites, community-building
        uint256 trust;       // KYC, upvotes, spam reports
        uint256 longevity;   // Account age
        uint256 reputation;  // Final calculated reputation score
    }

    mapping(address => User) public users;
    uint256 public maxReputation = 1000;  // Normalized reputation score cap

    // Weights (multiplied by 100 for Solidity integer division)
    uint256 private constant W_ENGAGEMENT = 30; // 30% weight
    uint256 private constant W_COMMUNITY = 25;  // 25% weight
    uint256 private constant W_TRUST = 35;      // 35% weight
    uint256 private constant W_LONGEVITY = 10;  // 10% weight
    uint256 private constant WEIGHT_SUM = 100;  // 100% total

    // Modifier to ensure only valid users update reputation
    modifier onlyValidUser(address _user) {
        require(_user != address(0), "Invalid user address");
        _;
    }

    // Function to update user activity stats
    function updateUserActivity(
        address _user, 
        uint256 posts, 
        uint256 reactions, 
        uint256 followers, 
        uint256 invites, 
        uint256 trustPoints, 
        uint256 spamReports, 
        uint256 accountAgeMonths
    ) public onlyValidUser(_user) {
        User storage user = users[_user];

        // Update components
        user.engagement += (posts + (reactions / 2)); // 1 per post, 0.5 per reaction
        user.community += (followers / 10) + (invites * 3); // 1 per 10 followers, +3 per invite
        user.trust += trustPoints; // Upvotes & KYC add points
        user.trust -= spamReports * 5; // Deduct for spam
        user.longevity += accountAgeMonths * 2; // 2 points per month active

        // Recalculate reputation
        calculateReputation(_user);
    }

    // Function to calculate and normalize reputation score
    function calculateReputation(address _user) internal {
        User storage user = users[_user];

        uint256 rawScore = (
            (user.engagement * W_ENGAGEMENT) +
            (user.community * W_COMMUNITY) +
            (user.trust * W_TRUST) +
            (user.longevity * W_LONGEVITY)
        ) / WEIGHT_SUM;

        // Normalize to a max of 1000
        if (rawScore > maxReputation) {
            rawScore = maxReputation;
        }

        user.reputation = rawScore;
    }

    // Function to get user's reputation score
    function getReputation(address _user) public view returns (uint256) {
        return users[_user].reputation;
    }

    // Function to get user's reputation rank
    function getReputationRank(address _user) public view returns (string memory) {
        uint256 rep = users[_user].reputation;

        if (rep >= 1000) return "VIP Contributor";
        if (rep >= 700) return "Trusted Member";
        if (rep >= 400) return "Engaged User";
        if (rep >= 100) return "Active User";
        return "Newbie";
    }
}
