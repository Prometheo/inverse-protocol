//SPDX-License-Identifier: Unlicense
pragma solidity 0.7.3;


interface IIdleToken {
  function token() external view returns (address underlying);
  function balanceOf(address user) external view returns (uint);
  function totalSupply() external view returns (uint);
  function govTokens(uint256) external view returns (address govToken);
  function userAvgPrices(address) external view returns (uint256 avgPrice);
  function mintIdleToken(uint256 _amount, bool _skipWholeRebalance, address _referral) external returns (uint256 mintedTokens);
  function redeemIdleToken(uint256 _amount) external returns (uint256 redeemedTokens);
  function redeemInterestBearingTokens(uint256 _amount) external;
  function rebalance() external returns (bool);
  function tokenPrice() external view returns (uint256 price);
  function getAPRs() external view returns (address[] memory addresses, uint256[] memory aprs);
  function getAvgAPR() external view returns (uint256 avgApr);
  function getGovTokensAmounts(address _usr) external view returns (uint256[] memory _amounts);
  function getAllocations() external view returns (uint256[] memory);
  function getGovTokens() external view returns (address[] memory);
  function getAllAvailableTokens() external view returns (address[] memory);
  function getProtocolTokenToGov(address _protocolToken) external view returns (address);
  function tokenPriceWithFee(address user) external view returns (uint256 priceWFee);
  function decimals() external view returns (uint8);
}