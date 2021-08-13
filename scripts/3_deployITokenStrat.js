const { ethers } = require('hardhat')
const prompt = require('async-prompt')

async function main () {
  const vault = await prompt('Enter vault address: ')
  const yToken = await prompt('Enter iToken token address: ')
  const timelock = await prompt('Enter governance timelock address: ')

  const Strat = await ethers.getContractFactory('IDleTokenStrat')
  const strat = await Strat.deploy(
    vault,
    yToken,
    timelock
  )
  await strat.deployed()

  console.log('IDleTokenStrat deployed to:', strat.address)
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error)
    process.exit(1)
  })
