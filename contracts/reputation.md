# Reputation System Smart Contract

## Overview

The **Reputation System Smart Contract** is designed to calculate and maintain user reputation scores based on their activity and contributions within a decentralized Web3 application. The contract tracks engagement, community-building, trustworthiness, and longevity to assign reputation scores to users. The scores are normalized out of 1000 and can be used for ranking users and offering incentives.

## Features

- **Reputation Tracking**: Automatically updates user reputation scores based on different activities like posts, reactions, followers, invites, trust (KYC), spam reports, and account age.
- **Weighted Scoring System**: Reputation scores are calculated based on a weighted average of various factors:
  - Engagement: Posts, replies, and reactions (30%)
  - Community: Followers, invites (25%)
  - Trust: KYC verification, upvotes, and spam reports (-) (35%)
  - Longevity: Account age in months (10%)
- **Normalized Reputation**: Reputation scores are capped at 1000 and ranked accordingly.
- **Ranking System**: Users are classified into different reputation levels (Newbie, Active User, Engaged User, Trusted Member, VIP Contributor).

## How This Works

Users earn reputation based on the following:

- **Posts & Replies**: +1 per post
- **Reactions Received**: +0.5 per like, retweet, or share
- **Followers**: +1 per 10 followers
- **Invites**: +3 per invited active user
- **Trust (KYC, Upvotes)**: Earns positive points
- **Spam Reports**: Loses -5 points per valid report
- **Account Age**: +2 per active month

### Reputation Score Formula (Weighted)

The reputation score is calculated based on the following weights:

- **Engagement (30%)**
- **Community (25%)**
- **Trust (35%)**
- **Longevity (10%)**

The final reputation score is **normalized to a maximum of 1000**.

### User Reputation Levels

- **1000+**: VIP Contributor
- **700-999**: Trusted Member
- **400-699**: Engaged User
- **100-399**: Active User
- **0-99**: Newbie

## Contract Details

### Key Components

1. **User Structure**:  
   The contract uses a `User` struct to track:
   - `engagement`: Number of posts, replies, and reactions.
   - `community`: Followers and invites.
   - `trust`: KYC verification, upvotes, and spam reports.
   - `longevity`: Account age in months.
   - `reputation`: The final calculated reputation score.

2. **Weights**:  
   Reputation is calculated using the following weights:
   - **Engagement**: 30%
   - **Community**: 25%
   - **Trust**: 35%
   - **Longevity**: 10%

3. **Reputation Calculation**:  
   The reputation score is a weighted sum of the above factors. It is normalized to a maximum of 1000.

### Functions

1. **updateUserActivity**:  
   Updates a user's activity data (posts, reactions, followers, invites, trust, spam reports, account age) and recalculates their reputation score.

   ```solidity
   function updateUserActivity(
       address _user,
       uint256 posts,
       uint256 reactions,
       uint256 followers,
       uint256 invites,
       uint256 trustPoints,
       uint256 spamReports,
       uint256 accountAgeMonths
   ) public onlyValidUser(_user);
