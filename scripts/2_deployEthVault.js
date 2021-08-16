const { ethers } = require('hardhat')
const prompt = require('async-prompt')

async function main () {
  // const underlying = await prompt('Enter underlying token address: ')
  // const target = await prompt('Enter WETH token address: ')
  // const harvester = await prompt('Enter Harvester address: ')
  // const timelock = await prompt('Enter Timelock address: ')
  // const name = await prompt('Enter Vault ERC20 token name: ')
  // const symbol = await prompt('Enter Vault ERC20 token symbol: ')

  const Vault = await ethers.getContractFactory('EthVault')
  const vault = await Vault.deploy(
    "0xb7a4F3E9097C08dA09517b5aB877F7a917224ede",
    "0xd089805581dc78bC05aCdCC5Dd5355b7055b23C8",
    "0x98789958e3ceDf4B1eC19E852108e5CF7b9EB1e1",
    "0xB4bE310666D2f909789Fb1a2FD09a9bEB0Edd99D",
    "idle",
    "IDL"
  )
  await vault.deployed()

  console.log('ETH vault deployed to:', vault.address)
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error)
    process.exit(1)
  })
