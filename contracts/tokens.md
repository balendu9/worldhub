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


# Factory Contract

The `Factory.sol` contract allows for the creation of custom tokens based on the `Tokens.sol` contract. It facilitates the management of metadata and allows users to buy and sell tokens. This contract ensures easy deployment of tokens, tracks token metadata, and enables seamless interaction with the token contracts.



## Key Features

- **Token Creation**: Allows the creation of new tokens using the `Tokens.sol` contract.
- **Metadata Management**: Each created token has associated metadata, including the token name, symbol, description, and image URI.
- **User and Token Tracking**: Tracks all tokens created by a user and provides a way to retrieve all tokens.
- **Interaction with Token**: Supports the functionality to buy and sell tokens by interacting with the deployed token address.

---

## Token Metadata Management

Each token created through the Factory contract will have associated metadata. This metadata can include:

- **Name**: The name of the token.
- **Symbol**: The token's ticker symbol.
- **Description**: A short description of the token.
- **Image URI**: A URI linking to the token's image.

### Token Metadata Struct

```solidity
struct TokenMetadata {
    string name;
    string symbol;
    string description;
    string imageUri;
    address tokenAddress;
    address owner;
}
