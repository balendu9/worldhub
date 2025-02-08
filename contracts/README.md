# Token and Factory Contracts

This repository contains two smart contracts: `Tokens.sol` and `Factory.sol`. These contracts allow the creation and management of custom tokens with a dynamic pricing mechanism and provide functionality for users to buy and sell tokens in a decentralized manner. The token pricing model is based on a **bonding curve**, which adjusts token prices as the total supply changes.

## Overview

1. **Tokens.sol**: This contract defines the custom token behavior with a dynamic pricing mechanism, allowing users to buy and sell tokens.
2. **Factory.sol**: This contract enables the creation of new tokens based on `Tokens.sol`. It keeps track of all tokens created and their metadata.

---

## Table of Contents

- [Tokens.sol](#tokens-sol)
  - [Key Features](#key-features)
  - [Mathematical Model - Bonding Curve](#mathematical-model---bonding-curve)
  - [Token Price Calculation](#token-price-calculation)
  - [Buy and Sell Functions](#buy-and-sell-functions)
  - [User Tracking](#user-tracking)
  - [Events](#events)
- [Factory.sol](#factory-sol)
  - [Key Features](#key-features-1)
  - [Token Metadata Management](#token-metadata-management)
  - [Create, Buy, and Sell Tokens](#create-buy-and-sell-tokens)
- [Deployment and Usage](#deployment-and-usage)

---



## Tokens.sol

### Key Features

- **Token Minting and Burning**: Users can buy tokens by sending Ether (ETH) to the contract, and the tokens are minted accordingly. Users can sell tokens by burning them, and the contract returns the equivalent ETH.
- **Dynamic Pricing Model**: The token price is determined by a **bonding curve**, which adjusts based on the total supply of tokens.
- **Launch Threshold**: A specified market cap threshold (`LAUNCH_MARKET_CAP`) determines when the token officially launches, locking in the launch price.
- **Market Metrics**: The contract tracks market metrics such as price phase, total volume, and peak price.

### Mathematical Model - Bonding Curve

The price of the token is determined using a **Linear-Quadratic Bonding Curve**:

\[
P = P_0 \times (1 + kx + mx^2)
\]

Where:
- \( P_0 \) is the initial token price (`INITIAL_PRICE`).
- \( x \) is the ratio of the current supply to the maximum supply.
- \( k \) and \( m \) are constants that control the linear and quadratic growth of the price.

#### Explanation:

- **Linear Growth**: As the supply increases, the price increases linearly.
- **Quadratic Growth**: The price increase accelerates as the supply approaches the maximum limit. The quadratic term \( mx^2 \) ensures a non-linear price growth.

The formula ensures that the token price increases as more tokens are minted, making early purchases cheaper and rewarding early investors.

#### Price Calculation Example:

For a token with an initial price \( P_0 = 0.00001 \, \text{ether} \), and a maximum supply of 100,000 tokens:

- If the current supply is 25,000 tokens (1/4th of the max supply), the price will be higher than the initial price.
- As the supply increases, the price will increase faster due to the quadratic term.

### Token Price Calculation

The price is calculated using the formula described above. Here’s how the price is updated in the contract:

```solidity
function calculatePrice(uint256 supply) public view returns (uint256) {
    if (isLaunched) {
        return launchPrice;
    }
    return _calculateBasePrice(supply);
}


```
-------------------------------------


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










































- [Token Trading README](./tokens.md) - Detailed information about the smart contract implementation of tokens and bonding curves.
- [Reputation README](./reputation.md) - Information regarding the reputation of users